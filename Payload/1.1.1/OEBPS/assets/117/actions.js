pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 33480;
pubcoder.page.title = pubcoder.page.title || "117";
pubcoder.page.number = pubcoder.page.number || 117;
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
var obj86008_onTap_activeActionGroupIndex = -1;
var obj86008_onTap_runningActionsCount = 0;
var obj86008_onTap_loopCount = 0;
var obj86005_onTap_activeActionGroupIndex = -1;
var obj86005_onTap_runningActionsCount = 0;
var obj86005_onTap_loopCount = 0;
var obj86001_onTap_activeActionGroupIndex = -1;
var obj86001_onTap_runningActionsCount = 0;
var obj86001_onTap_loopCount = 0;
var obj85910_onDrag_activeActionGroupIndex = -1;
var obj85910_onDrag_runningActionsCount = 0;
var obj85910_onDrag_loopCount = 0;
var obj85910_onTouchDown_activeActionGroupIndex = -1;
var obj85910_onTouchDown_runningActionsCount = 0;
var obj85910_onTouchDown_loopCount = 0;
var obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_loopCount = 0;
var obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85910_droppedInsideTargetActions_4_loopCount = 0;
var obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85910_droppedInsideTargetActions_3_loopCount = 0;
var obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85910_droppedInsideTargetActions_2_loopCount = 0;
var obj85910_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85910_droppedInsideTargetActions_runningActionsCount = 0;
var obj85910_droppedInsideTargetActions_loopCount = 0;
var obj85857_onDrag_activeActionGroupIndex = -1;
var obj85857_onDrag_runningActionsCount = 0;
var obj85857_onDrag_loopCount = 0;
var obj85857_onTouchDown_activeActionGroupIndex = -1;
var obj85857_onTouchDown_runningActionsCount = 0;
var obj85857_onTouchDown_loopCount = 0;
var obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_loopCount = 0;
var obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85857_droppedInsideTargetActions_4_loopCount = 0;
var obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85857_droppedInsideTargetActions_3_loopCount = 0;
var obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85857_droppedInsideTargetActions_2_loopCount = 0;
var obj85857_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85857_droppedInsideTargetActions_runningActionsCount = 0;
var obj85857_droppedInsideTargetActions_loopCount = 0;
var obj85804_onDrag_activeActionGroupIndex = -1;
var obj85804_onDrag_runningActionsCount = 0;
var obj85804_onDrag_loopCount = 0;
var obj85804_onTouchDown_activeActionGroupIndex = -1;
var obj85804_onTouchDown_runningActionsCount = 0;
var obj85804_onTouchDown_loopCount = 0;
var obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_loopCount = 0;
var obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85804_droppedInsideTargetActions_4_loopCount = 0;
var obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85804_droppedInsideTargetActions_3_loopCount = 0;
var obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85804_droppedInsideTargetActions_2_loopCount = 0;
var obj85804_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85804_droppedInsideTargetActions_runningActionsCount = 0;
var obj85804_droppedInsideTargetActions_loopCount = 0;
var obj85751_onDrag_activeActionGroupIndex = -1;
var obj85751_onDrag_runningActionsCount = 0;
var obj85751_onDrag_loopCount = 0;
var obj85751_onTouchDown_activeActionGroupIndex = -1;
var obj85751_onTouchDown_runningActionsCount = 0;
var obj85751_onTouchDown_loopCount = 0;
var obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_loopCount = 0;
var obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85751_droppedInsideTargetActions_4_loopCount = 0;
var obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85751_droppedInsideTargetActions_3_loopCount = 0;
var obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85751_droppedInsideTargetActions_2_loopCount = 0;
var obj85751_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85751_droppedInsideTargetActions_runningActionsCount = 0;
var obj85751_droppedInsideTargetActions_loopCount = 0;
var obj85733_onTap_activeActionGroupIndex = -1;
var obj85733_onTap_runningActionsCount = 0;
var obj85733_onTap_loopCount = 0;
var obj85725_onTap_activeActionGroupIndex = -1;
var obj85725_onTap_runningActionsCount = 0;
var obj85725_onTap_loopCount = 0;
var obj88273_onTap_activeActionGroupIndex = -1;
var obj88273_onTap_runningActionsCount = 0;
var obj88273_onTap_loopCount = 0;
var obj88268_onTap_activeActionGroupIndex = -1;
var obj88268_onTap_runningActionsCount = 0;
var obj88268_onTap_loopCount = 0;
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
		
obj86008_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86008_onTap_activeActionGroupIndex = -1;
		$("#obj86008").trigger("obj86008_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86008) {
				console.warn("de-queueing event obj86008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86008_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86010();
function goToPage_86010() {
	window.obj86008_onTap_runningActionsCount = obj86008_onTap_runningActionsCount + 1;
	$("#anchor702")[0].click();
	window.obj86008_onTap_runningActionsCount = window.obj86008_onTap_runningActionsCount - 1;
if (window.obj86008_onTap_runningActionsCount < 0) {
	window.obj86008_onTap_runningActionsCount = 0;
} else if (window.obj86008_onTap_runningActionsCount == 0) {
	obj86008_onTap_actionGroup1();
}
}





















};
obj86008_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86008_onTap_activeActionGroupIndex = -1;
		$("#obj86008").trigger("obj86008_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86008) {
				console.warn("de-queueing event obj86008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86008_onTap_activeActionGroupIndex = 1;
	





















};
obj86005_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86005_onTap_activeActionGroupIndex = -1;
		$("#obj86005").trigger("obj86005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86005) {
				console.warn("de-queueing event obj86005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86005_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86007();
function goToPage_86007() {
	window.obj86005_onTap_runningActionsCount = obj86005_onTap_runningActionsCount + 1;
	$("#anchor703")[0].click();
	window.obj86005_onTap_runningActionsCount = window.obj86005_onTap_runningActionsCount - 1;
if (window.obj86005_onTap_runningActionsCount < 0) {
	window.obj86005_onTap_runningActionsCount = 0;
} else if (window.obj86005_onTap_runningActionsCount == 0) {
	obj86005_onTap_actionGroup1();
}
}





















};
obj86005_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86005_onTap_activeActionGroupIndex = -1;
		$("#obj86005").trigger("obj86005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86005) {
				console.warn("de-queueing event obj86005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86005_onTap_activeActionGroupIndex = 1;
	





















};
obj86001_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86001_onTap_activeActionGroupIndex = -1;
		$("#obj86001").trigger("obj86001_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86001) {
				console.warn("de-queueing event obj86001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86001_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86003();
function goToPage_86003() {
	window.obj86001_onTap_runningActionsCount = obj86001_onTap_runningActionsCount + 1;
	$("#anchor704")[0].click();
	window.obj86001_onTap_runningActionsCount = window.obj86001_onTap_runningActionsCount - 1;
if (window.obj86001_onTap_runningActionsCount < 0) {
	window.obj86001_onTap_runningActionsCount = 0;
} else if (window.obj86001_onTap_runningActionsCount == 0) {
	obj86001_onTap_actionGroup1();
}
}





















};
obj86001_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86001_onTap_activeActionGroupIndex = -1;
		$("#obj86001").trigger("obj86001_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86001) {
				console.warn("de-queueing event obj86001." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86001").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86001_onTap_activeActionGroupIndex = 1;
	





















};
obj85910_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85910");
//	action: dragDrop
//	target: obj85910 
dragDrop_85913();
function dragDrop_85913() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85910_onTouchDown_runningActionsCount = obj85910_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85910');
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
	  	containerNode = $('#obj85991');
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
    	window.obj85910_onTouchDown_runningActionsCount = window.obj85910_onTouchDown_runningActionsCount - 1;
if (window.obj85910_onTouchDown_runningActionsCount < 0) {
	window.obj85910_onTouchDown_runningActionsCount = 0;
} else if (window.obj85910_onTouchDown_runningActionsCount == 0) {
	obj85910_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85977","#obj85981","#obj85979","#obj85965");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85913 = false;
    	var dropped_id_85913;
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
					dropped_85913 = true;
					dropped_id_85913 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85913) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85910").trigger('SCActionDragDrop85913_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85910_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85910_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85910 
move_92519();
function move_92519() {
	window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_runningActionsCount = obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85910");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_runningActionsCount = window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85910_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85950();
function runjs_85950() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85951();
function runjs_85951() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("border-color", "#C00000"); $("#obj85965").css("border-width", "2px"); $("#obj85965").css("border-style", "solid"); $("#obj85965").css("border-radius", "10px"); $("#obj85965").css("-webkit-border-radius", "10px"); $("#obj85965").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85963 
hide_85952();
function hide_85952() {
	var selector = "#obj85963";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85952(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85910_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85953();
function runjs_85953() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85910").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85954();
function switchText_85954() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj85910_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85910 
move_85955();
function move_85955() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj85910");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj85910_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85956();
function runjs_85956() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85957();
function runjs_85957() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("border-color", "#000000"); $("#obj85965").css("border-width", "1px"); $("#obj85965").css("border-style", "solid"); $("#obj85965").css("border-radius", "10px"); $("#obj85965").css("-webkit-border-radius", "10px"); $("#obj85965").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85963
(function(){
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj85963";
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
					window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85910_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85959();
function runjs_85959() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85910").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85960();
function runjs_85960() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85910").css("border-color", "rgba(0,0,0,0)"); $("#obj85910").css("border-width", "0px"); $("#obj85910").css("border-style", "solid"); $("#obj85910").css("border-radius", "10px"); $("#obj85910").css("-webkit-border-radius", "10px"); $("#obj85910").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85961();
function playAudio_85961() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj85910_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85962();
function switchText_85962() {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = obj85910_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85910_droppedInsideTargetActions_4_runningActionsCount = window.obj85910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj85910_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj85910_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85936();
function runjs_85936() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85979").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85937();
function runjs_85937() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85979").css("border-color", "#C00000"); $("#obj85979").css("border-width", "2px"); $("#obj85979").css("border-style", "solid"); $("#obj85979").css("border-radius", "10px"); $("#obj85979").css("-webkit-border-radius", "10px"); $("#obj85979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85973 
hide_85938();
function hide_85938() {
	var selector = "#obj85973";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85938(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85910_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85939();
function runjs_85939() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85910").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85940();
function switchText_85940() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85910_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85910 
move_85941();
function move_85941() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85910");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85910_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85942();
function runjs_85942() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85979").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85943();
function runjs_85943() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85979").css("border-color", "#000000"); $("#obj85979").css("border-width", "1px"); $("#obj85979").css("border-style", "solid"); $("#obj85979").css("border-radius", "10px"); $("#obj85979").css("-webkit-border-radius", "10px"); $("#obj85979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85973
(function(){
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85973";
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
					window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85910_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85945();
function runjs_85945() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85910").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85946();
function runjs_85946() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85910").css("border-color", "rgba(0,0,0,0)"); $("#obj85910").css("border-width", "0px"); $("#obj85910").css("border-style", "solid"); $("#obj85910").css("border-radius", "10px"); $("#obj85910").css("-webkit-border-radius", "10px"); $("#obj85910").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85947();
function playAudio_85947() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85910_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85948();
function switchText_85948() {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = obj85910_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85910_droppedInsideTargetActions_3_runningActionsCount = window.obj85910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85910_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85910_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85922();
function runjs_85922() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85923();
function runjs_85923() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("border-color", "#C00000"); $("#obj85981").css("border-width", "2px"); $("#obj85981").css("border-style", "solid"); $("#obj85981").css("border-radius", "10px"); $("#obj85981").css("-webkit-border-radius", "10px"); $("#obj85981").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85975 
hide_85924();
function hide_85924() {
	var selector = "#obj85975";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85924(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85910_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85925();
function runjs_85925() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85910").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85926();
function switchText_85926() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85910_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85910 
move_85927();
function move_85927() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85910");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85910_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85928();
function runjs_85928() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85929();
function runjs_85929() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("border-color", "#000000"); $("#obj85981").css("border-width", "1px"); $("#obj85981").css("border-style", "solid"); $("#obj85981").css("border-radius", "10px"); $("#obj85981").css("-webkit-border-radius", "10px"); $("#obj85981").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85975
(function(){
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85975";
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
					window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85910_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85931();
function runjs_85931() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85910").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85932();
function runjs_85932() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85910").css("border-color", "rgba(0,0,0,0)"); $("#obj85910").css("border-width", "0px"); $("#obj85910").css("border-style", "solid"); $("#obj85910").css("border-radius", "10px"); $("#obj85910").css("-webkit-border-radius", "10px"); $("#obj85910").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85933();
function playAudio_85933() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85910_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85934();
function switchText_85934() {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = obj85910_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85910_droppedInsideTargetActions_2_runningActionsCount = window.obj85910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85910_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85910_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85915();
function runjs_85915() {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = obj85910_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85977").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85919();
function switchText_85919() {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = obj85910_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85910_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85916();
function runjs_85916() {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = obj85910_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85977").css("border-color", "#058E3F"); $("#obj85977").css("border-width", "2px"); $("#obj85977").css("border-style", "solid"); $("#obj85977").css("border-radius", "10px"); $("#obj85977").css("-webkit-border-radius", "10px"); $("#obj85977").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85971 
hide_85917();
function hide_85917() {
	var selector = "#obj85971";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85910_droppedInsideTargetActions_runningActionsCount = obj85910_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85917(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85910_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85918();
function runjs_85918() {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = obj85910_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85910").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85910_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86013 
playAudio_85920();
function playAudio_85920() {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = obj85910_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86013")[0];
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
		    window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85910_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90417();
function switchText_90417() {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = obj85910_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85910_droppedInsideTargetActions_runningActionsCount = window.obj85910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85910_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85910_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85910").trigger("obj85910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85910) {
				console.warn("de-queueing event obj85910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85910_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85857_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85857");
//	action: dragDrop
//	target: obj85857 
dragDrop_85860();
function dragDrop_85860() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85857_onTouchDown_runningActionsCount = obj85857_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85857');
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
	  	containerNode = $('#obj85991');
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
    	window.obj85857_onTouchDown_runningActionsCount = window.obj85857_onTouchDown_runningActionsCount - 1;
if (window.obj85857_onTouchDown_runningActionsCount < 0) {
	window.obj85857_onTouchDown_runningActionsCount = 0;
} else if (window.obj85857_onTouchDown_runningActionsCount == 0) {
	obj85857_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85979","#obj85981","#obj85977","#obj85965");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85860 = false;
    	var dropped_id_85860;
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
					dropped_85860 = true;
					dropped_id_85860 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85860) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85857").trigger('SCActionDragDrop85860_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85857_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85857_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85857 
move_92517();
function move_92517() {
	window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_runningActionsCount = obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85857");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_runningActionsCount = window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85857_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85897();
function runjs_85897() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85898();
function runjs_85898() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("border-color", "#C00000"); $("#obj85965").css("border-width", "2px"); $("#obj85965").css("border-style", "solid"); $("#obj85965").css("border-radius", "10px"); $("#obj85965").css("-webkit-border-radius", "10px"); $("#obj85965").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85963 
hide_85899();
function hide_85899() {
	var selector = "#obj85963";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85899(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85857_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85900();
function runjs_85900() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85857").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85901();
function switchText_85901() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj85857_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85857 
move_85902();
function move_85902() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj85857");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj85857_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85903();
function runjs_85903() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85904();
function runjs_85904() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("border-color", "#000000"); $("#obj85965").css("border-width", "1px"); $("#obj85965").css("border-style", "solid"); $("#obj85965").css("border-radius", "10px"); $("#obj85965").css("-webkit-border-radius", "10px"); $("#obj85965").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85963
(function(){
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj85963";
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
					window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85857_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85906();
function runjs_85906() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85857").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85907();
function runjs_85907() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85857").css("border-color", "rgba(0,0,0,0)"); $("#obj85857").css("border-width", "0px"); $("#obj85857").css("border-style", "solid"); $("#obj85857").css("border-radius", "10px"); $("#obj85857").css("-webkit-border-radius", "10px"); $("#obj85857").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85908();
function playAudio_85908() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj85857_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85909();
function switchText_85909() {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = obj85857_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85857_droppedInsideTargetActions_4_runningActionsCount = window.obj85857_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj85857_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj85857_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85883();
function runjs_85883() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85884();
function runjs_85884() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("border-color", "#C00000"); $("#obj85977").css("border-width", "2px"); $("#obj85977").css("border-style", "solid"); $("#obj85977").css("border-radius", "10px"); $("#obj85977").css("-webkit-border-radius", "10px"); $("#obj85977").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85971 
hide_85885();
function hide_85885() {
	var selector = "#obj85971";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85885(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85857_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85886();
function runjs_85886() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85857").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85887();
function switchText_85887() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85857_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85857 
move_85888();
function move_85888() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85857");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85857_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85889();
function runjs_85889() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85890();
function runjs_85890() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("border-color", "#000000"); $("#obj85977").css("border-width", "1px"); $("#obj85977").css("border-style", "solid"); $("#obj85977").css("border-radius", "10px"); $("#obj85977").css("-webkit-border-radius", "10px"); $("#obj85977").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85971
(function(){
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85971";
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
					window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85857_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85892();
function runjs_85892() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85857").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85893();
function runjs_85893() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85857").css("border-color", "rgba(0,0,0,0)"); $("#obj85857").css("border-width", "0px"); $("#obj85857").css("border-style", "solid"); $("#obj85857").css("border-radius", "10px"); $("#obj85857").css("-webkit-border-radius", "10px"); $("#obj85857").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85894();
function playAudio_85894() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85857_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85895();
function switchText_85895() {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = obj85857_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85857_droppedInsideTargetActions_3_runningActionsCount = window.obj85857_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85857_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85857_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85869();
function runjs_85869() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85870();
function runjs_85870() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("border-color", "#C00000"); $("#obj85981").css("border-width", "2px"); $("#obj85981").css("border-style", "solid"); $("#obj85981").css("border-radius", "10px"); $("#obj85981").css("-webkit-border-radius", "10px"); $("#obj85981").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85975 
hide_85871();
function hide_85871() {
	var selector = "#obj85975";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85871(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85857_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85872();
function runjs_85872() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85857").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85873();
function switchText_85873() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85857_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85857 
move_85874();
function move_85874() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85857");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85857_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85875();
function runjs_85875() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85876();
function runjs_85876() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("border-color", "#000000"); $("#obj85981").css("border-width", "1px"); $("#obj85981").css("border-style", "solid"); $("#obj85981").css("border-radius", "10px"); $("#obj85981").css("-webkit-border-radius", "10px"); $("#obj85981").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85975
(function(){
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85975";
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
					window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85857_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85878();
function runjs_85878() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85857").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85879();
function runjs_85879() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85857").css("border-color", "rgba(0,0,0,0)"); $("#obj85857").css("border-width", "0px"); $("#obj85857").css("border-style", "solid"); $("#obj85857").css("border-radius", "10px"); $("#obj85857").css("-webkit-border-radius", "10px"); $("#obj85857").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85880();
function playAudio_85880() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85857_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85881();
function switchText_85881() {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = obj85857_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85857_droppedInsideTargetActions_2_runningActionsCount = window.obj85857_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85857_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85857_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85862();
function runjs_85862() {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = obj85857_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85979").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85866();
function switchText_85866() {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = obj85857_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85857_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85863();
function runjs_85863() {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = obj85857_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85979").css("border-color", "#058E3F"); $("#obj85979").css("border-width", "2px"); $("#obj85979").css("border-style", "solid"); $("#obj85979").css("border-radius", "10px"); $("#obj85979").css("-webkit-border-radius", "10px"); $("#obj85979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85973 
hide_85864();
function hide_85864() {
	var selector = "#obj85973";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85857_droppedInsideTargetActions_runningActionsCount = obj85857_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85864(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85857_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85865();
function runjs_85865() {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = obj85857_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85857").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85857_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86013 
playAudio_85867();
function playAudio_85867() {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = obj85857_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86013")[0];
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
		    window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85857_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90416();
function switchText_90416() {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = obj85857_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85857_droppedInsideTargetActions_runningActionsCount = window.obj85857_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85857_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85857_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85857_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85857_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85857_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85857").trigger("obj85857_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85857) {
				console.warn("de-queueing event obj85857." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85857").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85857_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85804_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85804");
//	action: dragDrop
//	target: obj85804 
dragDrop_85807();
function dragDrop_85807() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85804_onTouchDown_runningActionsCount = obj85804_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85804');
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
	  	containerNode = $('#obj85991');
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
    	window.obj85804_onTouchDown_runningActionsCount = window.obj85804_onTouchDown_runningActionsCount - 1;
if (window.obj85804_onTouchDown_runningActionsCount < 0) {
	window.obj85804_onTouchDown_runningActionsCount = 0;
} else if (window.obj85804_onTouchDown_runningActionsCount == 0) {
	obj85804_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85965","#obj85981","#obj85977","#obj85979");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85807 = false;
    	var dropped_id_85807;
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
					dropped_85807 = true;
					dropped_id_85807 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85807) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85804").trigger('SCActionDragDrop85807_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85804_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85804_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85804 
move_92521();
function move_92521() {
	window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_runningActionsCount = obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85804");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 348;
	var moveY = 565;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_runningActionsCount = window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85804_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85844();
function runjs_85844() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85979").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85845();
function runjs_85845() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85979").css("border-color", "#C00000"); $("#obj85979").css("border-width", "2px"); $("#obj85979").css("border-style", "solid"); $("#obj85979").css("border-radius", "10px"); $("#obj85979").css("-webkit-border-radius", "10px"); $("#obj85979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85973 
hide_85846();
function hide_85846() {
	var selector = "#obj85973";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85846(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85804_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85847();
function runjs_85847() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85804").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85848();
function switchText_85848() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj85804_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85804 
move_85849();
function move_85849() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj85804");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 348;
	var moveY = 565;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj85804_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85850();
function runjs_85850() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85979").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85851();
function runjs_85851() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85979").css("border-color", "#000000"); $("#obj85979").css("border-width", "1px"); $("#obj85979").css("border-style", "solid"); $("#obj85979").css("border-radius", "10px"); $("#obj85979").css("-webkit-border-radius", "10px"); $("#obj85979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85973
(function(){
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj85973";
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
					window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85804_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85853();
function runjs_85853() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85804").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85854();
function runjs_85854() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85804").css("border-color", "rgba(0,0,0,0)"); $("#obj85804").css("border-width", "0px"); $("#obj85804").css("border-style", "solid"); $("#obj85804").css("border-radius", "10px"); $("#obj85804").css("-webkit-border-radius", "10px"); $("#obj85804").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85855();
function playAudio_85855() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj85804_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85856();
function switchText_85856() {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = obj85804_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85804_droppedInsideTargetActions_4_runningActionsCount = window.obj85804_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj85804_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj85804_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85830();
function runjs_85830() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85831();
function runjs_85831() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("border-color", "#C00000"); $("#obj85977").css("border-width", "2px"); $("#obj85977").css("border-style", "solid"); $("#obj85977").css("border-radius", "10px"); $("#obj85977").css("-webkit-border-radius", "10px"); $("#obj85977").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85971 
hide_85832();
function hide_85832() {
	var selector = "#obj85971";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85832(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85804_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85833();
function runjs_85833() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85804").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85834();
function switchText_85834() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85804_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85804 
move_85835();
function move_85835() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85804");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 348;
	var moveY = 565;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85804_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85836();
function runjs_85836() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85837();
function runjs_85837() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("border-color", "#000000"); $("#obj85977").css("border-width", "1px"); $("#obj85977").css("border-style", "solid"); $("#obj85977").css("border-radius", "10px"); $("#obj85977").css("-webkit-border-radius", "10px"); $("#obj85977").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85971
(function(){
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85971";
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
					window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85804_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85839();
function runjs_85839() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85804").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85840();
function runjs_85840() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85804").css("border-color", "rgba(0,0,0,0)"); $("#obj85804").css("border-width", "0px"); $("#obj85804").css("border-style", "solid"); $("#obj85804").css("border-radius", "10px"); $("#obj85804").css("-webkit-border-radius", "10px"); $("#obj85804").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85841();
function playAudio_85841() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85804_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85842();
function switchText_85842() {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = obj85804_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85804_droppedInsideTargetActions_3_runningActionsCount = window.obj85804_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85804_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85804_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85816();
function runjs_85816() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85817();
function runjs_85817() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("border-color", "#C00000"); $("#obj85981").css("border-width", "2px"); $("#obj85981").css("border-style", "solid"); $("#obj85981").css("border-radius", "10px"); $("#obj85981").css("-webkit-border-radius", "10px"); $("#obj85981").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85975 
hide_85818();
function hide_85818() {
	var selector = "#obj85975";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85818(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85804_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85819();
function runjs_85819() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85804").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85820();
function switchText_85820() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85804_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85804 
move_85821();
function move_85821() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85804");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 348;
	var moveY = 565;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85804_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85822();
function runjs_85822() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85823();
function runjs_85823() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85981").css("border-color", "#000000"); $("#obj85981").css("border-width", "1px"); $("#obj85981").css("border-style", "solid"); $("#obj85981").css("border-radius", "10px"); $("#obj85981").css("-webkit-border-radius", "10px"); $("#obj85981").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85975
(function(){
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85975";
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
					window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85804_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85825();
function runjs_85825() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85804").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85826();
function runjs_85826() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85804").css("border-color", "rgba(0,0,0,0)"); $("#obj85804").css("border-width", "0px"); $("#obj85804").css("border-style", "solid"); $("#obj85804").css("border-radius", "10px"); $("#obj85804").css("-webkit-border-radius", "10px"); $("#obj85804").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85827();
function playAudio_85827() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85804_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85828();
function switchText_85828() {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = obj85804_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85804_droppedInsideTargetActions_2_runningActionsCount = window.obj85804_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85804_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85804_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85809();
function runjs_85809() {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = obj85804_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85965").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85813();
function switchText_85813() {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = obj85804_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85804_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85810();
function runjs_85810() {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = obj85804_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85965").css("border-color", "#058E3F"); $("#obj85965").css("border-width", "2px"); $("#obj85965").css("border-style", "solid"); $("#obj85965").css("border-radius", "10px"); $("#obj85965").css("-webkit-border-radius", "10px"); $("#obj85965").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85963 
hide_85811();
function hide_85811() {
	var selector = "#obj85963";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85804_droppedInsideTargetActions_runningActionsCount = obj85804_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85811(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85804_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85812();
function runjs_85812() {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = obj85804_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85804").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85804_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86013 
playAudio_85814();
function playAudio_85814() {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = obj85804_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86013")[0];
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
		    window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85804_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90418();
function switchText_90418() {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = obj85804_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85804_droppedInsideTargetActions_runningActionsCount = window.obj85804_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85804_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85804_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85804_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85804_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85804_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85804").trigger("obj85804_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85804) {
				console.warn("de-queueing event obj85804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85804_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85751_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85751");
//	action: dragDrop
//	target: obj85751 
dragDrop_85754();
function dragDrop_85754() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85751_onTouchDown_runningActionsCount = obj85751_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85751');
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
	  	containerNode = $('#obj85991');
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
    	window.obj85751_onTouchDown_runningActionsCount = window.obj85751_onTouchDown_runningActionsCount - 1;
if (window.obj85751_onTouchDown_runningActionsCount < 0) {
	window.obj85751_onTouchDown_runningActionsCount = 0;
} else if (window.obj85751_onTouchDown_runningActionsCount == 0) {
	obj85751_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85981","#obj85979","#obj85977","#obj85965");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85754 = false;
    	var dropped_id_85754;
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
					dropped_85754 = true;
					dropped_id_85754 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85754) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85751").trigger('SCActionDragDrop85754_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85751_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85751_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85751 
move_92523();
function move_92523() {
	window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_runningActionsCount = obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85751");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 348;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_runningActionsCount = window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85751_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85791();
function runjs_85791() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85792();
function runjs_85792() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("border-color", "#C00000"); $("#obj85965").css("border-width", "2px"); $("#obj85965").css("border-style", "solid"); $("#obj85965").css("border-radius", "10px"); $("#obj85965").css("-webkit-border-radius", "10px"); $("#obj85965").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85963 
hide_85793();
function hide_85793() {
	var selector = "#obj85963";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85793(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85751_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85794();
function runjs_85794() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85751").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85795();
function switchText_85795() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj85751_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85751 
move_85796();
function move_85796() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj85751");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 348;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj85751_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85797();
function runjs_85797() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85798();
function runjs_85798() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85965").css("border-color", "#000000"); $("#obj85965").css("border-width", "1px"); $("#obj85965").css("border-style", "solid"); $("#obj85965").css("border-radius", "10px"); $("#obj85965").css("-webkit-border-radius", "10px"); $("#obj85965").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85963
(function(){
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj85963";
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
					window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85751_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85800();
function runjs_85800() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85751").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85801();
function runjs_85801() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85751").css("border-color", "rgba(0,0,0,0)"); $("#obj85751").css("border-width", "0px"); $("#obj85751").css("border-style", "solid"); $("#obj85751").css("border-radius", "10px"); $("#obj85751").css("-webkit-border-radius", "10px"); $("#obj85751").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85802();
function playAudio_85802() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj85751_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85803();
function switchText_85803() {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = obj85751_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85751_droppedInsideTargetActions_4_runningActionsCount = window.obj85751_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj85751_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj85751_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85777();
function runjs_85777() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85778();
function runjs_85778() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("border-color", "#C00000"); $("#obj85977").css("border-width", "2px"); $("#obj85977").css("border-style", "solid"); $("#obj85977").css("border-radius", "10px"); $("#obj85977").css("-webkit-border-radius", "10px"); $("#obj85977").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85971 
hide_85779();
function hide_85779() {
	var selector = "#obj85971";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85779(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85751_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85780();
function runjs_85780() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85751").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85781();
function switchText_85781() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85751_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85751 
move_85782();
function move_85782() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85751");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 348;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85751_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85783();
function runjs_85783() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85784();
function runjs_85784() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85977").css("border-color", "#000000"); $("#obj85977").css("border-width", "1px"); $("#obj85977").css("border-style", "solid"); $("#obj85977").css("border-radius", "10px"); $("#obj85977").css("-webkit-border-radius", "10px"); $("#obj85977").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85971
(function(){
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85971";
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
					window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85751_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85786();
function runjs_85786() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85751").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85787();
function runjs_85787() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85751").css("border-color", "rgba(0,0,0,0)"); $("#obj85751").css("border-width", "0px"); $("#obj85751").css("border-style", "solid"); $("#obj85751").css("border-radius", "10px"); $("#obj85751").css("-webkit-border-radius", "10px"); $("#obj85751").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85788();
function playAudio_85788() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85751_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85789();
function switchText_85789() {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = obj85751_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85751_droppedInsideTargetActions_3_runningActionsCount = window.obj85751_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85751_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85751_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85763();
function runjs_85763() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85979").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85764();
function runjs_85764() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85979").css("border-color", "#C00000"); $("#obj85979").css("border-width", "2px"); $("#obj85979").css("border-style", "solid"); $("#obj85979").css("border-radius", "10px"); $("#obj85979").css("-webkit-border-radius", "10px"); $("#obj85979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85973 
hide_85765();
function hide_85765() {
	var selector = "#obj85973";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85765(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85751_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85766();
function runjs_85766() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85751").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85767();
function switchText_85767() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85751_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85751 
move_85768();
function move_85768() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85751");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 348;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85751_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85769();
function runjs_85769() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85979").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85770();
function runjs_85770() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85979").css("border-color", "#000000"); $("#obj85979").css("border-width", "1px"); $("#obj85979").css("border-style", "solid"); $("#obj85979").css("border-radius", "10px"); $("#obj85979").css("-webkit-border-radius", "10px"); $("#obj85979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85973
(function(){
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85973";
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
					window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85751_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85772();
function runjs_85772() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85751").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85773();
function runjs_85773() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85751").css("border-color", "rgba(0,0,0,0)"); $("#obj85751").css("border-width", "0px"); $("#obj85751").css("border-style", "solid"); $("#obj85751").css("border-radius", "10px"); $("#obj85751").css("-webkit-border-radius", "10px"); $("#obj85751").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86014 
playAudio_85774();
function playAudio_85774() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86014")[0];
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
		    window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85751_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85775();
function switchText_85775() {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = obj85751_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85751_droppedInsideTargetActions_2_runningActionsCount = window.obj85751_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85751_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85751_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85756();
function runjs_85756() {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = obj85751_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85981").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85760();
function switchText_85760() {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = obj85751_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85751_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85757();
function runjs_85757() {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = obj85751_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85981").css("border-color", "#058E3F"); $("#obj85981").css("border-width", "2px"); $("#obj85981").css("border-style", "solid"); $("#obj85981").css("border-radius", "10px"); $("#obj85981").css("-webkit-border-radius", "10px"); $("#obj85981").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85975 
hide_85758();
function hide_85758() {
	var selector = "#obj85975";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85751_droppedInsideTargetActions_runningActionsCount = obj85751_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85758(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85751_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85759();
function runjs_85759() {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = obj85751_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85751").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85751_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86013 
playAudio_85761();
function playAudio_85761() {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = obj85751_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86013")[0];
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
		    window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85751_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90419();
function switchText_90419() {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = obj85751_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85989_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85989_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85989").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85989_content");
			setTimeout(function () {
				window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85989 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85751_droppedInsideTargetActions_runningActionsCount = window.obj85751_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85751_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85751_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85751_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85751_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85751_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85751").trigger("obj85751_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85751) {
				console.warn("de-queueing event obj85751." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85751").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85751_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85733_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85733_onTap_activeActionGroupIndex = -1;
		$("#obj85733").trigger("obj85733_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85733) {
				console.warn("de-queueing event obj85733." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85733").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85733_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj85733 
hide_85736();
function hide_85736() {
	var selector = "#obj85733";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85733_onTap_runningActionsCount = obj85733_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85733_onTap_runningActionsCount = window.obj85733_onTap_runningActionsCount - 1;
if (window.obj85733_onTap_runningActionsCount < 0) {
	window.obj85733_onTap_runningActionsCount = 0;
} else if (window.obj85733_onTap_runningActionsCount == 0) {
	obj85733_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85736(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85733_onTap_runningActionsCount = window.obj85733_onTap_runningActionsCount - 1;
if (window.obj85733_onTap_runningActionsCount < 0) {
	window.obj85733_onTap_runningActionsCount = 0;
} else if (window.obj85733_onTap_runningActionsCount == 0) {
	obj85733_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj85723 
stopMovie_85735();
function stopMovie_85735() {
	window.obj85733_onTap_runningActionsCount = obj85733_onTap_runningActionsCount + 1;
	var myVideo = $("#obj85723")[0];
	myVideo.pause();
	window.obj85733_onTap_runningActionsCount = window.obj85733_onTap_runningActionsCount - 1;
if (window.obj85733_onTap_runningActionsCount < 0) {
	window.obj85733_onTap_runningActionsCount = 0;
} else if (window.obj85733_onTap_runningActionsCount == 0) {
	obj85733_onTap_actionGroup1();
}
}
















};
obj85733_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85733_onTap_activeActionGroupIndex = -1;
		$("#obj85733").trigger("obj85733_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85733) {
				console.warn("de-queueing event obj85733." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85733").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85733_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj85725
(function(){
	window.obj85733_onTap_runningActionsCount = obj85733_onTap_runningActionsCount + 1;

	var selector = "#obj85725";
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
					window.obj85733_onTap_runningActionsCount = window.obj85733_onTap_runningActionsCount - 1;
if (window.obj85733_onTap_runningActionsCount < 0) {
	window.obj85733_onTap_runningActionsCount = 0;
} else if (window.obj85733_onTap_runningActionsCount == 0) {
	obj85733_onTap_actionGroup2();
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
				window.obj85733_onTap_runningActionsCount = window.obj85733_onTap_runningActionsCount - 1;
if (window.obj85733_onTap_runningActionsCount < 0) {
	window.obj85733_onTap_runningActionsCount = 0;
} else if (window.obj85733_onTap_runningActionsCount == 0) {
	obj85733_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85733_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85733_onTap_activeActionGroupIndex = -1;
		$("#obj85733").trigger("obj85733_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85733) {
				console.warn("de-queueing event obj85733." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85733").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85733_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj85723 
move_85738();
function move_85738() {
	window.obj85733_onTap_runningActionsCount = obj85733_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj85723");
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
			window.obj85733_onTap_runningActionsCount = window.obj85733_onTap_runningActionsCount - 1;
if (window.obj85733_onTap_runningActionsCount < 0) {
	window.obj85733_onTap_runningActionsCount = 0;
} else if (window.obj85733_onTap_runningActionsCount == 0) {
	obj85733_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj85733_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85733_onTap_activeActionGroupIndex = -1;
		$("#obj85733").trigger("obj85733_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85733) {
				console.warn("de-queueing event obj85733." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85733").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85733_onTap_activeActionGroupIndex = 3;
	





















};
obj85725_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85725_onTap_activeActionGroupIndex = -1;
		$("#obj85725").trigger("obj85725_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85725) {
				console.warn("de-queueing event obj85725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85725_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj85725 
hide_85728();
function hide_85728() {
	var selector = "#obj85725";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85725_onTap_runningActionsCount = obj85725_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85725_onTap_runningActionsCount = window.obj85725_onTap_runningActionsCount - 1;
if (window.obj85725_onTap_runningActionsCount < 0) {
	window.obj85725_onTap_runningActionsCount = 0;
} else if (window.obj85725_onTap_runningActionsCount == 0) {
	obj85725_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85728(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85725_onTap_runningActionsCount = window.obj85725_onTap_runningActionsCount - 1;
if (window.obj85725_onTap_runningActionsCount < 0) {
	window.obj85725_onTap_runningActionsCount = 0;
} else if (window.obj85725_onTap_runningActionsCount == 0) {
	obj85725_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj85723 
playPauseMovie_85727();
function playPauseMovie_85727() {
	window.obj85725_onTap_runningActionsCount = obj85725_onTap_runningActionsCount + 1;
	var myVideo = $("#obj85723")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj85725_onTap_runningActionsCount = window.obj85725_onTap_runningActionsCount - 1;
if (window.obj85725_onTap_runningActionsCount < 0) {
	window.obj85725_onTap_runningActionsCount = 0;
} else if (window.obj85725_onTap_runningActionsCount == 0) {
	obj85725_onTap_actionGroup1();
}
}

















};
obj85725_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85725_onTap_activeActionGroupIndex = -1;
		$("#obj85725").trigger("obj85725_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85725) {
				console.warn("de-queueing event obj85725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85725_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj85733
(function(){
	window.obj85725_onTap_runningActionsCount = obj85725_onTap_runningActionsCount + 1;

	var selector = "#obj85733";
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
					window.obj85725_onTap_runningActionsCount = window.obj85725_onTap_runningActionsCount - 1;
if (window.obj85725_onTap_runningActionsCount < 0) {
	window.obj85725_onTap_runningActionsCount = 0;
} else if (window.obj85725_onTap_runningActionsCount == 0) {
	obj85725_onTap_actionGroup2();
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
				window.obj85725_onTap_runningActionsCount = window.obj85725_onTap_runningActionsCount - 1;
if (window.obj85725_onTap_runningActionsCount < 0) {
	window.obj85725_onTap_runningActionsCount = 0;
} else if (window.obj85725_onTap_runningActionsCount == 0) {
	obj85725_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85725_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85725_onTap_activeActionGroupIndex = -1;
		$("#obj85725").trigger("obj85725_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85725) {
				console.warn("de-queueing event obj85725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85725_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj85723 
move_85730();
function move_85730() {
	window.obj85725_onTap_runningActionsCount = obj85725_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj85723");
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
			window.obj85725_onTap_runningActionsCount = window.obj85725_onTap_runningActionsCount - 1;
if (window.obj85725_onTap_runningActionsCount < 0) {
	window.obj85725_onTap_runningActionsCount = 0;
} else if (window.obj85725_onTap_runningActionsCount == 0) {
	obj85725_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj85725_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85725_onTap_activeActionGroupIndex = -1;
		$("#obj85725").trigger("obj85725_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85725) {
				console.warn("de-queueing event obj85725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85725_onTap_activeActionGroupIndex = 3;
	





















};
obj88273_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88273_onTap_activeActionGroupIndex = -1;
		$("#obj88273").trigger("obj88273_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88273) {
				console.warn("de-queueing event obj88273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88273_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88278 
stopAudio_88275();
function stopAudio_88275() {
	window.obj88273_onTap_runningActionsCount = obj88273_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88278")[0];
	myAudio.pause();
	window.obj88273_onTap_runningActionsCount = window.obj88273_onTap_runningActionsCount - 1;
if (window.obj88273_onTap_runningActionsCount < 0) {
	window.obj88273_onTap_runningActionsCount = 0;
} else if (window.obj88273_onTap_runningActionsCount == 0) {
	obj88273_onTap_actionGroup1();
}
}








};
obj88273_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88273_onTap_activeActionGroupIndex = -1;
		$("#obj88273").trigger("obj88273_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88273) {
				console.warn("de-queueing event obj88273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88273_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88273 
hide_88276();
function hide_88276() {
	var selector = "#obj88273";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88273_onTap_runningActionsCount = obj88273_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88273_onTap_runningActionsCount = window.obj88273_onTap_runningActionsCount - 1;
if (window.obj88273_onTap_runningActionsCount < 0) {
	window.obj88273_onTap_runningActionsCount = 0;
} else if (window.obj88273_onTap_runningActionsCount == 0) {
	obj88273_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88276(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88273_onTap_runningActionsCount = window.obj88273_onTap_runningActionsCount - 1;
if (window.obj88273_onTap_runningActionsCount < 0) {
	window.obj88273_onTap_runningActionsCount = 0;
} else if (window.obj88273_onTap_runningActionsCount == 0) {
	obj88273_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88273_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88273_onTap_activeActionGroupIndex = -1;
		$("#obj88273").trigger("obj88273_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88273) {
				console.warn("de-queueing event obj88273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88273_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88268
(function(){
	window.obj88273_onTap_runningActionsCount = obj88273_onTap_runningActionsCount + 1;

	var selector = "#obj88268";
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
					window.obj88273_onTap_runningActionsCount = window.obj88273_onTap_runningActionsCount - 1;
if (window.obj88273_onTap_runningActionsCount < 0) {
	window.obj88273_onTap_runningActionsCount = 0;
} else if (window.obj88273_onTap_runningActionsCount == 0) {
	obj88273_onTap_actionGroup3();
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
				window.obj88273_onTap_runningActionsCount = window.obj88273_onTap_runningActionsCount - 1;
if (window.obj88273_onTap_runningActionsCount < 0) {
	window.obj88273_onTap_runningActionsCount = 0;
} else if (window.obj88273_onTap_runningActionsCount == 0) {
	obj88273_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88273_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88273_onTap_activeActionGroupIndex = -1;
		$("#obj88273").trigger("obj88273_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88273) {
				console.warn("de-queueing event obj88273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88273_onTap_activeActionGroupIndex = 3;
	





















};
obj88268_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88268_onTap_activeActionGroupIndex = -1;
		$("#obj88268").trigger("obj88268_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88268) {
				console.warn("de-queueing event obj88268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88268_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88268 
hide_88270();
function hide_88270() {
	var selector = "#obj88268";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88268_onTap_runningActionsCount = obj88268_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88268_onTap_runningActionsCount = window.obj88268_onTap_runningActionsCount - 1;
if (window.obj88268_onTap_runningActionsCount < 0) {
	window.obj88268_onTap_runningActionsCount = 0;
} else if (window.obj88268_onTap_runningActionsCount == 0) {
	obj88268_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88270(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88268_onTap_runningActionsCount = window.obj88268_onTap_runningActionsCount - 1;
if (window.obj88268_onTap_runningActionsCount < 0) {
	window.obj88268_onTap_runningActionsCount = 0;
} else if (window.obj88268_onTap_runningActionsCount == 0) {
	obj88268_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88268_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88268_onTap_activeActionGroupIndex = -1;
		$("#obj88268").trigger("obj88268_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88268) {
				console.warn("de-queueing event obj88268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88268_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88273
(function(){
	window.obj88268_onTap_runningActionsCount = obj88268_onTap_runningActionsCount + 1;

	var selector = "#obj88273";
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
					window.obj88268_onTap_runningActionsCount = window.obj88268_onTap_runningActionsCount - 1;
if (window.obj88268_onTap_runningActionsCount < 0) {
	window.obj88268_onTap_runningActionsCount = 0;
} else if (window.obj88268_onTap_runningActionsCount == 0) {
	obj88268_onTap_actionGroup2();
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
				window.obj88268_onTap_runningActionsCount = window.obj88268_onTap_runningActionsCount - 1;
if (window.obj88268_onTap_runningActionsCount < 0) {
	window.obj88268_onTap_runningActionsCount = 0;
} else if (window.obj88268_onTap_runningActionsCount == 0) {
	obj88268_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88268_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88268_onTap_activeActionGroupIndex = -1;
		$("#obj88268").trigger("obj88268_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88268) {
				console.warn("de-queueing event obj88268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88268_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88278 
playAudio_88272();
function playAudio_88272() {
	window.obj88268_onTap_runningActionsCount = obj88268_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88278")[0];
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
		    window.obj88268_onTap_runningActionsCount = window.obj88268_onTap_runningActionsCount - 1;
if (window.obj88268_onTap_runningActionsCount < 0) {
	window.obj88268_onTap_runningActionsCount = 0;
} else if (window.obj88268_onTap_runningActionsCount == 0) {
	obj88268_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88268_onTap_runningActionsCount = window.obj88268_onTap_runningActionsCount - 1;
if (window.obj88268_onTap_runningActionsCount < 0) {
	window.obj88268_onTap_runningActionsCount = 0;
} else if (window.obj88268_onTap_runningActionsCount == 0) {
	obj88268_onTap_actionGroup3();
}
	}
}









};
obj88268_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88268_onTap_activeActionGroupIndex = -1;
		$("#obj88268").trigger("obj88268_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88268) {
				console.warn("de-queueing event obj88268." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88268").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88268_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj86008: Event Touch Down
 *
 */
$("#obj86008").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86008_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86008_onTap is still running");
	return;
}
var obj86008_onTap_runningActionsCount = 0;
var obj86008_onTap_loopCount = 0;
obj86008_onTap_actionGroup0();
});










/*
 *
 *   obj86005: Event Touch Down
 *
 */
$("#obj86005").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86005_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86005_onTap is still running");
	return;
}
var obj86005_onTap_runningActionsCount = 0;
var obj86005_onTap_loopCount = 0;
obj86005_onTap_actionGroup0();
});










/*
 *
 *   obj86001: Event Touch Down
 *
 */
$("#obj86001").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86001_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86001_onTap is still running");
	return;
}
var obj86001_onTap_runningActionsCount = 0;
var obj86001_onTap_loopCount = 0;
obj86001_onTap_actionGroup0();
});









































































































































































































/*
 *
 *   obj85910: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85910");
	var winTarget = document.getElementById("obj85910");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85910").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85910_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85910_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85910_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85910_onTouchDown is still running");
	return;
}
var obj85910_onTouchDown_runningActionsCount = 0;
var obj85910_onTouchDown_loopCount = 0;
obj85910_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85910: Event SCActionDragDrop85913_droppedOutsideTargetActions
 *
 */
$("#obj85910").bind("SCActionDragDrop85913_droppedOutsideTargetActions", function(event) {
	if (window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85910_SCActionDragDrop85913_droppedOutsideTargetActions is still running");
	return;
}
var obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_loopCount = 0;
obj85910_SCActionDragDrop85913_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85910: Event droppedInsideTargetActions_4
 *
 */
$("#obj85910").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj85910_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85910_droppedInsideTargetActions_4 is still running");
	return;
}
var obj85910_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85910_droppedInsideTargetActions_4_loopCount = 0;
obj85910_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj85910: Event droppedInsideTargetActions_3
 *
 */
$("#obj85910").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85910_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85910_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85910_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85910_droppedInsideTargetActions_3_loopCount = 0;
obj85910_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85910: Event droppedInsideTargetActions_2
 *
 */
$("#obj85910").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85910_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85910_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85910_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85910_droppedInsideTargetActions_2_loopCount = 0;
obj85910_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85910: Event droppedInsideTargetActions
 *
 */
$("#obj85910").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85910_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85910_droppedInsideTargetActions is still running");
	return;
}
var obj85910_droppedInsideTargetActions_runningActionsCount = 0;
var obj85910_droppedInsideTargetActions_loopCount = 0;
obj85910_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj85857: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85857");
	var winTarget = document.getElementById("obj85857");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85857").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85857_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85857_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85857_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85857_onTouchDown is still running");
	return;
}
var obj85857_onTouchDown_runningActionsCount = 0;
var obj85857_onTouchDown_loopCount = 0;
obj85857_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85857: Event SCActionDragDrop85860_droppedOutsideTargetActions
 *
 */
$("#obj85857").bind("SCActionDragDrop85860_droppedOutsideTargetActions", function(event) {
	if (window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85857_SCActionDragDrop85860_droppedOutsideTargetActions is still running");
	return;
}
var obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_loopCount = 0;
obj85857_SCActionDragDrop85860_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85857: Event droppedInsideTargetActions_4
 *
 */
$("#obj85857").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj85857_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85857_droppedInsideTargetActions_4 is still running");
	return;
}
var obj85857_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85857_droppedInsideTargetActions_4_loopCount = 0;
obj85857_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj85857: Event droppedInsideTargetActions_3
 *
 */
$("#obj85857").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85857_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85857_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85857_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85857_droppedInsideTargetActions_3_loopCount = 0;
obj85857_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85857: Event droppedInsideTargetActions_2
 *
 */
$("#obj85857").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85857_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85857_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85857_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85857_droppedInsideTargetActions_2_loopCount = 0;
obj85857_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85857: Event droppedInsideTargetActions
 *
 */
$("#obj85857").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85857_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85857_droppedInsideTargetActions is still running");
	return;
}
var obj85857_droppedInsideTargetActions_runningActionsCount = 0;
var obj85857_droppedInsideTargetActions_loopCount = 0;
obj85857_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj85804: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85804");
	var winTarget = document.getElementById("obj85804");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85804").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85804_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85804_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85804_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85804_onTouchDown is still running");
	return;
}
var obj85804_onTouchDown_runningActionsCount = 0;
var obj85804_onTouchDown_loopCount = 0;
obj85804_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85804: Event SCActionDragDrop85807_droppedOutsideTargetActions
 *
 */
$("#obj85804").bind("SCActionDragDrop85807_droppedOutsideTargetActions", function(event) {
	if (window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85804_SCActionDragDrop85807_droppedOutsideTargetActions is still running");
	return;
}
var obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_loopCount = 0;
obj85804_SCActionDragDrop85807_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85804: Event droppedInsideTargetActions_4
 *
 */
$("#obj85804").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj85804_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85804_droppedInsideTargetActions_4 is still running");
	return;
}
var obj85804_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85804_droppedInsideTargetActions_4_loopCount = 0;
obj85804_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj85804: Event droppedInsideTargetActions_3
 *
 */
$("#obj85804").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85804_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85804_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85804_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85804_droppedInsideTargetActions_3_loopCount = 0;
obj85804_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85804: Event droppedInsideTargetActions_2
 *
 */
$("#obj85804").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85804_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85804_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85804_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85804_droppedInsideTargetActions_2_loopCount = 0;
obj85804_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85804: Event droppedInsideTargetActions
 *
 */
$("#obj85804").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85804_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85804_droppedInsideTargetActions is still running");
	return;
}
var obj85804_droppedInsideTargetActions_runningActionsCount = 0;
var obj85804_droppedInsideTargetActions_loopCount = 0;
obj85804_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj85751: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85751");
	var winTarget = document.getElementById("obj85751");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85751").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85751_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85751_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85751_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85751_onTouchDown is still running");
	return;
}
var obj85751_onTouchDown_runningActionsCount = 0;
var obj85751_onTouchDown_loopCount = 0;
obj85751_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85751: Event SCActionDragDrop85754_droppedOutsideTargetActions
 *
 */
$("#obj85751").bind("SCActionDragDrop85754_droppedOutsideTargetActions", function(event) {
	if (window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85751_SCActionDragDrop85754_droppedOutsideTargetActions is still running");
	return;
}
var obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_loopCount = 0;
obj85751_SCActionDragDrop85754_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85751: Event droppedInsideTargetActions_4
 *
 */
$("#obj85751").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj85751_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85751_droppedInsideTargetActions_4 is still running");
	return;
}
var obj85751_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85751_droppedInsideTargetActions_4_loopCount = 0;
obj85751_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj85751: Event droppedInsideTargetActions_3
 *
 */
$("#obj85751").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85751_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85751_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85751_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85751_droppedInsideTargetActions_3_loopCount = 0;
obj85751_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85751: Event droppedInsideTargetActions_2
 *
 */
$("#obj85751").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85751_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85751_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85751_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85751_droppedInsideTargetActions_2_loopCount = 0;
obj85751_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85751: Event droppedInsideTargetActions
 *
 */
$("#obj85751").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85751_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85751_droppedInsideTargetActions is still running");
	return;
}
var obj85751_droppedInsideTargetActions_runningActionsCount = 0;
var obj85751_droppedInsideTargetActions_loopCount = 0;
obj85751_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj85733: Event Touch Down
 *
 */
$("#obj85733").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85733_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85733_onTap is still running");
	return;
}
var obj85733_onTap_runningActionsCount = 0;
var obj85733_onTap_loopCount = 0;
obj85733_onTap_actionGroup0();
});










/*
 *
 *   obj85725: Event Touch Down
 *
 */
$("#obj85725").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85725_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85725_onTap is still running");
	return;
}
var obj85725_onTap_runningActionsCount = 0;
var obj85725_onTap_loopCount = 0;
obj85725_onTap_actionGroup0();
});










/*
 *
 *   obj88273: Event Touch Down
 *
 */
$("#obj88273").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88273_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88273_onTap is still running");
	return;
}
var obj88273_onTap_runningActionsCount = 0;
var obj88273_onTap_loopCount = 0;
obj88273_onTap_actionGroup0();
});










/*
 *
 *   obj88268: Event Touch Down
 *
 */
$("#obj88268").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88268_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88268_onTap is still running");
	return;
}
var obj88268_onTap_runningActionsCount = 0;
var obj88268_onTap_loopCount = 0;
obj88268_onTap_actionGroup0();
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
	
$("#obj86014").trigger('SCEventShow');
$("#obj86013").trigger('SCEventShow');
$("#obj86011").trigger('SCEventShow');
$("#obj86008").trigger('SCEventShow');
$("#obj86005").trigger('SCEventShow');
$("#obj86001").trigger('SCEventShow');
$("#obj85999").trigger('SCEventShow');
$("#obj85997").trigger('SCEventShow');
$("#obj85995").trigger('SCEventShow');
$("#obj85993").trigger('SCEventShow');
$("#obj85991").trigger('SCEventShow');
$("#obj85989").trigger('SCEventShow');
$("#obj85987").trigger('SCEventShow');
$("#obj85985").trigger('SCEventShow');
$("#obj85983").trigger('SCEventShow');
$("#obj85981").trigger('SCEventShow');
$("#obj85979").trigger('SCEventShow');
$("#obj85977").trigger('SCEventShow');
$("#obj85975").trigger('SCEventShow');
$("#obj85973").trigger('SCEventShow');
$("#obj85971").trigger('SCEventShow');
$("#obj85969").trigger('SCEventShow');
$("#obj85967").trigger('SCEventShow');
$("#obj85965").trigger('SCEventShow');
$("#obj85963").trigger('SCEventShow');
$("#obj85910").trigger('SCEventShow');
$("#obj85857").trigger('SCEventShow');
$("#obj85804").trigger('SCEventShow');
$("#obj85751").trigger('SCEventShow');
$("#obj85733").trigger('SCEventShow');
$("#obj85725").trigger('SCEventShow');
$("#obj88273").trigger('SCEventShow');
$("#obj88268").trigger('SCEventShow');
$("#obj88278").trigger('SCEventShow');
$("#obj94863").trigger('SCEventShow');
$("#obj85723").trigger('SCEventShow');
	
});