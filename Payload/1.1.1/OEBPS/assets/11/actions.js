pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 1143;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
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
var obj1149_onTap_activeActionGroupIndex = -1;
var obj1149_onTap_runningActionsCount = 0;
var obj1149_onTap_loopCount = 0;
var obj1146_onTap_activeActionGroupIndex = -1;
var obj1146_onTap_runningActionsCount = 0;
var obj1146_onTap_loopCount = 0;
var obj1152_onTap_activeActionGroupIndex = -1;
var obj1152_onTap_runningActionsCount = 0;
var obj1152_onTap_loopCount = 0;
var obj1229_onDrag_activeActionGroupIndex = -1;
var obj1229_onDrag_runningActionsCount = 0;
var obj1229_onDrag_loopCount = 0;
var obj1229_onTouchDown_activeActionGroupIndex = -1;
var obj1229_onTouchDown_runningActionsCount = 0;
var obj1229_onTouchDown_loopCount = 0;
var obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_loopCount = 0;
var obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_6_loopCount = 0;
var obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_5_loopCount = 0;
var obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_4_loopCount = 0;
var obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_3_loopCount = 0;
var obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_2_loopCount = 0;
var obj1229_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1229_droppedInsideTargetActions_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_loopCount = 0;
var obj1235_onDrag_activeActionGroupIndex = -1;
var obj1235_onDrag_runningActionsCount = 0;
var obj1235_onDrag_loopCount = 0;
var obj1235_onTouchDown_activeActionGroupIndex = -1;
var obj1235_onTouchDown_runningActionsCount = 0;
var obj1235_onTouchDown_loopCount = 0;
var obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_loopCount = 0;
var obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_6_loopCount = 0;
var obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_5_loopCount = 0;
var obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_4_loopCount = 0;
var obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_3_loopCount = 0;
var obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_2_loopCount = 0;
var obj1235_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1235_droppedInsideTargetActions_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_loopCount = 0;
var obj1231_onDrag_activeActionGroupIndex = -1;
var obj1231_onDrag_runningActionsCount = 0;
var obj1231_onDrag_loopCount = 0;
var obj1231_onTouchDown_activeActionGroupIndex = -1;
var obj1231_onTouchDown_runningActionsCount = 0;
var obj1231_onTouchDown_loopCount = 0;
var obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_loopCount = 0;
var obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_6_loopCount = 0;
var obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_5_loopCount = 0;
var obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_4_loopCount = 0;
var obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_3_loopCount = 0;
var obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_2_loopCount = 0;
var obj1231_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1231_droppedInsideTargetActions_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_loopCount = 0;
var obj1237_onDrag_activeActionGroupIndex = -1;
var obj1237_onDrag_runningActionsCount = 0;
var obj1237_onDrag_loopCount = 0;
var obj1237_onTouchDown_activeActionGroupIndex = -1;
var obj1237_onTouchDown_runningActionsCount = 0;
var obj1237_onTouchDown_loopCount = 0;
var obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_loopCount = 0;
var obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_6_loopCount = 0;
var obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_5_loopCount = 0;
var obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_4_loopCount = 0;
var obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_3_loopCount = 0;
var obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_2_loopCount = 0;
var obj1237_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1237_droppedInsideTargetActions_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_loopCount = 0;
var obj1233_onDrag_activeActionGroupIndex = -1;
var obj1233_onDrag_runningActionsCount = 0;
var obj1233_onDrag_loopCount = 0;
var obj1233_onTouchDown_activeActionGroupIndex = -1;
var obj1233_onTouchDown_runningActionsCount = 0;
var obj1233_onTouchDown_loopCount = 0;
var obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_loopCount = 0;
var obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_6_loopCount = 0;
var obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_5_loopCount = 0;
var obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_4_loopCount = 0;
var obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_3_loopCount = 0;
var obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_2_loopCount = 0;
var obj1233_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1233_droppedInsideTargetActions_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_loopCount = 0;
var obj1239_onDrag_activeActionGroupIndex = -1;
var obj1239_onDrag_runningActionsCount = 0;
var obj1239_onDrag_loopCount = 0;
var obj1239_onTouchDown_activeActionGroupIndex = -1;
var obj1239_onTouchDown_runningActionsCount = 0;
var obj1239_onTouchDown_loopCount = 0;
var obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_loopCount = 0;
var obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_6_loopCount = 0;
var obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_5_loopCount = 0;
var obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_4_loopCount = 0;
var obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_3_loopCount = 0;
var obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_2_loopCount = 0;
var obj1239_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1239_droppedInsideTargetActions_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_loopCount = 0;
var obj65134_onTap_activeActionGroupIndex = -1;
var obj65134_onTap_runningActionsCount = 0;
var obj65134_onTap_loopCount = 0;
var obj65126_onTap_activeActionGroupIndex = -1;
var obj65126_onTap_runningActionsCount = 0;
var obj65126_onTap_loopCount = 0;
var obj86916_onTap_activeActionGroupIndex = -1;
var obj86916_onTap_runningActionsCount = 0;
var obj86916_onTap_loopCount = 0;
var obj86911_onTap_activeActionGroupIndex = -1;
var obj86911_onTap_runningActionsCount = 0;
var obj86911_onTap_loopCount = 0;
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
		
obj1149_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1149_onTap_activeActionGroupIndex = -1;
		$("#obj1149").trigger("obj1149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1149) {
				console.warn("de-queueing event obj1149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1149_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1151();
function goToPage_1151() {
	window.obj1149_onTap_runningActionsCount = obj1149_onTap_runningActionsCount + 1;
	$("#anchor72")[0].click();
	window.obj1149_onTap_runningActionsCount = window.obj1149_onTap_runningActionsCount - 1;
if (window.obj1149_onTap_runningActionsCount < 0) {
	window.obj1149_onTap_runningActionsCount = 0;
} else if (window.obj1149_onTap_runningActionsCount == 0) {
	obj1149_onTap_actionGroup1();
}
}





















};
obj1149_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1149_onTap_activeActionGroupIndex = -1;
		$("#obj1149").trigger("obj1149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1149) {
				console.warn("de-queueing event obj1149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1149_onTap_activeActionGroupIndex = 1;
	





















};
obj1146_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1146_onTap_activeActionGroupIndex = -1;
		$("#obj1146").trigger("obj1146_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1146) {
				console.warn("de-queueing event obj1146." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1146").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1146_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1148();
function goToPage_1148() {
	window.obj1146_onTap_runningActionsCount = obj1146_onTap_runningActionsCount + 1;
	$("#anchor73")[0].click();
	window.obj1146_onTap_runningActionsCount = window.obj1146_onTap_runningActionsCount - 1;
if (window.obj1146_onTap_runningActionsCount < 0) {
	window.obj1146_onTap_runningActionsCount = 0;
} else if (window.obj1146_onTap_runningActionsCount == 0) {
	obj1146_onTap_actionGroup1();
}
}





















};
obj1146_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1146_onTap_activeActionGroupIndex = -1;
		$("#obj1146").trigger("obj1146_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1146) {
				console.warn("de-queueing event obj1146." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1146").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1146_onTap_activeActionGroupIndex = 1;
	





















};
obj1152_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1152_onTap_activeActionGroupIndex = -1;
		$("#obj1152").trigger("obj1152_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1152) {
				console.warn("de-queueing event obj1152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1152_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1154();
function goToPage_1154() {
	window.obj1152_onTap_runningActionsCount = obj1152_onTap_runningActionsCount + 1;
	$("#anchor74")[0].click();
	window.obj1152_onTap_runningActionsCount = window.obj1152_onTap_runningActionsCount - 1;
if (window.obj1152_onTap_runningActionsCount < 0) {
	window.obj1152_onTap_runningActionsCount = 0;
} else if (window.obj1152_onTap_runningActionsCount == 0) {
	obj1152_onTap_actionGroup1();
}
}





















};
obj1152_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1152_onTap_activeActionGroupIndex = -1;
		$("#obj1152").trigger("obj1152_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1152) {
				console.warn("de-queueing event obj1152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1152_onTap_activeActionGroupIndex = 1;
	





















};
obj1229_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1229");
//	action: dragDrop
//	target: obj1229 
dragDrop_1247();
function dragDrop_1247() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1229_onTouchDown_runningActionsCount = obj1229_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1229');
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
	  	containerNode = $('#obj1177');
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
    	window.obj1229_onTouchDown_runningActionsCount = window.obj1229_onTouchDown_runningActionsCount - 1;
if (window.obj1229_onTouchDown_runningActionsCount < 0) {
	window.obj1229_onTouchDown_runningActionsCount = 0;
} else if (window.obj1229_onTouchDown_runningActionsCount == 0) {
	obj1229_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1209","#obj1211","#obj1213","#obj1215","#obj1217","#obj1219");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1247 = false;
    	var dropped_id_1247;
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
					dropped_1247 = true;
					dropped_id_1247 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1247) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1229").trigger('SCActionDragDrop1247_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1229_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1229_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1229 
move_92089();
function move_92089() {
	window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_runningActionsCount = obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1229");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_runningActionsCount = window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1229_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1397();
function runjs_1397() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1398();
function runjs_1398() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#C00000"); $("#obj1219").css("border-width", "2px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1265 
hide_1400();
function hide_1400() {
	var selector = "#obj1265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1400(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1399();
function runjs_1399() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1229").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1401();
function switchText_1401() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1229 
move_1402();
function move_1402() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj1229");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj1229_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1265
(function(){
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj1265";
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
					window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1407();
function playAudio_1407() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1403();
function runjs_1403() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1404();
function runjs_1404() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#000000"); $("#obj1219").css("border-width", "1px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1405();
function runjs_1405() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1229").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1408();
function switchText_1408() {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = obj1229_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_6_runningActionsCount = window.obj1229_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	





















};
obj1229_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1384();
function runjs_1384() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1385();
function runjs_1385() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#C00000"); $("#obj1217").css("border-width", "2px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1267 
hide_1387();
function hide_1387() {
	var selector = "#obj1267";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1387(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1386();
function runjs_1386() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1229").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1388();
function switchText_1388() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1229 
move_1389();
function move_1389() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj1229");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj1229_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1267
(function(){
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj1267";
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
					window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1394();
function playAudio_1394() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1390();
function runjs_1390() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1391();
function runjs_1391() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#000000"); $("#obj1217").css("border-width", "1px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1392();
function runjs_1392() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1229").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1395();
function switchText_1395() {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = obj1229_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_5_runningActionsCount = window.obj1229_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	





















};
obj1229_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1371();
function runjs_1371() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1372();
function runjs_1372() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#C00000"); $("#obj1215").css("border-width", "2px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1263 
hide_1374();
function hide_1374() {
	var selector = "#obj1263";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1374(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1373();
function runjs_1373() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1229").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1375();
function switchText_1375() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1229 
move_1376();
function move_1376() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1229");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj1229_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1263
(function(){
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj1263";
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
					window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1381();
function playAudio_1381() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1377();
function runjs_1377() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1378();
function runjs_1378() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#000000"); $("#obj1215").css("border-width", "1px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1379();
function runjs_1379() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1229").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1382();
function switchText_1382() {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = obj1229_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_4_runningActionsCount = window.obj1229_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	





















};
obj1229_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1358();
function runjs_1358() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1213").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1359();
function runjs_1359() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#C00000"); $("#obj1213").css("border-width", "2px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1261 
hide_1361();
function hide_1361() {
	var selector = "#obj1261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1361(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1360();
function runjs_1360() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1229").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1362();
function switchText_1362() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1229 
move_1363();
function move_1363() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1229");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj1229_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1261
(function(){
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj1261";
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
					window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1368();
function playAudio_1368() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1364();
function runjs_1364() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1213").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1365();
function runjs_1365() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#000000"); $("#obj1213").css("border-width", "1px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1366();
function runjs_1366() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1229").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1369();
function switchText_1369() {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = obj1229_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_3_runningActionsCount = window.obj1229_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj1229_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1326();
function runjs_1326() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1327();
function runjs_1327() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#C00000"); $("#obj1211").css("border-width", "2px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1259 
hide_1329();
function hide_1329() {
	var selector = "#obj1259";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1329(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1328();
function runjs_1328() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1229").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj1229_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1330();
function switchText_1330() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1229 
move_1331();
function move_1331() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1229");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj1229_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1259
(function(){
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj1259";
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
					window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup6();
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
				window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1337();
function playAudio_1337() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1332();
function runjs_1332() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1211").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1334();
function runjs_1334() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#000000"); $("#obj1211").css("border-width", "1px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1335();
function runjs_1335() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1229").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1338();
function switchText_1338() {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = obj1229_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_2_runningActionsCount = window.obj1229_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj1229_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1257 
hide_1269();
function hide_1269() {
	var selector = "#obj1257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1229_droppedInsideTargetActions_runningActionsCount = obj1229_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1269(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1249();
function runjs_1249() {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = obj1229_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1250();
function runjs_1250() {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = obj1229_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#058E3F"); $("#obj1209").css("border-width", "2px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1251();
function runjs_1251() {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = obj1229_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1229").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_1252();
function switchText_1252() {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = obj1229_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; color: #058e3f; font-size: 18px;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudio
//	target: obj1255 
playAudio_1253();
function playAudio_1253() {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = obj1229_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1255")[0];
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
		    window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup2();
}
	}
}









};
obj1229_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_90064();
function switchText_90064() {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = obj1229_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1229_droppedInsideTargetActions_runningActionsCount = window.obj1229_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1229_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1229_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1229_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1229_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj1229_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1229_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1229").trigger("obj1229_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1229) {
				console.warn("de-queueing event obj1229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1229_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj1235_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1235");
//	action: dragDrop
//	target: obj1235 
dragDrop_1293();
function dragDrop_1293() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1235_onTouchDown_runningActionsCount = obj1235_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1235');
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
	  	containerNode = $('#obj1177');
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
    	window.obj1235_onTouchDown_runningActionsCount = window.obj1235_onTouchDown_runningActionsCount - 1;
if (window.obj1235_onTouchDown_runningActionsCount < 0) {
	window.obj1235_onTouchDown_runningActionsCount = 0;
} else if (window.obj1235_onTouchDown_runningActionsCount == 0) {
	obj1235_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1211","#obj1209","#obj1213","#obj1215","#obj1217","#obj1219");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1293 = false;
    	var dropped_id_1293;
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
					dropped_1293 = true;
					dropped_id_1293 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1293) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1235").trigger('SCActionDragDrop1293_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1235_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1235_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1235 
move_92091();
function move_92091() {
	window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_runningActionsCount = obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1235");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_runningActionsCount = window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1235_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1592();
function runjs_1592() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1593();
function runjs_1593() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#C00000"); $("#obj1219").css("border-width", "2px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1265 
hide_1595();
function hide_1595() {
	var selector = "#obj1265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1595(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1594();
function runjs_1594() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1235").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1596();
function switchText_1596() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1235 
move_1597();
function move_1597() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj1235");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj1235_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1265
(function(){
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj1265";
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
					window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1602();
function playAudio_1602() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1598();
function runjs_1598() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1599();
function runjs_1599() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#000000"); $("#obj1219").css("border-width", "1px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1600();
function runjs_1600() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1235").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1603();
function switchText_1603() {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = obj1235_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_6_runningActionsCount = window.obj1235_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	





















};
obj1235_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1579();
function runjs_1579() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1580();
function runjs_1580() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#C00000"); $("#obj1217").css("border-width", "2px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1267 
hide_1582();
function hide_1582() {
	var selector = "#obj1267";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1582(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1581();
function runjs_1581() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1235").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1583();
function switchText_1583() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1235 
move_1584();
function move_1584() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj1235");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj1235_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1267
(function(){
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj1267";
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
					window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1589();
function playAudio_1589() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1585();
function runjs_1585() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1586();
function runjs_1586() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#000000"); $("#obj1217").css("border-width", "1px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1587();
function runjs_1587() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1235").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1590();
function switchText_1590() {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = obj1235_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_5_runningActionsCount = window.obj1235_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	





















};
obj1235_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1566();
function runjs_1566() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1567();
function runjs_1567() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#C00000"); $("#obj1215").css("border-width", "2px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1263 
hide_1569();
function hide_1569() {
	var selector = "#obj1263";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1569(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1568();
function runjs_1568() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1235").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1570();
function switchText_1570() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1235 
move_1571();
function move_1571() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1235");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj1235_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1263
(function(){
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj1263";
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
					window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1576();
function playAudio_1576() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1572();
function runjs_1572() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1573();
function runjs_1573() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#000000"); $("#obj1215").css("border-width", "1px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1574();
function runjs_1574() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1235").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1577();
function switchText_1577() {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = obj1235_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_4_runningActionsCount = window.obj1235_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	





















};
obj1235_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1553();
function runjs_1553() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1213").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1554();
function runjs_1554() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#C00000"); $("#obj1213").css("border-width", "2px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1261 
hide_1556();
function hide_1556() {
	var selector = "#obj1261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1556(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1555();
function runjs_1555() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1235").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1557();
function switchText_1557() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1235 
move_1558();
function move_1558() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1235");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj1235_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1261
(function(){
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj1261";
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
					window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1563();
function playAudio_1563() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1559();
function runjs_1559() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1213").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1560();
function runjs_1560() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#000000"); $("#obj1213").css("border-width", "1px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1561();
function runjs_1561() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1235").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1564();
function switchText_1564() {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = obj1235_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_3_runningActionsCount = window.obj1235_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj1235_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1540();
function runjs_1540() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1541();
function runjs_1541() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#C00000"); $("#obj1209").css("border-width", "2px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1257 
hide_1543();
function hide_1543() {
	var selector = "#obj1257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1543(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1542();
function runjs_1542() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1235").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj1235_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1544();
function switchText_1544() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1235 
move_1545();
function move_1545() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1235");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj1235_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1257
(function(){
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj1257";
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
					window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup6();
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
				window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1550();
function playAudio_1550() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1546();
function runjs_1546() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1547();
function runjs_1547() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#000000"); $("#obj1209").css("border-width", "1px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1548();
function runjs_1548() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1235").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1551();
function switchText_1551() {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = obj1235_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_2_runningActionsCount = window.obj1235_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj1235_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1259 
hide_1297();
function hide_1297() {
	var selector = "#obj1259";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1235_droppedInsideTargetActions_runningActionsCount = obj1235_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1297(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1295();
function runjs_1295() {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = obj1235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1296();
function runjs_1296() {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = obj1235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#058E3F"); $("#obj1211").css("border-width", "2px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1298();
function runjs_1298() {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = obj1235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1235").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_1299();
function switchText_1299() {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = obj1235_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; color: #058e3f; font-size: 18px;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudio
//	target: obj1255 
playAudio_1300();
function playAudio_1300() {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = obj1235_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1255")[0];
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
		    window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup2();
}
	}
}









};
obj1235_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_90065();
function switchText_90065() {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = obj1235_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1235_droppedInsideTargetActions_runningActionsCount = window.obj1235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1235_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj1235_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1235").trigger("obj1235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1235) {
				console.warn("de-queueing event obj1235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1235_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj1231_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1231");
//	action: dragDrop
//	target: obj1231 
dragDrop_1275();
function dragDrop_1275() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1231_onTouchDown_runningActionsCount = obj1231_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1231');
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
	  	containerNode = $('#obj1177');
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
    	window.obj1231_onTouchDown_runningActionsCount = window.obj1231_onTouchDown_runningActionsCount - 1;
if (window.obj1231_onTouchDown_runningActionsCount < 0) {
	window.obj1231_onTouchDown_runningActionsCount = 0;
} else if (window.obj1231_onTouchDown_runningActionsCount == 0) {
	obj1231_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1215","#obj1209","#obj1211","#obj1213","#obj1217","#obj1219");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1275 = false;
    	var dropped_id_1275;
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
					dropped_1275 = true;
					dropped_id_1275 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1275) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1231").trigger('SCActionDragDrop1275_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1231_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1231_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1231 
move_92096();
function move_92096() {
	window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_runningActionsCount = obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_runningActionsCount = window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1231_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1462();
function runjs_1462() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1463();
function runjs_1463() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#C00000"); $("#obj1219").css("border-width", "2px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1265 
hide_1465();
function hide_1465() {
	var selector = "#obj1265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1465(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1464();
function runjs_1464() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1231").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1466();
function switchText_1466() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1231 
move_1467();
function move_1467() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj1231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj1231_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1265
(function(){
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj1265";
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
					window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1472();
function playAudio_1472() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1468();
function runjs_1468() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1469();
function runjs_1469() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#000000"); $("#obj1219").css("border-width", "1px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1470();
function runjs_1470() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1231").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1473();
function switchText_1473() {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = obj1231_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_6_runningActionsCount = window.obj1231_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	





















};
obj1231_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1449();
function runjs_1449() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1450();
function runjs_1450() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#C00000"); $("#obj1217").css("border-width", "2px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1267 
hide_1452();
function hide_1452() {
	var selector = "#obj1267";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1452(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1451();
function runjs_1451() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1231").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1453();
function switchText_1453() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1231 
move_1454();
function move_1454() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj1231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj1231_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1267
(function(){
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj1267";
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
					window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1459();
function playAudio_1459() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1455();
function runjs_1455() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1456();
function runjs_1456() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#000000"); $("#obj1217").css("border-width", "1px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1457();
function runjs_1457() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1231").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1460();
function switchText_1460() {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = obj1231_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_5_runningActionsCount = window.obj1231_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	





















};
obj1231_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1436();
function runjs_1436() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1437();
function runjs_1437() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#C00000"); $("#obj1213").css("border-width", "2px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1261 
hide_1439();
function hide_1439() {
	var selector = "#obj1261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1439(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1438();
function runjs_1438() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1231").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1440();
function switchText_1440() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1231 
move_1441();
function move_1441() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj1231_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1261
(function(){
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj1261";
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
					window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1446();
function playAudio_1446() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1442();
function runjs_1442() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1443();
function runjs_1443() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#000000"); $("#obj1213").css("border-width", "1px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1444();
function runjs_1444() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1231").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1447();
function switchText_1447() {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = obj1231_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_4_runningActionsCount = window.obj1231_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	





















};
obj1231_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1423();
function runjs_1423() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1424();
function runjs_1424() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#C00000"); $("#obj1211").css("border-width", "2px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1259 
hide_1426();
function hide_1426() {
	var selector = "#obj1259";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1426(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1425();
function runjs_1425() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1231").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1427();
function switchText_1427() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1231 
move_1428();
function move_1428() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj1231_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1259
(function(){
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj1259";
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
					window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1433();
function playAudio_1433() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1429();
function runjs_1429() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1430();
function runjs_1430() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#000000"); $("#obj1211").css("border-width", "1px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1431();
function runjs_1431() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1231").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1434();
function switchText_1434() {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = obj1231_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_3_runningActionsCount = window.obj1231_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj1231_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1410();
function runjs_1410() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1411();
function runjs_1411() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#C00000"); $("#obj1209").css("border-width", "2px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1257 
hide_1413();
function hide_1413() {
	var selector = "#obj1257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1413(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1412();
function runjs_1412() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1231").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj1231_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1414();
function switchText_1414() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1231 
move_1415();
function move_1415() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj1231_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1257
(function(){
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj1257";
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
					window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup6();
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
				window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1420();
function playAudio_1420() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1416();
function runjs_1416() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1417();
function runjs_1417() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#000000"); $("#obj1209").css("border-width", "1px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1418();
function runjs_1418() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1231").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1421();
function switchText_1421() {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = obj1231_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_2_runningActionsCount = window.obj1231_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj1231_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1263 
hide_1279();
function hide_1279() {
	var selector = "#obj1263";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1231_droppedInsideTargetActions_runningActionsCount = obj1231_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1279(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1277();
function runjs_1277() {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = obj1231_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1215").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1278();
function runjs_1278() {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = obj1231_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#058E3F"); $("#obj1215").css("border-width", "2px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1280();
function runjs_1280() {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = obj1231_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1231").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_1281();
function switchText_1281() {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = obj1231_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; color: #058e3f; font-size: 18px;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudio
//	target: obj1255 
playAudio_1282();
function playAudio_1282() {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = obj1231_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1255")[0];
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
		    window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup2();
}
	}
}









};
obj1231_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_90066();
function switchText_90066() {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = obj1231_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1231_droppedInsideTargetActions_runningActionsCount = window.obj1231_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1231_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1231_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1231_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1231_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj1231_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1231_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1231").trigger("obj1231_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1231) {
				console.warn("de-queueing event obj1231." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1231").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1231_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj1237_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1237");
//	action: dragDrop
//	target: obj1237 
dragDrop_1302();
function dragDrop_1302() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1237_onTouchDown_runningActionsCount = obj1237_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1237');
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
	  	containerNode = $('#obj1177');
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
    	window.obj1237_onTouchDown_runningActionsCount = window.obj1237_onTouchDown_runningActionsCount - 1;
if (window.obj1237_onTouchDown_runningActionsCount < 0) {
	window.obj1237_onTouchDown_runningActionsCount = 0;
} else if (window.obj1237_onTouchDown_runningActionsCount == 0) {
	obj1237_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1219","#obj1209","#obj1211","#obj1213","#obj1215","#obj1217");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1302 = false;
    	var dropped_id_1302;
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
					dropped_1302 = true;
					dropped_id_1302 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1302) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1237").trigger('SCActionDragDrop1302_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1237_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1237_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1237 
move_92098();
function move_92098() {
	window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_runningActionsCount = obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1237");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_runningActionsCount = window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1237_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1657();
function runjs_1657() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1217").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1658();
function runjs_1658() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#C00000"); $("#obj1217").css("border-width", "2px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1267 
hide_1660();
function hide_1660() {
	var selector = "#obj1267";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1660(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1659();
function runjs_1659() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1237").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1661();
function switchText_1661() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1237 
move_1662();
function move_1662() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj1237");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj1237_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1267
(function(){
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj1267";
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
					window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1667();
function playAudio_1667() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1663();
function runjs_1663() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1217").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1664();
function runjs_1664() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#000000"); $("#obj1217").css("border-width", "1px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1665();
function runjs_1665() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1237").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1668();
function switchText_1668() {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = obj1237_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_6_runningActionsCount = window.obj1237_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	





















};
obj1237_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1644();
function runjs_1644() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1215").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1645();
function runjs_1645() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#C00000"); $("#obj1215").css("border-width", "2px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1263 
hide_1647();
function hide_1647() {
	var selector = "#obj1263";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1647(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1646();
function runjs_1646() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1237").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1648();
function switchText_1648() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1237 
move_1649();
function move_1649() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj1237");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj1237_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1263
(function(){
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj1263";
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
					window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1654();
function playAudio_1654() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1650();
function runjs_1650() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1215").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1651();
function runjs_1651() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#000000"); $("#obj1215").css("border-width", "1px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1652();
function runjs_1652() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1237").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1655();
function switchText_1655() {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = obj1237_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_5_runningActionsCount = window.obj1237_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	





















};
obj1237_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1631();
function runjs_1631() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1632();
function runjs_1632() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#C00000"); $("#obj1213").css("border-width", "2px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1261 
hide_1634();
function hide_1634() {
	var selector = "#obj1261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1634(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1633();
function runjs_1633() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1237").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1635();
function switchText_1635() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1237 
move_1636();
function move_1636() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1237");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj1237_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1261
(function(){
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj1261";
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
					window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1641();
function playAudio_1641() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1637();
function runjs_1637() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1638();
function runjs_1638() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#000000"); $("#obj1213").css("border-width", "1px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1639();
function runjs_1639() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1237").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1642();
function switchText_1642() {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = obj1237_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_4_runningActionsCount = window.obj1237_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	





















};
obj1237_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1618();
function runjs_1618() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1619();
function runjs_1619() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#C00000"); $("#obj1211").css("border-width", "2px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1259 
hide_1621();
function hide_1621() {
	var selector = "#obj1259";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1621(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1620();
function runjs_1620() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1237").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1622();
function switchText_1622() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1237 
move_1623();
function move_1623() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1237");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj1237_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1259
(function(){
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj1259";
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
					window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1628();
function playAudio_1628() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1624();
function runjs_1624() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1625();
function runjs_1625() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#000000"); $("#obj1211").css("border-width", "1px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1626();
function runjs_1626() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1237").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1629();
function switchText_1629() {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = obj1237_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_3_runningActionsCount = window.obj1237_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj1237_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1605();
function runjs_1605() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1606();
function runjs_1606() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#C00000"); $("#obj1209").css("border-width", "2px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1257 
hide_1608();
function hide_1608() {
	var selector = "#obj1257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1608(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1607();
function runjs_1607() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1237").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj1237_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1609();
function switchText_1609() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1237 
move_1610();
function move_1610() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1237");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj1237_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1257
(function(){
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj1257";
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
					window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup6();
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
				window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1615();
function playAudio_1615() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1611();
function runjs_1611() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1612();
function runjs_1612() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#000000"); $("#obj1209").css("border-width", "1px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1613();
function runjs_1613() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1237").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1616();
function switchText_1616() {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = obj1237_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_2_runningActionsCount = window.obj1237_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj1237_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1265 
hide_1306();
function hide_1306() {
	var selector = "#obj1265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1237_droppedInsideTargetActions_runningActionsCount = obj1237_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1306(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1304();
function runjs_1304() {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = obj1237_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1219").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1305();
function runjs_1305() {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = obj1237_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#058E3F"); $("#obj1219").css("border-width", "2px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1307();
function runjs_1307() {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = obj1237_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1237").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_1308();
function switchText_1308() {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = obj1237_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; color: #058e3f; font-size: 18px;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudio
//	target: obj1255 
playAudio_1309();
function playAudio_1309() {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = obj1237_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1255")[0];
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
		    window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup2();
}
	}
}









};
obj1237_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_90067();
function switchText_90067() {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = obj1237_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1237_droppedInsideTargetActions_runningActionsCount = window.obj1237_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1237_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1237_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1237_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1237_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj1237_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1237_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1237").trigger("obj1237_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1237) {
				console.warn("de-queueing event obj1237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1237_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj1233_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1233");
//	action: dragDrop
//	target: obj1233 
dragDrop_1284();
function dragDrop_1284() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1233_onTouchDown_runningActionsCount = obj1233_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1233');
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
	  	containerNode = $('#obj1177');
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
    	window.obj1233_onTouchDown_runningActionsCount = window.obj1233_onTouchDown_runningActionsCount - 1;
if (window.obj1233_onTouchDown_runningActionsCount < 0) {
	window.obj1233_onTouchDown_runningActionsCount = 0;
} else if (window.obj1233_onTouchDown_runningActionsCount == 0) {
	obj1233_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1213","#obj1209","#obj1211","#obj1215","#obj1217","#obj1219");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1284 = false;
    	var dropped_id_1284;
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
					dropped_1284 = true;
					dropped_id_1284 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1284) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1233").trigger('SCActionDragDrop1284_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1233_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1233_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1233 
move_92100();
function move_92100() {
	window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_runningActionsCount = obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 573;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_runningActionsCount = window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1233_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1527();
function runjs_1527() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1528();
function runjs_1528() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#C00000"); $("#obj1219").css("border-width", "2px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1265 
hide_1530();
function hide_1530() {
	var selector = "#obj1265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1530(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1529();
function runjs_1529() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1233").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1531();
function switchText_1531() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1233 
move_1532();
function move_1532() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj1233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 573;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj1233_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1265
(function(){
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj1265";
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
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1537();
function playAudio_1537() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1533();
function runjs_1533() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1534();
function runjs_1534() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#000000"); $("#obj1219").css("border-width", "1px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1535();
function runjs_1535() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1233").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1538();
function switchText_1538() {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = obj1233_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_6_runningActionsCount = window.obj1233_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	





















};
obj1233_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1514();
function runjs_1514() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1515();
function runjs_1515() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#C00000"); $("#obj1217").css("border-width", "2px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1267 
hide_1517();
function hide_1517() {
	var selector = "#obj1267";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1517(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1516();
function runjs_1516() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1233").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1518();
function switchText_1518() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1233 
move_1519();
function move_1519() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj1233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 573;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj1233_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1267
(function(){
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj1267";
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
					window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1524();
function playAudio_1524() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1520();
function runjs_1520() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1521();
function runjs_1521() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#000000"); $("#obj1217").css("border-width", "1px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1522();
function runjs_1522() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1233").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1525();
function switchText_1525() {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = obj1233_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_5_runningActionsCount = window.obj1233_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	





















};
obj1233_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1501();
function runjs_1501() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1502();
function runjs_1502() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#C00000"); $("#obj1215").css("border-width", "2px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1263 
hide_1504();
function hide_1504() {
	var selector = "#obj1263";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1504(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1503();
function runjs_1503() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1233").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1505();
function switchText_1505() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1233 
move_1506();
function move_1506() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 573;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj1233_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1263
(function(){
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj1263";
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
					window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1511();
function playAudio_1511() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1507();
function runjs_1507() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1508();
function runjs_1508() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#000000"); $("#obj1215").css("border-width", "1px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1509();
function runjs_1509() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1233").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1512();
function switchText_1512() {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = obj1233_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_4_runningActionsCount = window.obj1233_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	





















};
obj1233_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1488();
function runjs_1488() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1489();
function runjs_1489() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#C00000"); $("#obj1211").css("border-width", "2px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1259 
hide_1491();
function hide_1491() {
	var selector = "#obj1259";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1491(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1490();
function runjs_1490() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1233").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1492();
function switchText_1492() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1233 
move_1493();
function move_1493() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 573;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj1233_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1259
(function(){
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj1259";
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
					window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1498();
function playAudio_1498() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1494();
function runjs_1494() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1495();
function runjs_1495() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#000000"); $("#obj1211").css("border-width", "1px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1496();
function runjs_1496() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1233").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1499();
function switchText_1499() {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = obj1233_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_3_runningActionsCount = window.obj1233_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj1233_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1475();
function runjs_1475() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1476();
function runjs_1476() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#C00000"); $("#obj1209").css("border-width", "2px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1257 
hide_1478();
function hide_1478() {
	var selector = "#obj1257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1478(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1477();
function runjs_1477() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1233").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj1233_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1479();
function switchText_1479() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1233 
move_1480();
function move_1480() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 573;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj1233_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1257
(function(){
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj1257";
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
					window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup6();
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
				window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1485();
function playAudio_1485() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1481();
function runjs_1481() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1482();
function runjs_1482() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#000000"); $("#obj1209").css("border-width", "1px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1483();
function runjs_1483() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1233").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1486();
function switchText_1486() {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = obj1233_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_2_runningActionsCount = window.obj1233_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj1233_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1261 
hide_1288();
function hide_1288() {
	var selector = "#obj1261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1233_droppedInsideTargetActions_runningActionsCount = obj1233_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1288(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1286();
function runjs_1286() {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = obj1233_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1213").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1287();
function runjs_1287() {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = obj1233_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#058E3F"); $("#obj1213").css("border-width", "2px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1289();
function runjs_1289() {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = obj1233_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1233").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_1290();
function switchText_1290() {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = obj1233_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; color: #058e3f; font-size: 18px;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudio
//	target: obj1255 
playAudio_1291();
function playAudio_1291() {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = obj1233_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1255")[0];
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
		    window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup2();
}
	}
}









};
obj1233_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_90068();
function switchText_90068() {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = obj1233_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1233_droppedInsideTargetActions_runningActionsCount = window.obj1233_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1233_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1233_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1233_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1233_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj1233_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1233_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1233").trigger("obj1233_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1233) {
				console.warn("de-queueing event obj1233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1233_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj1239_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1239");
//	action: dragDrop
//	target: obj1239 
dragDrop_1311();
function dragDrop_1311() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1239_onTouchDown_runningActionsCount = obj1239_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1239');
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
	  	containerNode = $('#obj1177');
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
    	window.obj1239_onTouchDown_runningActionsCount = window.obj1239_onTouchDown_runningActionsCount - 1;
if (window.obj1239_onTouchDown_runningActionsCount < 0) {
	window.obj1239_onTouchDown_runningActionsCount = 0;
} else if (window.obj1239_onTouchDown_runningActionsCount == 0) {
	obj1239_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1217","#obj1209","#obj1211","#obj1213","#obj1215","#obj1219");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1311 = false;
    	var dropped_id_1311;
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
					dropped_1311 = true;
					dropped_id_1311 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1311) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1239").trigger('SCActionDragDrop1311_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1239_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1239_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1239 
move_92102();
function move_92102() {
	window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_runningActionsCount = obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_runningActionsCount = window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1239_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1722();
function runjs_1722() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1723();
function runjs_1723() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#C00000"); $("#obj1219").css("border-width", "2px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1265 
hide_1725();
function hide_1725() {
	var selector = "#obj1265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1725(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1724();
function runjs_1724() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1726();
function switchText_1726() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1239 
move_1727();
function move_1727() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj1239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj1239_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1265
(function(){
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj1265";
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
					window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1732();
function playAudio_1732() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1728();
function runjs_1728() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1729();
function runjs_1729() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1219").css("border-color", "#000000"); $("#obj1219").css("border-width", "1px"); $("#obj1219").css("border-style", "solid"); $("#obj1219").css("border-radius", "10px"); $("#obj1219").css("-webkit-border-radius", "10px"); $("#obj1219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1730();
function runjs_1730() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj1239").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1733();
function switchText_1733() {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = obj1239_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_6_runningActionsCount = window.obj1239_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	





















};
obj1239_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1709();
function runjs_1709() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1215").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1710();
function runjs_1710() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#C00000"); $("#obj1215").css("border-width", "2px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1263 
hide_1712();
function hide_1712() {
	var selector = "#obj1263";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1712(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1711();
function runjs_1711() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1713();
function switchText_1713() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1239 
move_1714();
function move_1714() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj1239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj1239_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1263
(function(){
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj1263";
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
					window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1719();
function playAudio_1719() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1715();
function runjs_1715() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1215").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1716();
function runjs_1716() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1215").css("border-color", "#000000"); $("#obj1215").css("border-width", "1px"); $("#obj1215").css("border-style", "solid"); $("#obj1215").css("border-radius", "10px"); $("#obj1215").css("-webkit-border-radius", "10px"); $("#obj1215").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1717();
function runjs_1717() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj1239").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1720();
function switchText_1720() {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = obj1239_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_5_runningActionsCount = window.obj1239_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	





















};
obj1239_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1696();
function runjs_1696() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1697();
function runjs_1697() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#C00000"); $("#obj1213").css("border-width", "2px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1261 
hide_1699();
function hide_1699() {
	var selector = "#obj1261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1699(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1698();
function runjs_1698() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1700();
function switchText_1700() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1239 
move_1701();
function move_1701() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj1239_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1261
(function(){
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj1261";
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
					window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1706();
function playAudio_1706() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1702();
function runjs_1702() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1703();
function runjs_1703() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1213").css("border-color", "#000000"); $("#obj1213").css("border-width", "1px"); $("#obj1213").css("border-style", "solid"); $("#obj1213").css("border-radius", "10px"); $("#obj1213").css("-webkit-border-radius", "10px"); $("#obj1213").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1704();
function runjs_1704() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1239").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1707();
function switchText_1707() {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = obj1239_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_4_runningActionsCount = window.obj1239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	





















};
obj1239_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1683();
function runjs_1683() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1684();
function runjs_1684() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#C00000"); $("#obj1211").css("border-width", "2px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1259 
hide_1686();
function hide_1686() {
	var selector = "#obj1259";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1686(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1685();
function runjs_1685() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1687();
function switchText_1687() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1239 
move_1688();
function move_1688() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj1239_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1259
(function(){
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj1259";
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
					window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1693();
function playAudio_1693() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1689();
function runjs_1689() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1690();
function runjs_1690() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1211").css("border-color", "#000000"); $("#obj1211").css("border-width", "1px"); $("#obj1211").css("border-style", "solid"); $("#obj1211").css("border-radius", "10px"); $("#obj1211").css("-webkit-border-radius", "10px"); $("#obj1211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1691();
function runjs_1691() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1239").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1694();
function switchText_1694() {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = obj1239_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_3_runningActionsCount = window.obj1239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj1239_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1670();
function runjs_1670() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1671();
function runjs_1671() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#C00000"); $("#obj1209").css("border-width", "2px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1257 
hide_1673();
function hide_1673() {
	var selector = "#obj1257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1673(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1672();
function runjs_1672() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj1239_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1674();
function switchText_1674() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1239 
move_1675();
function move_1675() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj1239_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj1257
(function(){
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj1257";
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
					window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup6();
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
				window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1254 
playAudio_1680();
function playAudio_1680() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1254")[0];
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
		    window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup6();
}
	}
}


//	action: Run JavaScript
runjs_1676();
function runjs_1676() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1677();
function runjs_1677() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1209").css("border-color", "#000000"); $("#obj1209").css("border-width", "1px"); $("#obj1209").css("border-style", "solid"); $("#obj1209").css("border-radius", "10px"); $("#obj1209").css("-webkit-border-radius", "10px"); $("#obj1209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1678();
function runjs_1678() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1239").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}

//	action: Switch Text
switchText_1681();
function switchText_1681() {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = obj1239_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_2_runningActionsCount = window.obj1239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj1239_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1267 
hide_1315();
function hide_1315() {
	var selector = "#obj1267";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1239_droppedInsideTargetActions_runningActionsCount = obj1239_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1315(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1313();
function runjs_1313() {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = obj1239_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1217").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1314();
function runjs_1314() {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = obj1239_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1217").css("border-color", "#058E3F"); $("#obj1217").css("border-width", "2px"); $("#obj1217").css("border-style", "solid"); $("#obj1217").css("border-radius", "10px"); $("#obj1217").css("-webkit-border-radius", "10px"); $("#obj1217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1316();
function runjs_1316() {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = obj1239_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_1317();
function switchText_1317() {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = obj1239_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; color: #058e3f; font-size: 18px;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_activeActionGroupIndex = 1;
	












//	action: playAudio
//	target: obj1255 
playAudio_1318();
function playAudio_1318() {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = obj1239_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1255")[0];
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
		    window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup2();
}
	}
}









};
obj1239_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_90069();
function switchText_90069() {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = obj1239_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1244_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1244_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1244").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1244_content");
			setTimeout(function () {
				window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1244 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1239_droppedInsideTargetActions_runningActionsCount = window.obj1239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1239_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj1239_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1239").trigger("obj1239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1239) {
				console.warn("de-queueing event obj1239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1239_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj65134_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65134_onTap_activeActionGroupIndex = -1;
		$("#obj65134").trigger("obj65134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65134) {
				console.warn("de-queueing event obj65134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65134_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65134 
hide_65137();
function hide_65137() {
	var selector = "#obj65134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65134_onTap_runningActionsCount = obj65134_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65134_onTap_runningActionsCount = window.obj65134_onTap_runningActionsCount - 1;
if (window.obj65134_onTap_runningActionsCount < 0) {
	window.obj65134_onTap_runningActionsCount = 0;
} else if (window.obj65134_onTap_runningActionsCount == 0) {
	obj65134_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65137(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65134_onTap_runningActionsCount = window.obj65134_onTap_runningActionsCount - 1;
if (window.obj65134_onTap_runningActionsCount < 0) {
	window.obj65134_onTap_runningActionsCount = 0;
} else if (window.obj65134_onTap_runningActionsCount == 0) {
	obj65134_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65140 
stopMovie_65136();
function stopMovie_65136() {
	window.obj65134_onTap_runningActionsCount = obj65134_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65140")[0];
	myVideo.pause();
	window.obj65134_onTap_runningActionsCount = window.obj65134_onTap_runningActionsCount - 1;
if (window.obj65134_onTap_runningActionsCount < 0) {
	window.obj65134_onTap_runningActionsCount = 0;
} else if (window.obj65134_onTap_runningActionsCount == 0) {
	obj65134_onTap_actionGroup1();
}
}
















};
obj65134_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65134_onTap_activeActionGroupIndex = -1;
		$("#obj65134").trigger("obj65134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65134) {
				console.warn("de-queueing event obj65134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65134_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65126
(function(){
	window.obj65134_onTap_runningActionsCount = obj65134_onTap_runningActionsCount + 1;

	var selector = "#obj65126";
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
					window.obj65134_onTap_runningActionsCount = window.obj65134_onTap_runningActionsCount - 1;
if (window.obj65134_onTap_runningActionsCount < 0) {
	window.obj65134_onTap_runningActionsCount = 0;
} else if (window.obj65134_onTap_runningActionsCount == 0) {
	obj65134_onTap_actionGroup2();
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
				window.obj65134_onTap_runningActionsCount = window.obj65134_onTap_runningActionsCount - 1;
if (window.obj65134_onTap_runningActionsCount < 0) {
	window.obj65134_onTap_runningActionsCount = 0;
} else if (window.obj65134_onTap_runningActionsCount == 0) {
	obj65134_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65134_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65134_onTap_activeActionGroupIndex = -1;
		$("#obj65134").trigger("obj65134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65134) {
				console.warn("de-queueing event obj65134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65134_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65140 
move_65139();
function move_65139() {
	window.obj65134_onTap_runningActionsCount = obj65134_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65140");
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
			window.obj65134_onTap_runningActionsCount = window.obj65134_onTap_runningActionsCount - 1;
if (window.obj65134_onTap_runningActionsCount < 0) {
	window.obj65134_onTap_runningActionsCount = 0;
} else if (window.obj65134_onTap_runningActionsCount == 0) {
	obj65134_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65134_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65134_onTap_activeActionGroupIndex = -1;
		$("#obj65134").trigger("obj65134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65134) {
				console.warn("de-queueing event obj65134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65134_onTap_activeActionGroupIndex = 3;
	





















};
obj65126_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65126_onTap_activeActionGroupIndex = -1;
		$("#obj65126").trigger("obj65126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65126) {
				console.warn("de-queueing event obj65126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65126_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65126 
hide_65129();
function hide_65129() {
	var selector = "#obj65126";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65126_onTap_runningActionsCount = obj65126_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65126_onTap_runningActionsCount = window.obj65126_onTap_runningActionsCount - 1;
if (window.obj65126_onTap_runningActionsCount < 0) {
	window.obj65126_onTap_runningActionsCount = 0;
} else if (window.obj65126_onTap_runningActionsCount == 0) {
	obj65126_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65129(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65126_onTap_runningActionsCount = window.obj65126_onTap_runningActionsCount - 1;
if (window.obj65126_onTap_runningActionsCount < 0) {
	window.obj65126_onTap_runningActionsCount = 0;
} else if (window.obj65126_onTap_runningActionsCount == 0) {
	obj65126_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65140 
playPauseMovie_65128();
function playPauseMovie_65128() {
	window.obj65126_onTap_runningActionsCount = obj65126_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65140")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65126_onTap_runningActionsCount = window.obj65126_onTap_runningActionsCount - 1;
if (window.obj65126_onTap_runningActionsCount < 0) {
	window.obj65126_onTap_runningActionsCount = 0;
} else if (window.obj65126_onTap_runningActionsCount == 0) {
	obj65126_onTap_actionGroup1();
}
}

















};
obj65126_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65126_onTap_activeActionGroupIndex = -1;
		$("#obj65126").trigger("obj65126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65126) {
				console.warn("de-queueing event obj65126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65126_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65134
(function(){
	window.obj65126_onTap_runningActionsCount = obj65126_onTap_runningActionsCount + 1;

	var selector = "#obj65134";
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
					window.obj65126_onTap_runningActionsCount = window.obj65126_onTap_runningActionsCount - 1;
if (window.obj65126_onTap_runningActionsCount < 0) {
	window.obj65126_onTap_runningActionsCount = 0;
} else if (window.obj65126_onTap_runningActionsCount == 0) {
	obj65126_onTap_actionGroup2();
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
				window.obj65126_onTap_runningActionsCount = window.obj65126_onTap_runningActionsCount - 1;
if (window.obj65126_onTap_runningActionsCount < 0) {
	window.obj65126_onTap_runningActionsCount = 0;
} else if (window.obj65126_onTap_runningActionsCount == 0) {
	obj65126_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65126_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65126_onTap_activeActionGroupIndex = -1;
		$("#obj65126").trigger("obj65126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65126) {
				console.warn("de-queueing event obj65126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65126_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65140 
move_65131();
function move_65131() {
	window.obj65126_onTap_runningActionsCount = obj65126_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65140");
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
			window.obj65126_onTap_runningActionsCount = window.obj65126_onTap_runningActionsCount - 1;
if (window.obj65126_onTap_runningActionsCount < 0) {
	window.obj65126_onTap_runningActionsCount = 0;
} else if (window.obj65126_onTap_runningActionsCount == 0) {
	obj65126_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65126_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65126_onTap_activeActionGroupIndex = -1;
		$("#obj65126").trigger("obj65126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65126) {
				console.warn("de-queueing event obj65126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65126_onTap_activeActionGroupIndex = 3;
	





















};
obj86916_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86916_onTap_activeActionGroupIndex = -1;
		$("#obj86916").trigger("obj86916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86916) {
				console.warn("de-queueing event obj86916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86916_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86921 
stopAudio_86918();
function stopAudio_86918() {
	window.obj86916_onTap_runningActionsCount = obj86916_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86921")[0];
	myAudio.pause();
	window.obj86916_onTap_runningActionsCount = window.obj86916_onTap_runningActionsCount - 1;
if (window.obj86916_onTap_runningActionsCount < 0) {
	window.obj86916_onTap_runningActionsCount = 0;
} else if (window.obj86916_onTap_runningActionsCount == 0) {
	obj86916_onTap_actionGroup1();
}
}








};
obj86916_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86916_onTap_activeActionGroupIndex = -1;
		$("#obj86916").trigger("obj86916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86916) {
				console.warn("de-queueing event obj86916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86916_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86916 
hide_86919();
function hide_86919() {
	var selector = "#obj86916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86916_onTap_runningActionsCount = obj86916_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86916_onTap_runningActionsCount = window.obj86916_onTap_runningActionsCount - 1;
if (window.obj86916_onTap_runningActionsCount < 0) {
	window.obj86916_onTap_runningActionsCount = 0;
} else if (window.obj86916_onTap_runningActionsCount == 0) {
	obj86916_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86919(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86916_onTap_runningActionsCount = window.obj86916_onTap_runningActionsCount - 1;
if (window.obj86916_onTap_runningActionsCount < 0) {
	window.obj86916_onTap_runningActionsCount = 0;
} else if (window.obj86916_onTap_runningActionsCount == 0) {
	obj86916_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86916_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86916_onTap_activeActionGroupIndex = -1;
		$("#obj86916").trigger("obj86916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86916) {
				console.warn("de-queueing event obj86916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86916_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86911
(function(){
	window.obj86916_onTap_runningActionsCount = obj86916_onTap_runningActionsCount + 1;

	var selector = "#obj86911";
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
					window.obj86916_onTap_runningActionsCount = window.obj86916_onTap_runningActionsCount - 1;
if (window.obj86916_onTap_runningActionsCount < 0) {
	window.obj86916_onTap_runningActionsCount = 0;
} else if (window.obj86916_onTap_runningActionsCount == 0) {
	obj86916_onTap_actionGroup3();
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
				window.obj86916_onTap_runningActionsCount = window.obj86916_onTap_runningActionsCount - 1;
if (window.obj86916_onTap_runningActionsCount < 0) {
	window.obj86916_onTap_runningActionsCount = 0;
} else if (window.obj86916_onTap_runningActionsCount == 0) {
	obj86916_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86916_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86916_onTap_activeActionGroupIndex = -1;
		$("#obj86916").trigger("obj86916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86916) {
				console.warn("de-queueing event obj86916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86916_onTap_activeActionGroupIndex = 3;
	





















};
obj86911_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86911_onTap_activeActionGroupIndex = -1;
		$("#obj86911").trigger("obj86911_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86911) {
				console.warn("de-queueing event obj86911." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86911").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86911_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86911 
hide_86913();
function hide_86913() {
	var selector = "#obj86911";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86911_onTap_runningActionsCount = obj86911_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86911_onTap_runningActionsCount = window.obj86911_onTap_runningActionsCount - 1;
if (window.obj86911_onTap_runningActionsCount < 0) {
	window.obj86911_onTap_runningActionsCount = 0;
} else if (window.obj86911_onTap_runningActionsCount == 0) {
	obj86911_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86913(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86911_onTap_runningActionsCount = window.obj86911_onTap_runningActionsCount - 1;
if (window.obj86911_onTap_runningActionsCount < 0) {
	window.obj86911_onTap_runningActionsCount = 0;
} else if (window.obj86911_onTap_runningActionsCount == 0) {
	obj86911_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86911_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86911_onTap_activeActionGroupIndex = -1;
		$("#obj86911").trigger("obj86911_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86911) {
				console.warn("de-queueing event obj86911." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86911").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86911_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86916
(function(){
	window.obj86911_onTap_runningActionsCount = obj86911_onTap_runningActionsCount + 1;

	var selector = "#obj86916";
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
					window.obj86911_onTap_runningActionsCount = window.obj86911_onTap_runningActionsCount - 1;
if (window.obj86911_onTap_runningActionsCount < 0) {
	window.obj86911_onTap_runningActionsCount = 0;
} else if (window.obj86911_onTap_runningActionsCount == 0) {
	obj86911_onTap_actionGroup2();
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
				window.obj86911_onTap_runningActionsCount = window.obj86911_onTap_runningActionsCount - 1;
if (window.obj86911_onTap_runningActionsCount < 0) {
	window.obj86911_onTap_runningActionsCount = 0;
} else if (window.obj86911_onTap_runningActionsCount == 0) {
	obj86911_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86911_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86911_onTap_activeActionGroupIndex = -1;
		$("#obj86911").trigger("obj86911_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86911) {
				console.warn("de-queueing event obj86911." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86911").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86911_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86921 
playAudio_86915();
function playAudio_86915() {
	window.obj86911_onTap_runningActionsCount = obj86911_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86921")[0];
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
		    window.obj86911_onTap_runningActionsCount = window.obj86911_onTap_runningActionsCount - 1;
if (window.obj86911_onTap_runningActionsCount < 0) {
	window.obj86911_onTap_runningActionsCount = 0;
} else if (window.obj86911_onTap_runningActionsCount == 0) {
	obj86911_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86911_onTap_runningActionsCount = window.obj86911_onTap_runningActionsCount - 1;
if (window.obj86911_onTap_runningActionsCount < 0) {
	window.obj86911_onTap_runningActionsCount = 0;
} else if (window.obj86911_onTap_runningActionsCount == 0) {
	obj86911_onTap_actionGroup3();
}
	}
}









};
obj86911_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86911_onTap_activeActionGroupIndex = -1;
		$("#obj86911").trigger("obj86911_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86911) {
				console.warn("de-queueing event obj86911." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86911").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86911_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj1149: Event Touch Down
 *
 */
$("#obj1149").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1149_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1149_onTap is still running");
	return;
}
var obj1149_onTap_runningActionsCount = 0;
var obj1149_onTap_loopCount = 0;
obj1149_onTap_actionGroup0();
});










/*
 *
 *   obj1146: Event Touch Down
 *
 */
$("#obj1146").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1146_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1146_onTap is still running");
	return;
}
var obj1146_onTap_runningActionsCount = 0;
var obj1146_onTap_loopCount = 0;
obj1146_onTap_actionGroup0();
});










/*
 *
 *   obj1152: Event Touch Down
 *
 */
$("#obj1152").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1152_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1152_onTap is still running");
	return;
}
var obj1152_onTap_runningActionsCount = 0;
var obj1152_onTap_loopCount = 0;
obj1152_onTap_actionGroup0();
});













































































































































































































































































































/*
 *
 *   obj1229: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1229");
	var winTarget = document.getElementById("obj1229");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1229").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1229_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1229_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1229_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1229_onTouchDown is still running");
	return;
}
var obj1229_onTouchDown_runningActionsCount = 0;
var obj1229_onTouchDown_loopCount = 0;
obj1229_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1229: Event SCActionDragDrop1247_droppedOutsideTargetActions
 *
 */
$("#obj1229").bind("SCActionDragDrop1247_droppedOutsideTargetActions", function(event) {
	if (window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1229_SCActionDragDrop1247_droppedOutsideTargetActions is still running");
	return;
}
var obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_loopCount = 0;
obj1229_SCActionDragDrop1247_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1229: Event droppedInsideTargetActions_6
 *
 */
$("#obj1229").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj1229_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1229_droppedInsideTargetActions_6 is still running");
	return;
}
var obj1229_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_6_loopCount = 0;
obj1229_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj1229: Event droppedInsideTargetActions_5
 *
 */
$("#obj1229").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj1229_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1229_droppedInsideTargetActions_5 is still running");
	return;
}
var obj1229_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_5_loopCount = 0;
obj1229_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj1229: Event droppedInsideTargetActions_4
 *
 */
$("#obj1229").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1229_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1229_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1229_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_4_loopCount = 0;
obj1229_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1229: Event droppedInsideTargetActions_3
 *
 */
$("#obj1229").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1229_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1229_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1229_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_3_loopCount = 0;
obj1229_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1229: Event droppedInsideTargetActions_2
 *
 */
$("#obj1229").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1229_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1229_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1229_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_2_loopCount = 0;
obj1229_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1229: Event droppedInsideTargetActions
 *
 */
$("#obj1229").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1229_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1229_droppedInsideTargetActions is still running");
	return;
}
var obj1229_droppedInsideTargetActions_runningActionsCount = 0;
var obj1229_droppedInsideTargetActions_loopCount = 0;
obj1229_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1235: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1235");
	var winTarget = document.getElementById("obj1235");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1235").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1235_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1235_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1235_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1235_onTouchDown is still running");
	return;
}
var obj1235_onTouchDown_runningActionsCount = 0;
var obj1235_onTouchDown_loopCount = 0;
obj1235_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1235: Event SCActionDragDrop1293_droppedOutsideTargetActions
 *
 */
$("#obj1235").bind("SCActionDragDrop1293_droppedOutsideTargetActions", function(event) {
	if (window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1235_SCActionDragDrop1293_droppedOutsideTargetActions is still running");
	return;
}
var obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_loopCount = 0;
obj1235_SCActionDragDrop1293_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1235: Event droppedInsideTargetActions_6
 *
 */
$("#obj1235").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj1235_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1235_droppedInsideTargetActions_6 is still running");
	return;
}
var obj1235_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_6_loopCount = 0;
obj1235_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj1235: Event droppedInsideTargetActions_5
 *
 */
$("#obj1235").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj1235_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1235_droppedInsideTargetActions_5 is still running");
	return;
}
var obj1235_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_5_loopCount = 0;
obj1235_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj1235: Event droppedInsideTargetActions_4
 *
 */
$("#obj1235").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1235_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1235_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1235_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_4_loopCount = 0;
obj1235_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1235: Event droppedInsideTargetActions_3
 *
 */
$("#obj1235").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1235_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1235_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1235_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_3_loopCount = 0;
obj1235_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1235: Event droppedInsideTargetActions_2
 *
 */
$("#obj1235").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1235_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1235_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1235_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_2_loopCount = 0;
obj1235_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1235: Event droppedInsideTargetActions
 *
 */
$("#obj1235").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1235_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1235_droppedInsideTargetActions is still running");
	return;
}
var obj1235_droppedInsideTargetActions_runningActionsCount = 0;
var obj1235_droppedInsideTargetActions_loopCount = 0;
obj1235_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1231: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1231");
	var winTarget = document.getElementById("obj1231");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1231").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1231_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1231_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1231_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1231_onTouchDown is still running");
	return;
}
var obj1231_onTouchDown_runningActionsCount = 0;
var obj1231_onTouchDown_loopCount = 0;
obj1231_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1231: Event SCActionDragDrop1275_droppedOutsideTargetActions
 *
 */
$("#obj1231").bind("SCActionDragDrop1275_droppedOutsideTargetActions", function(event) {
	if (window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1231_SCActionDragDrop1275_droppedOutsideTargetActions is still running");
	return;
}
var obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_loopCount = 0;
obj1231_SCActionDragDrop1275_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1231: Event droppedInsideTargetActions_6
 *
 */
$("#obj1231").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj1231_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1231_droppedInsideTargetActions_6 is still running");
	return;
}
var obj1231_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_6_loopCount = 0;
obj1231_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj1231: Event droppedInsideTargetActions_5
 *
 */
$("#obj1231").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj1231_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1231_droppedInsideTargetActions_5 is still running");
	return;
}
var obj1231_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_5_loopCount = 0;
obj1231_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj1231: Event droppedInsideTargetActions_4
 *
 */
$("#obj1231").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1231_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1231_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1231_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_4_loopCount = 0;
obj1231_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1231: Event droppedInsideTargetActions_3
 *
 */
$("#obj1231").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1231_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1231_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1231_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_3_loopCount = 0;
obj1231_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1231: Event droppedInsideTargetActions_2
 *
 */
$("#obj1231").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1231_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1231_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1231_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_2_loopCount = 0;
obj1231_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1231: Event droppedInsideTargetActions
 *
 */
$("#obj1231").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1231_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1231_droppedInsideTargetActions is still running");
	return;
}
var obj1231_droppedInsideTargetActions_runningActionsCount = 0;
var obj1231_droppedInsideTargetActions_loopCount = 0;
obj1231_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1237: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1237");
	var winTarget = document.getElementById("obj1237");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1237").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1237_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1237_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1237_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1237_onTouchDown is still running");
	return;
}
var obj1237_onTouchDown_runningActionsCount = 0;
var obj1237_onTouchDown_loopCount = 0;
obj1237_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1237: Event SCActionDragDrop1302_droppedOutsideTargetActions
 *
 */
$("#obj1237").bind("SCActionDragDrop1302_droppedOutsideTargetActions", function(event) {
	if (window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1237_SCActionDragDrop1302_droppedOutsideTargetActions is still running");
	return;
}
var obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_loopCount = 0;
obj1237_SCActionDragDrop1302_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1237: Event droppedInsideTargetActions_6
 *
 */
$("#obj1237").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj1237_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1237_droppedInsideTargetActions_6 is still running");
	return;
}
var obj1237_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_6_loopCount = 0;
obj1237_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj1237: Event droppedInsideTargetActions_5
 *
 */
$("#obj1237").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj1237_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1237_droppedInsideTargetActions_5 is still running");
	return;
}
var obj1237_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_5_loopCount = 0;
obj1237_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj1237: Event droppedInsideTargetActions_4
 *
 */
$("#obj1237").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1237_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1237_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1237_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_4_loopCount = 0;
obj1237_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1237: Event droppedInsideTargetActions_3
 *
 */
$("#obj1237").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1237_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1237_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1237_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_3_loopCount = 0;
obj1237_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1237: Event droppedInsideTargetActions_2
 *
 */
$("#obj1237").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1237_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1237_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1237_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_2_loopCount = 0;
obj1237_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1237: Event droppedInsideTargetActions
 *
 */
$("#obj1237").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1237_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1237_droppedInsideTargetActions is still running");
	return;
}
var obj1237_droppedInsideTargetActions_runningActionsCount = 0;
var obj1237_droppedInsideTargetActions_loopCount = 0;
obj1237_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1233: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1233");
	var winTarget = document.getElementById("obj1233");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1233").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1233_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1233_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1233_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1233_onTouchDown is still running");
	return;
}
var obj1233_onTouchDown_runningActionsCount = 0;
var obj1233_onTouchDown_loopCount = 0;
obj1233_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1233: Event SCActionDragDrop1284_droppedOutsideTargetActions
 *
 */
$("#obj1233").bind("SCActionDragDrop1284_droppedOutsideTargetActions", function(event) {
	if (window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1233_SCActionDragDrop1284_droppedOutsideTargetActions is still running");
	return;
}
var obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_loopCount = 0;
obj1233_SCActionDragDrop1284_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1233: Event droppedInsideTargetActions_6
 *
 */
$("#obj1233").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj1233_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1233_droppedInsideTargetActions_6 is still running");
	return;
}
var obj1233_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_6_loopCount = 0;
obj1233_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj1233: Event droppedInsideTargetActions_5
 *
 */
$("#obj1233").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj1233_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1233_droppedInsideTargetActions_5 is still running");
	return;
}
var obj1233_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_5_loopCount = 0;
obj1233_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj1233: Event droppedInsideTargetActions_4
 *
 */
$("#obj1233").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1233_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1233_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1233_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_4_loopCount = 0;
obj1233_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1233: Event droppedInsideTargetActions_3
 *
 */
$("#obj1233").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1233_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1233_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1233_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_3_loopCount = 0;
obj1233_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1233: Event droppedInsideTargetActions_2
 *
 */
$("#obj1233").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1233_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1233_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1233_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_2_loopCount = 0;
obj1233_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1233: Event droppedInsideTargetActions
 *
 */
$("#obj1233").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1233_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1233_droppedInsideTargetActions is still running");
	return;
}
var obj1233_droppedInsideTargetActions_runningActionsCount = 0;
var obj1233_droppedInsideTargetActions_loopCount = 0;
obj1233_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1239: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1239");
	var winTarget = document.getElementById("obj1239");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1239").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1239_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1239_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1239_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1239_onTouchDown is still running");
	return;
}
var obj1239_onTouchDown_runningActionsCount = 0;
var obj1239_onTouchDown_loopCount = 0;
obj1239_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1239: Event SCActionDragDrop1311_droppedOutsideTargetActions
 *
 */
$("#obj1239").bind("SCActionDragDrop1311_droppedOutsideTargetActions", function(event) {
	if (window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1239_SCActionDragDrop1311_droppedOutsideTargetActions is still running");
	return;
}
var obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_loopCount = 0;
obj1239_SCActionDragDrop1311_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1239: Event droppedInsideTargetActions_6
 *
 */
$("#obj1239").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj1239_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1239_droppedInsideTargetActions_6 is still running");
	return;
}
var obj1239_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_6_loopCount = 0;
obj1239_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj1239: Event droppedInsideTargetActions_5
 *
 */
$("#obj1239").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj1239_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1239_droppedInsideTargetActions_5 is still running");
	return;
}
var obj1239_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_5_loopCount = 0;
obj1239_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj1239: Event droppedInsideTargetActions_4
 *
 */
$("#obj1239").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1239_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1239_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1239_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_4_loopCount = 0;
obj1239_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1239: Event droppedInsideTargetActions_3
 *
 */
$("#obj1239").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1239_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1239_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1239_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_3_loopCount = 0;
obj1239_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1239: Event droppedInsideTargetActions_2
 *
 */
$("#obj1239").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1239_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1239_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1239_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_2_loopCount = 0;
obj1239_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1239: Event droppedInsideTargetActions
 *
 */
$("#obj1239").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1239_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1239_droppedInsideTargetActions is still running");
	return;
}
var obj1239_droppedInsideTargetActions_runningActionsCount = 0;
var obj1239_droppedInsideTargetActions_loopCount = 0;
obj1239_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj65134: Event Touch Down
 *
 */
$("#obj65134").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65134_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65134_onTap is still running");
	return;
}
var obj65134_onTap_runningActionsCount = 0;
var obj65134_onTap_loopCount = 0;
obj65134_onTap_actionGroup0();
});










/*
 *
 *   obj65126: Event Touch Down
 *
 */
$("#obj65126").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65126_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65126_onTap is still running");
	return;
}
var obj65126_onTap_runningActionsCount = 0;
var obj65126_onTap_loopCount = 0;
obj65126_onTap_actionGroup0();
});










/*
 *
 *   obj86916: Event Touch Down
 *
 */
$("#obj86916").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86916_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86916_onTap is still running");
	return;
}
var obj86916_onTap_runningActionsCount = 0;
var obj86916_onTap_loopCount = 0;
obj86916_onTap_actionGroup0();
});










/*
 *
 *   obj86911: Event Touch Down
 *
 */
$("#obj86911").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86911_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86911_onTap is still running");
	return;
}
var obj86911_onTap_runningActionsCount = 0;
var obj86911_onTap_loopCount = 0;
obj86911_onTap_actionGroup0();
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
	
$("#obj1144").trigger('SCEventShow');
$("#obj1149").trigger('SCEventShow');
$("#obj1146").trigger('SCEventShow');
$("#obj1152").trigger('SCEventShow');
$("#obj1169").trigger('SCEventShow');
$("#obj1175").trigger('SCEventShow');
$("#obj1173").trigger('SCEventShow');
$("#obj1171").trigger('SCEventShow');
$("#obj1177").trigger('SCEventShow');
$("#obj1179").trigger('SCEventShow');
$("#obj1181").trigger('SCEventShow');
$("#obj1183").trigger('SCEventShow');
$("#obj1185").trigger('SCEventShow');
$("#obj1209").trigger('SCEventShow');
$("#obj1211").trigger('SCEventShow');
$("#obj1213").trigger('SCEventShow');
$("#obj1215").trigger('SCEventShow');
$("#obj1217").trigger('SCEventShow');
$("#obj1219").trigger('SCEventShow');
$("#obj1221").trigger('SCEventShow');
$("#obj1223").trigger('SCEventShow');
$("#obj1225").trigger('SCEventShow');
$("#obj1227").trigger('SCEventShow');
$("#obj1242").trigger('SCEventShow');
$("#obj1244").trigger('SCEventShow');
$("#obj1254").trigger('SCEventShow');
$("#obj1255").trigger('SCEventShow');
$("#obj1257").trigger('SCEventShow');
$("#obj1259").trigger('SCEventShow');
$("#obj1261").trigger('SCEventShow');
$("#obj1263").trigger('SCEventShow');
$("#obj1265").trigger('SCEventShow');
$("#obj1267").trigger('SCEventShow');
$("#obj1229").trigger('SCEventShow');
$("#obj1235").trigger('SCEventShow');
$("#obj1231").trigger('SCEventShow');
$("#obj1237").trigger('SCEventShow');
$("#obj1233").trigger('SCEventShow');
$("#obj1239").trigger('SCEventShow');
$("#obj65134").trigger('SCEventShow');
$("#obj65126").trigger('SCEventShow');
$("#obj86916").trigger('SCEventShow');
$("#obj86911").trigger('SCEventShow');
$("#obj86921").trigger('SCEventShow');
$("#obj94651").trigger('SCEventShow');
$("#obj65140").trigger('SCEventShow');
	
});