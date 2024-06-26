pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 46639;
pubcoder.page.title = pubcoder.page.title || "165";
pubcoder.page.number = pubcoder.page.number || 165;
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
var obj46928_onTap_activeActionGroupIndex = -1;
var obj46928_onTap_runningActionsCount = 0;
var obj46928_onTap_loopCount = 0;
var obj46925_onTap_activeActionGroupIndex = -1;
var obj46925_onTap_runningActionsCount = 0;
var obj46925_onTap_loopCount = 0;
var obj46921_onTap_activeActionGroupIndex = -1;
var obj46921_onTap_runningActionsCount = 0;
var obj46921_onTap_loopCount = 0;
var obj46824_onDrag_activeActionGroupIndex = -1;
var obj46824_onDrag_runningActionsCount = 0;
var obj46824_onDrag_loopCount = 0;
var obj46824_onTouchDown_activeActionGroupIndex = -1;
var obj46824_onTouchDown_runningActionsCount = 0;
var obj46824_onTouchDown_loopCount = 0;
var obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_loopCount = 0;
var obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_6_loopCount = 0;
var obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_5_loopCount = 0;
var obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_4_loopCount = 0;
var obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_3_loopCount = 0;
var obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_2_loopCount = 0;
var obj46824_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj46824_droppedInsideTargetActions_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_loopCount = 0;
var obj46778_onDrag_activeActionGroupIndex = -1;
var obj46778_onDrag_runningActionsCount = 0;
var obj46778_onDrag_loopCount = 0;
var obj46778_onTouchDown_activeActionGroupIndex = -1;
var obj46778_onTouchDown_runningActionsCount = 0;
var obj46778_onTouchDown_loopCount = 0;
var obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_loopCount = 0;
var obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_6_loopCount = 0;
var obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_5_loopCount = 0;
var obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_4_loopCount = 0;
var obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_3_loopCount = 0;
var obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_2_loopCount = 0;
var obj46778_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj46778_droppedInsideTargetActions_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_loopCount = 0;
var obj47030_onDrag_activeActionGroupIndex = -1;
var obj47030_onDrag_runningActionsCount = 0;
var obj47030_onDrag_loopCount = 0;
var obj47030_onTouchDown_activeActionGroupIndex = -1;
var obj47030_onTouchDown_runningActionsCount = 0;
var obj47030_onTouchDown_loopCount = 0;
var obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_loopCount = 0;
var obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_6_loopCount = 0;
var obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_5_loopCount = 0;
var obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_4_loopCount = 0;
var obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_3_loopCount = 0;
var obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_2_loopCount = 0;
var obj47030_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47030_droppedInsideTargetActions_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_loopCount = 0;
var obj47076_onDrag_activeActionGroupIndex = -1;
var obj47076_onDrag_runningActionsCount = 0;
var obj47076_onDrag_loopCount = 0;
var obj47076_onTouchDown_activeActionGroupIndex = -1;
var obj47076_onTouchDown_runningActionsCount = 0;
var obj47076_onTouchDown_loopCount = 0;
var obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_loopCount = 0;
var obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_6_loopCount = 0;
var obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_5_loopCount = 0;
var obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_4_loopCount = 0;
var obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_3_loopCount = 0;
var obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_2_loopCount = 0;
var obj47076_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47076_droppedInsideTargetActions_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_loopCount = 0;
var obj47122_onDrag_activeActionGroupIndex = -1;
var obj47122_onDrag_runningActionsCount = 0;
var obj47122_onDrag_loopCount = 0;
var obj47122_onTouchDown_activeActionGroupIndex = -1;
var obj47122_onTouchDown_runningActionsCount = 0;
var obj47122_onTouchDown_loopCount = 0;
var obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_loopCount = 0;
var obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_6_loopCount = 0;
var obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_5_loopCount = 0;
var obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_4_loopCount = 0;
var obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_3_loopCount = 0;
var obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_2_loopCount = 0;
var obj47122_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47122_droppedInsideTargetActions_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_loopCount = 0;
var obj47168_onDrag_activeActionGroupIndex = -1;
var obj47168_onDrag_runningActionsCount = 0;
var obj47168_onDrag_loopCount = 0;
var obj47168_onTouchDown_activeActionGroupIndex = -1;
var obj47168_onTouchDown_runningActionsCount = 0;
var obj47168_onTouchDown_loopCount = 0;
var obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_loopCount = 0;
var obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_6_loopCount = 0;
var obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_5_loopCount = 0;
var obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_4_loopCount = 0;
var obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_3_loopCount = 0;
var obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_2_loopCount = 0;
var obj47168_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47168_droppedInsideTargetActions_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_loopCount = 0;
var obj67646_onTap_activeActionGroupIndex = -1;
var obj67646_onTap_runningActionsCount = 0;
var obj67646_onTap_loopCount = 0;
var obj67638_onTap_activeActionGroupIndex = -1;
var obj67638_onTap_runningActionsCount = 0;
var obj67638_onTap_loopCount = 0;
var obj88861_onTap_activeActionGroupIndex = -1;
var obj88861_onTap_runningActionsCount = 0;
var obj88861_onTap_loopCount = 0;
var obj88856_onTap_activeActionGroupIndex = -1;
var obj88856_onTap_runningActionsCount = 0;
var obj88856_onTap_loopCount = 0;
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
		
obj46928_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46928_onTap_activeActionGroupIndex = -1;
		$("#obj46928").trigger("obj46928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46928) {
				console.warn("de-queueing event obj46928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46928_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46930();
function goToPage_46930() {
	window.obj46928_onTap_runningActionsCount = obj46928_onTap_runningActionsCount + 1;
	$("#anchor970")[0].click();
	window.obj46928_onTap_runningActionsCount = window.obj46928_onTap_runningActionsCount - 1;
if (window.obj46928_onTap_runningActionsCount < 0) {
	window.obj46928_onTap_runningActionsCount = 0;
} else if (window.obj46928_onTap_runningActionsCount == 0) {
	obj46928_onTap_actionGroup1();
}
}





















};
obj46928_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46928_onTap_activeActionGroupIndex = -1;
		$("#obj46928").trigger("obj46928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46928) {
				console.warn("de-queueing event obj46928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46928_onTap_activeActionGroupIndex = 1;
	





















};
obj46925_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46925_onTap_activeActionGroupIndex = -1;
		$("#obj46925").trigger("obj46925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46925) {
				console.warn("de-queueing event obj46925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46925_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46927();
function goToPage_46927() {
	window.obj46925_onTap_runningActionsCount = obj46925_onTap_runningActionsCount + 1;
	$("#anchor971")[0].click();
	window.obj46925_onTap_runningActionsCount = window.obj46925_onTap_runningActionsCount - 1;
if (window.obj46925_onTap_runningActionsCount < 0) {
	window.obj46925_onTap_runningActionsCount = 0;
} else if (window.obj46925_onTap_runningActionsCount == 0) {
	obj46925_onTap_actionGroup1();
}
}





















};
obj46925_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46925_onTap_activeActionGroupIndex = -1;
		$("#obj46925").trigger("obj46925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46925) {
				console.warn("de-queueing event obj46925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46925_onTap_activeActionGroupIndex = 1;
	





















};
obj46921_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46921_onTap_activeActionGroupIndex = -1;
		$("#obj46921").trigger("obj46921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46921) {
				console.warn("de-queueing event obj46921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46921_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46923();
function goToPage_46923() {
	window.obj46921_onTap_runningActionsCount = obj46921_onTap_runningActionsCount + 1;
	$("#anchor972")[0].click();
	window.obj46921_onTap_runningActionsCount = window.obj46921_onTap_runningActionsCount - 1;
if (window.obj46921_onTap_runningActionsCount < 0) {
	window.obj46921_onTap_runningActionsCount = 0;
} else if (window.obj46921_onTap_runningActionsCount == 0) {
	obj46921_onTap_actionGroup1();
}
}





















};
obj46921_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46921_onTap_activeActionGroupIndex = -1;
		$("#obj46921").trigger("obj46921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46921) {
				console.warn("de-queueing event obj46921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46921_onTap_activeActionGroupIndex = 1;
	





















};
obj46824_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj46824");
//	action: dragDrop
//	target: obj46824 
dragDrop_46827();
function dragDrop_46827() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj46824_onTouchDown_runningActionsCount = obj46824_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj46824');
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
	  	containerNode = $('#obj46913');
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
    	window.obj46824_onTouchDown_runningActionsCount = window.obj46824_onTouchDown_runningActionsCount - 1;
if (window.obj46824_onTouchDown_runningActionsCount < 0) {
	window.obj46824_onTouchDown_runningActionsCount = 0;
} else if (window.obj46824_onTouchDown_runningActionsCount == 0) {
	obj46824_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46905","#obj46901","#obj46872","#obj46907","#obj46903","#obj46899");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_46827 = false;
    	var dropped_id_46827;
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
					dropped_46827 = true;
					dropped_id_46827 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_46827) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj46824").trigger('SCActionDragDrop46827_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj46824_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46824_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj46824 
move_92707();
function move_92707() {
	window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_runningActionsCount = obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46824");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_runningActionsCount = window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj46824_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47020();
function runjs_47020() {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = obj46824_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46899").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj46824_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46887 
hide_46863();
function hide_46863() {
	var selector = "#obj46887";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = obj46824_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46863(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46824_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_46864();
function switchText_46864() {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = obj46824_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj46824 
move_46865();
function move_46865() {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = obj46824_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj46824");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj46824_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47021();
function runjs_47021() {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = obj46824_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46899").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj46824_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46887
(function(){
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = obj46824_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj46887";
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
					window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46824_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_46868();
function playAudio_46868() {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = obj46824_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj46824_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_46869();
function switchText_46869() {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = obj46824_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_6_runningActionsCount = window.obj46824_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj46824_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47012();
function runjs_47012() {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = obj46824_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46903").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj46824_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46891 
hide_47013();
function hide_47013() {
	var selector = "#obj46891";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = obj46824_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47013(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46824_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47014();
function switchText_47014() {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = obj46824_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj46824 
move_47015();
function move_47015() {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = obj46824_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj46824");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj46824_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47016();
function runjs_47016() {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = obj46824_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46903").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj46824_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46891
(function(){
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = obj46824_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj46891";
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
					window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46824_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47018();
function playAudio_47018() {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = obj46824_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj46824_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47019();
function switchText_47019() {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = obj46824_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_5_runningActionsCount = window.obj46824_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj46824_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47010();
function runjs_47010() {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = obj46824_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46907").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj46824_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46895 
hide_46845();
function hide_46845() {
	var selector = "#obj46895";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = obj46824_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46845(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46824_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_46846();
function switchText_46846() {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = obj46824_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj46824 
move_46847();
function move_46847() {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = obj46824_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj46824");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj46824_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47011();
function runjs_47011() {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = obj46824_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46907").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj46824_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46895
(function(){
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = obj46824_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj46895";
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
					window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46824_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_46850();
function playAudio_46850() {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = obj46824_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj46824_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_46851();
function switchText_46851() {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = obj46824_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_4_runningActionsCount = window.obj46824_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj46824_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_46841();
function switchText_46841() {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = obj46824_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_3_runningActionsCount = window.obj46824_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_3_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_3_runningActionsCount = window.obj46824_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47009();
function runjs_47009() {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = obj46824_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46872").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj46824_droppedInsideTargetActions_3_runningActionsCount = window.obj46824_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj46824_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46870 
hide_46840();
function hide_46840() {
	var selector = "#obj46870";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = obj46824_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46824_droppedInsideTargetActions_3_runningActionsCount = window.obj46824_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46840(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46824_droppedInsideTargetActions_3_runningActionsCount = window.obj46824_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46824_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_46842();
function playAudio_46842() {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = obj46824_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj46824_droppedInsideTargetActions_3_runningActionsCount = window.obj46824_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46824_droppedInsideTargetActions_3_runningActionsCount = window.obj46824_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj46824_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93290();
function switchText_93290() {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = obj46824_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_3_runningActionsCount = window.obj46824_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_3_runningActionsCount = window.obj46824_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj46824_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_46836();
function switchText_46836() {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = obj46824_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_2_runningActionsCount = window.obj46824_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_2_runningActionsCount = window.obj46824_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47008();
function runjs_47008() {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = obj46824_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46901").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj46824_droppedInsideTargetActions_2_runningActionsCount = window.obj46824_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj46824_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46889 
hide_46835();
function hide_46835() {
	var selector = "#obj46889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = obj46824_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46824_droppedInsideTargetActions_2_runningActionsCount = window.obj46824_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46835(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46824_droppedInsideTargetActions_2_runningActionsCount = window.obj46824_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46824_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_46837();
function playAudio_46837() {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = obj46824_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj46824_droppedInsideTargetActions_2_runningActionsCount = window.obj46824_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46824_droppedInsideTargetActions_2_runningActionsCount = window.obj46824_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj46824_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93289();
function switchText_93289() {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = obj46824_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_2_runningActionsCount = window.obj46824_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_2_runningActionsCount = window.obj46824_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj46824_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_46831();
function switchText_46831() {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = obj46824_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_runningActionsCount = window.obj46824_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_runningActionsCount = window.obj46824_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47000();
function runjs_47000() {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = obj46824_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46905").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj46824_droppedInsideTargetActions_runningActionsCount = window.obj46824_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj46824_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46893 
hide_46830();
function hide_46830() {
	var selector = "#obj46893";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46824_droppedInsideTargetActions_runningActionsCount = obj46824_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46824_droppedInsideTargetActions_runningActionsCount = window.obj46824_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46830(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46824_droppedInsideTargetActions_runningActionsCount = window.obj46824_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46824_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_46832();
function playAudio_46832() {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = obj46824_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj46824_droppedInsideTargetActions_runningActionsCount = window.obj46824_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46824_droppedInsideTargetActions_runningActionsCount = window.obj46824_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj46824_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93288();
function switchText_93288() {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = obj46824_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46824_droppedInsideTargetActions_runningActionsCount = window.obj46824_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46824_droppedInsideTargetActions_runningActionsCount = window.obj46824_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46824_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj46824_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46824").trigger("obj46824_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46824) {
				console.warn("de-queueing event obj46824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46824_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj46778_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj46778");
//	action: dragDrop
//	target: obj46778 
dragDrop_46781();
function dragDrop_46781() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj46778_onTouchDown_runningActionsCount = obj46778_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj46778');
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
	  	containerNode = $('#obj46913');
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
    	window.obj46778_onTouchDown_runningActionsCount = window.obj46778_onTouchDown_runningActionsCount - 1;
if (window.obj46778_onTouchDown_runningActionsCount < 0) {
	window.obj46778_onTouchDown_runningActionsCount = 0;
} else if (window.obj46778_onTouchDown_runningActionsCount == 0) {
	obj46778_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46907","#obj46903","#obj46899","#obj46905","#obj46901","#obj46872");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_46781 = false;
    	var dropped_id_46781;
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
					dropped_46781 = true;
					dropped_id_46781 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_46781) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj46778").trigger('SCActionDragDrop46781_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj46778_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46778_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj46778 
move_92705();
function move_92705() {
	window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_runningActionsCount = obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46778");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_runningActionsCount = window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj46778_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47028();
function runjs_47028() {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = obj46778_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46872").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj46778_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46870 
hide_46817();
function hide_46817() {
	var selector = "#obj46870";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = obj46778_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46817(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46778_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_46818();
function switchText_46818() {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = obj46778_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj46778 
move_46819();
function move_46819() {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = obj46778_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj46778");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj46778_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47029();
function runjs_47029() {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = obj46778_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46872").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj46778_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46870
(function(){
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = obj46778_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj46870";
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
					window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46778_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_46822();
function playAudio_46822() {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = obj46778_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj46778_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_46823();
function switchText_46823() {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = obj46778_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_6_runningActionsCount = window.obj46778_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj46778_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47026();
function runjs_47026() {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = obj46778_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46901").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj46778_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46889 
hide_46808();
function hide_46808() {
	var selector = "#obj46889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = obj46778_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46808(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46778_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_46809();
function switchText_46809() {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = obj46778_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj46778 
move_46810();
function move_46810() {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = obj46778_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj46778");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj46778_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47027();
function runjs_47027() {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = obj46778_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46901").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj46778_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46889
(function(){
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = obj46778_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj46889";
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
					window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46778_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_46813();
function playAudio_46813() {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = obj46778_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj46778_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_46814();
function switchText_46814() {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = obj46778_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_5_runningActionsCount = window.obj46778_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj46778_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47024();
function runjs_47024() {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = obj46778_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46905").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj46778_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46893 
hide_46799();
function hide_46799() {
	var selector = "#obj46893";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = obj46778_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46799(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46778_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_46800();
function switchText_46800() {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = obj46778_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj46778 
move_46801();
function move_46801() {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = obj46778_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj46778");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj46778_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47025();
function runjs_47025() {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = obj46778_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46905").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj46778_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46893
(function(){
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = obj46778_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj46893";
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
					window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46778_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_46804();
function playAudio_46804() {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = obj46778_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj46778_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_46805();
function switchText_46805() {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = obj46778_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_4_runningActionsCount = window.obj46778_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj46778_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_46795();
function switchText_46795() {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = obj46778_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_3_runningActionsCount = window.obj46778_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_3_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_3_runningActionsCount = window.obj46778_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47023();
function runjs_47023() {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = obj46778_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46899").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj46778_droppedInsideTargetActions_3_runningActionsCount = window.obj46778_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj46778_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46887 
hide_46794();
function hide_46794() {
	var selector = "#obj46887";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = obj46778_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46778_droppedInsideTargetActions_3_runningActionsCount = window.obj46778_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46794(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46778_droppedInsideTargetActions_3_runningActionsCount = window.obj46778_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46778_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_46796();
function playAudio_46796() {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = obj46778_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj46778_droppedInsideTargetActions_3_runningActionsCount = window.obj46778_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46778_droppedInsideTargetActions_3_runningActionsCount = window.obj46778_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj46778_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93287();
function switchText_93287() {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = obj46778_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_3_runningActionsCount = window.obj46778_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_3_runningActionsCount = window.obj46778_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj46778_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_46790();
function switchText_46790() {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = obj46778_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_2_runningActionsCount = window.obj46778_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_2_runningActionsCount = window.obj46778_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47022();
function runjs_47022() {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = obj46778_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46903").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj46778_droppedInsideTargetActions_2_runningActionsCount = window.obj46778_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj46778_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46891 
hide_46789();
function hide_46789() {
	var selector = "#obj46891";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = obj46778_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46778_droppedInsideTargetActions_2_runningActionsCount = window.obj46778_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46789(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46778_droppedInsideTargetActions_2_runningActionsCount = window.obj46778_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46778_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_46791();
function playAudio_46791() {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = obj46778_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj46778_droppedInsideTargetActions_2_runningActionsCount = window.obj46778_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46778_droppedInsideTargetActions_2_runningActionsCount = window.obj46778_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj46778_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93286();
function switchText_93286() {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = obj46778_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_2_runningActionsCount = window.obj46778_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_2_runningActionsCount = window.obj46778_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj46778_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_46785();
function switchText_46785() {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = obj46778_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_runningActionsCount = window.obj46778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_runningActionsCount = window.obj46778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47007();
function runjs_47007() {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = obj46778_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46907").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj46778_droppedInsideTargetActions_runningActionsCount = window.obj46778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj46778_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46895 
hide_46784();
function hide_46784() {
	var selector = "#obj46895";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46778_droppedInsideTargetActions_runningActionsCount = obj46778_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46778_droppedInsideTargetActions_runningActionsCount = window.obj46778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46784(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46778_droppedInsideTargetActions_runningActionsCount = window.obj46778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46778_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_46786();
function playAudio_46786() {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = obj46778_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj46778_droppedInsideTargetActions_runningActionsCount = window.obj46778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46778_droppedInsideTargetActions_runningActionsCount = window.obj46778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj46778_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90585();
function switchText_90585() {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = obj46778_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj46778_droppedInsideTargetActions_runningActionsCount = window.obj46778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46778_droppedInsideTargetActions_runningActionsCount = window.obj46778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46778_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj46778_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46778").trigger("obj46778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46778) {
				console.warn("de-queueing event obj46778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46778_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj47030_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47030");
//	action: dragDrop
//	target: obj47030 
dragDrop_47033();
function dragDrop_47033() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47030_onTouchDown_runningActionsCount = obj47030_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47030');
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
	  	containerNode = $('#obj46913');
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
    	window.obj47030_onTouchDown_runningActionsCount = window.obj47030_onTouchDown_runningActionsCount - 1;
if (window.obj47030_onTouchDown_runningActionsCount < 0) {
	window.obj47030_onTouchDown_runningActionsCount = 0;
} else if (window.obj47030_onTouchDown_runningActionsCount == 0) {
	obj47030_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46905","#obj46901","#obj46872","#obj46907","#obj46903","#obj46899");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47033 = false;
    	var dropped_id_47033;
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
					dropped_47033 = true;
					dropped_id_47033 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47033) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47030").trigger('SCActionDragDrop47033_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47030_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47030_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47030 
move_92711();
function move_92711() {
	window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_runningActionsCount = obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47030");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_runningActionsCount = window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47030_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47068();
function runjs_47068() {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = obj47030_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46899").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj47030_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46887 
hide_47069();
function hide_47069() {
	var selector = "#obj46887";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = obj47030_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47069(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47030_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47070();
function switchText_47070() {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = obj47030_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47030 
move_47071();
function move_47071() {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = obj47030_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj47030");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj47030_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47072();
function runjs_47072() {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = obj47030_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46899").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj47030_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46887
(function(){
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = obj47030_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj46887";
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
					window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47030_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47074();
function playAudio_47074() {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = obj47030_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj47030_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47075();
function switchText_47075() {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = obj47030_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_6_runningActionsCount = window.obj47030_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj47030_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47059();
function runjs_47059() {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = obj47030_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46903").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj47030_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46891 
hide_47060();
function hide_47060() {
	var selector = "#obj46891";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = obj47030_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47060(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47030_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47061();
function switchText_47061() {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = obj47030_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47030 
move_47062();
function move_47062() {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = obj47030_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj47030");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj47030_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47063();
function runjs_47063() {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = obj47030_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46903").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj47030_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46891
(function(){
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = obj47030_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj46891";
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
					window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47030_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47065();
function playAudio_47065() {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = obj47030_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj47030_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47066();
function switchText_47066() {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = obj47030_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_5_runningActionsCount = window.obj47030_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj47030_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47050();
function runjs_47050() {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = obj47030_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46907").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj47030_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46895 
hide_47051();
function hide_47051() {
	var selector = "#obj46895";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = obj47030_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47051(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47030_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47052();
function switchText_47052() {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = obj47030_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47030 
move_47053();
function move_47053() {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = obj47030_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj47030");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj47030_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47054();
function runjs_47054() {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = obj47030_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46907").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj47030_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46895
(function(){
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = obj47030_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj46895";
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
					window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47030_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47056();
function playAudio_47056() {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = obj47030_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj47030_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47057();
function switchText_47057() {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = obj47030_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_4_runningActionsCount = window.obj47030_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj47030_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47047();
function switchText_47047() {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = obj47030_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_3_runningActionsCount = window.obj47030_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_3_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_3_runningActionsCount = window.obj47030_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47045();
function runjs_47045() {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = obj47030_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46872").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47030_droppedInsideTargetActions_3_runningActionsCount = window.obj47030_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47030_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46870 
hide_47046();
function hide_47046() {
	var selector = "#obj46870";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = obj47030_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47030_droppedInsideTargetActions_3_runningActionsCount = window.obj47030_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47046(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47030_droppedInsideTargetActions_3_runningActionsCount = window.obj47030_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47030_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47048();
function playAudio_47048() {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = obj47030_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47030_droppedInsideTargetActions_3_runningActionsCount = window.obj47030_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47030_droppedInsideTargetActions_3_runningActionsCount = window.obj47030_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj47030_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93302();
function switchText_93302() {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = obj47030_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_3_runningActionsCount = window.obj47030_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_3_runningActionsCount = window.obj47030_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj47030_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47042();
function switchText_47042() {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = obj47030_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_2_runningActionsCount = window.obj47030_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_2_runningActionsCount = window.obj47030_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47040();
function runjs_47040() {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = obj47030_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46901").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47030_droppedInsideTargetActions_2_runningActionsCount = window.obj47030_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47030_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46889 
hide_47041();
function hide_47041() {
	var selector = "#obj46889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = obj47030_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47030_droppedInsideTargetActions_2_runningActionsCount = window.obj47030_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47041(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47030_droppedInsideTargetActions_2_runningActionsCount = window.obj47030_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47030_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47043();
function playAudio_47043() {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = obj47030_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47030_droppedInsideTargetActions_2_runningActionsCount = window.obj47030_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47030_droppedInsideTargetActions_2_runningActionsCount = window.obj47030_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj47030_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93301();
function switchText_93301() {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = obj47030_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_2_runningActionsCount = window.obj47030_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_2_runningActionsCount = window.obj47030_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj47030_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47037();
function switchText_47037() {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = obj47030_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_runningActionsCount = window.obj47030_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_runningActionsCount = window.obj47030_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47035();
function runjs_47035() {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = obj47030_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46905").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47030_droppedInsideTargetActions_runningActionsCount = window.obj47030_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47030_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46893 
hide_47036();
function hide_47036() {
	var selector = "#obj46893";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47030_droppedInsideTargetActions_runningActionsCount = obj47030_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47030_droppedInsideTargetActions_runningActionsCount = window.obj47030_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47036(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47030_droppedInsideTargetActions_runningActionsCount = window.obj47030_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47030_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47038();
function playAudio_47038() {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = obj47030_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47030_droppedInsideTargetActions_runningActionsCount = window.obj47030_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47030_droppedInsideTargetActions_runningActionsCount = window.obj47030_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj47030_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93300();
function switchText_93300() {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = obj47030_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47030_droppedInsideTargetActions_runningActionsCount = window.obj47030_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47030_droppedInsideTargetActions_runningActionsCount = window.obj47030_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47030_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47030_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47030_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47030_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj47030_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47030").trigger("obj47030_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47030) {
				console.warn("de-queueing event obj47030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47030_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj47076_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47076");
//	action: dragDrop
//	target: obj47076 
dragDrop_47079();
function dragDrop_47079() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47076_onTouchDown_runningActionsCount = obj47076_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47076');
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
	  	containerNode = $('#obj46913');
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
    	window.obj47076_onTouchDown_runningActionsCount = window.obj47076_onTouchDown_runningActionsCount - 1;
if (window.obj47076_onTouchDown_runningActionsCount < 0) {
	window.obj47076_onTouchDown_runningActionsCount = 0;
} else if (window.obj47076_onTouchDown_runningActionsCount == 0) {
	obj47076_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46905","#obj46901","#obj46872","#obj46907","#obj46903","#obj46899");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47079 = false;
    	var dropped_id_47079;
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
					dropped_47079 = true;
					dropped_id_47079 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47079) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47076").trigger('SCActionDragDrop47079_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47076_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47076_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47076 
move_92713();
function move_92713() {
	window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_runningActionsCount = obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47076");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_runningActionsCount = window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47076_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47114();
function runjs_47114() {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = obj47076_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46899").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj47076_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46887 
hide_47115();
function hide_47115() {
	var selector = "#obj46887";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = obj47076_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47115(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47076_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47116();
function switchText_47116() {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = obj47076_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47076 
move_47117();
function move_47117() {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = obj47076_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj47076");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj47076_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47118();
function runjs_47118() {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = obj47076_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46899").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj47076_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46887
(function(){
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = obj47076_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj46887";
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
					window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47076_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47120();
function playAudio_47120() {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = obj47076_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj47076_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47121();
function switchText_47121() {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = obj47076_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_6_runningActionsCount = window.obj47076_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj47076_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47105();
function runjs_47105() {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = obj47076_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46903").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj47076_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46891 
hide_47106();
function hide_47106() {
	var selector = "#obj46891";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = obj47076_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47106(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47076_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47107();
function switchText_47107() {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = obj47076_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47076 
move_47108();
function move_47108() {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = obj47076_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj47076");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj47076_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47109();
function runjs_47109() {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = obj47076_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46903").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj47076_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46891
(function(){
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = obj47076_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj46891";
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
					window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47076_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47111();
function playAudio_47111() {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = obj47076_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj47076_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47112();
function switchText_47112() {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = obj47076_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_5_runningActionsCount = window.obj47076_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj47076_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47096();
function runjs_47096() {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = obj47076_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46907").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj47076_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46895 
hide_47097();
function hide_47097() {
	var selector = "#obj46895";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = obj47076_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47097(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47076_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47098();
function switchText_47098() {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = obj47076_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47076 
move_47099();
function move_47099() {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = obj47076_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj47076");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj47076_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47100();
function runjs_47100() {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = obj47076_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46907").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj47076_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46895
(function(){
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = obj47076_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj46895";
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
					window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47076_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47102();
function playAudio_47102() {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = obj47076_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj47076_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47103();
function switchText_47103() {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = obj47076_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_4_runningActionsCount = window.obj47076_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj47076_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47093();
function switchText_47093() {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = obj47076_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_3_runningActionsCount = window.obj47076_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_3_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_3_runningActionsCount = window.obj47076_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47091();
function runjs_47091() {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = obj47076_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46872").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47076_droppedInsideTargetActions_3_runningActionsCount = window.obj47076_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47076_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46870 
hide_47092();
function hide_47092() {
	var selector = "#obj46870";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = obj47076_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47076_droppedInsideTargetActions_3_runningActionsCount = window.obj47076_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47092(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47076_droppedInsideTargetActions_3_runningActionsCount = window.obj47076_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47076_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47094();
function playAudio_47094() {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = obj47076_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47076_droppedInsideTargetActions_3_runningActionsCount = window.obj47076_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47076_droppedInsideTargetActions_3_runningActionsCount = window.obj47076_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj47076_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93305();
function switchText_93305() {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = obj47076_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_3_runningActionsCount = window.obj47076_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_3_runningActionsCount = window.obj47076_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj47076_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47088();
function switchText_47088() {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = obj47076_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_2_runningActionsCount = window.obj47076_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_2_runningActionsCount = window.obj47076_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47086();
function runjs_47086() {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = obj47076_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46901").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47076_droppedInsideTargetActions_2_runningActionsCount = window.obj47076_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47076_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46889 
hide_47087();
function hide_47087() {
	var selector = "#obj46889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = obj47076_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47076_droppedInsideTargetActions_2_runningActionsCount = window.obj47076_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47087(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47076_droppedInsideTargetActions_2_runningActionsCount = window.obj47076_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47076_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47089();
function playAudio_47089() {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = obj47076_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47076_droppedInsideTargetActions_2_runningActionsCount = window.obj47076_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47076_droppedInsideTargetActions_2_runningActionsCount = window.obj47076_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj47076_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93304();
function switchText_93304() {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = obj47076_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_2_runningActionsCount = window.obj47076_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_2_runningActionsCount = window.obj47076_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj47076_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47083();
function switchText_47083() {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = obj47076_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_runningActionsCount = window.obj47076_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_runningActionsCount = window.obj47076_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47081();
function runjs_47081() {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = obj47076_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46905").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47076_droppedInsideTargetActions_runningActionsCount = window.obj47076_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47076_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46893 
hide_47082();
function hide_47082() {
	var selector = "#obj46893";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47076_droppedInsideTargetActions_runningActionsCount = obj47076_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47076_droppedInsideTargetActions_runningActionsCount = window.obj47076_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47082(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47076_droppedInsideTargetActions_runningActionsCount = window.obj47076_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47076_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47084();
function playAudio_47084() {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = obj47076_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47076_droppedInsideTargetActions_runningActionsCount = window.obj47076_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47076_droppedInsideTargetActions_runningActionsCount = window.obj47076_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj47076_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93303();
function switchText_93303() {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = obj47076_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47076_droppedInsideTargetActions_runningActionsCount = window.obj47076_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47076_droppedInsideTargetActions_runningActionsCount = window.obj47076_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47076_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47076_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47076_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47076_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj47076_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47076").trigger("obj47076_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47076) {
				console.warn("de-queueing event obj47076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47076_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj47122_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47122");
//	action: dragDrop
//	target: obj47122 
dragDrop_47125();
function dragDrop_47125() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47122_onTouchDown_runningActionsCount = obj47122_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47122');
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
	  	containerNode = $('#obj46913');
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
    	window.obj47122_onTouchDown_runningActionsCount = window.obj47122_onTouchDown_runningActionsCount - 1;
if (window.obj47122_onTouchDown_runningActionsCount < 0) {
	window.obj47122_onTouchDown_runningActionsCount = 0;
} else if (window.obj47122_onTouchDown_runningActionsCount == 0) {
	obj47122_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46907","#obj46903","#obj46899","#obj46905","#obj46901","#obj46872");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47125 = false;
    	var dropped_id_47125;
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
					dropped_47125 = true;
					dropped_id_47125 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47125) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47122").trigger('SCActionDragDrop47125_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47122_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47122_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47122 
move_92715();
function move_92715() {
	window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_runningActionsCount = obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47122");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_runningActionsCount = window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47122_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47160();
function runjs_47160() {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = obj47122_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46872").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj47122_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46870 
hide_47161();
function hide_47161() {
	var selector = "#obj46870";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = obj47122_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47161(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47122_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47162();
function switchText_47162() {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = obj47122_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47122 
move_47163();
function move_47163() {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = obj47122_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj47122");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj47122_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47164();
function runjs_47164() {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = obj47122_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46872").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj47122_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46870
(function(){
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = obj47122_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj46870";
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
					window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47122_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47166();
function playAudio_47166() {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = obj47122_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj47122_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47167();
function switchText_47167() {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = obj47122_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_6_runningActionsCount = window.obj47122_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj47122_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47151();
function runjs_47151() {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = obj47122_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46901").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj47122_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46889 
hide_47152();
function hide_47152() {
	var selector = "#obj46889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = obj47122_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47152(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47122_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47153();
function switchText_47153() {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = obj47122_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47122 
move_47154();
function move_47154() {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = obj47122_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj47122");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj47122_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47155();
function runjs_47155() {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = obj47122_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46901").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj47122_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46889
(function(){
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = obj47122_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj46889";
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
					window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47122_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47157();
function playAudio_47157() {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = obj47122_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj47122_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47158();
function switchText_47158() {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = obj47122_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_5_runningActionsCount = window.obj47122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj47122_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47142();
function runjs_47142() {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = obj47122_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46905").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj47122_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46893 
hide_47143();
function hide_47143() {
	var selector = "#obj46893";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = obj47122_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47143(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47122_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47144();
function switchText_47144() {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = obj47122_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47122 
move_47145();
function move_47145() {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = obj47122_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj47122");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj47122_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47146();
function runjs_47146() {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = obj47122_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46905").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj47122_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46893
(function(){
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = obj47122_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj46893";
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
					window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47122_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47148();
function playAudio_47148() {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = obj47122_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj47122_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47149();
function switchText_47149() {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = obj47122_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_4_runningActionsCount = window.obj47122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj47122_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47139();
function switchText_47139() {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = obj47122_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_3_runningActionsCount = window.obj47122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_3_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_3_runningActionsCount = window.obj47122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47137();
function runjs_47137() {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = obj47122_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46899").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47122_droppedInsideTargetActions_3_runningActionsCount = window.obj47122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47122_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46887 
hide_47138();
function hide_47138() {
	var selector = "#obj46887";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = obj47122_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47122_droppedInsideTargetActions_3_runningActionsCount = window.obj47122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47138(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47122_droppedInsideTargetActions_3_runningActionsCount = window.obj47122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47122_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47140();
function playAudio_47140() {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = obj47122_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47122_droppedInsideTargetActions_3_runningActionsCount = window.obj47122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47122_droppedInsideTargetActions_3_runningActionsCount = window.obj47122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj47122_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93308();
function switchText_93308() {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = obj47122_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_3_runningActionsCount = window.obj47122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_3_runningActionsCount = window.obj47122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj47122_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47134();
function switchText_47134() {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = obj47122_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_2_runningActionsCount = window.obj47122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_2_runningActionsCount = window.obj47122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47132();
function runjs_47132() {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = obj47122_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46903").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47122_droppedInsideTargetActions_2_runningActionsCount = window.obj47122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47122_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46891 
hide_47133();
function hide_47133() {
	var selector = "#obj46891";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = obj47122_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47122_droppedInsideTargetActions_2_runningActionsCount = window.obj47122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47133(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47122_droppedInsideTargetActions_2_runningActionsCount = window.obj47122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47122_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47135();
function playAudio_47135() {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = obj47122_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47122_droppedInsideTargetActions_2_runningActionsCount = window.obj47122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47122_droppedInsideTargetActions_2_runningActionsCount = window.obj47122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj47122_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93307();
function switchText_93307() {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = obj47122_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_2_runningActionsCount = window.obj47122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_2_runningActionsCount = window.obj47122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj47122_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47129();
function switchText_47129() {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = obj47122_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_runningActionsCount = window.obj47122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_runningActionsCount = window.obj47122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47127();
function runjs_47127() {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = obj47122_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46907").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47122_droppedInsideTargetActions_runningActionsCount = window.obj47122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47122_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46895 
hide_47128();
function hide_47128() {
	var selector = "#obj46895";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47122_droppedInsideTargetActions_runningActionsCount = obj47122_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47122_droppedInsideTargetActions_runningActionsCount = window.obj47122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47128(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47122_droppedInsideTargetActions_runningActionsCount = window.obj47122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47122_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47130();
function playAudio_47130() {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = obj47122_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47122_droppedInsideTargetActions_runningActionsCount = window.obj47122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47122_droppedInsideTargetActions_runningActionsCount = window.obj47122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj47122_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93306();
function switchText_93306() {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = obj47122_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47122_droppedInsideTargetActions_runningActionsCount = window.obj47122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47122_droppedInsideTargetActions_runningActionsCount = window.obj47122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47122_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj47122_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47122").trigger("obj47122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47122) {
				console.warn("de-queueing event obj47122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47122_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj47168_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47168");
//	action: dragDrop
//	target: obj47168 
dragDrop_47171();
function dragDrop_47171() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47168_onTouchDown_runningActionsCount = obj47168_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47168');
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
	  	containerNode = $('#obj46913');
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
    	window.obj47168_onTouchDown_runningActionsCount = window.obj47168_onTouchDown_runningActionsCount - 1;
if (window.obj47168_onTouchDown_runningActionsCount < 0) {
	window.obj47168_onTouchDown_runningActionsCount = 0;
} else if (window.obj47168_onTouchDown_runningActionsCount == 0) {
	obj47168_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46907","#obj46903","#obj46899","#obj46905","#obj46901","#obj46872");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47171 = false;
    	var dropped_id_47171;
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
					dropped_47171 = true;
					dropped_id_47171 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47171) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47168").trigger('SCActionDragDrop47171_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47168_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47168_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47168 
move_92709();
function move_92709() {
	window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_runningActionsCount = obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47168");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_runningActionsCount = window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47168_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47206();
function runjs_47206() {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = obj47168_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46872").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj47168_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46870 
hide_47207();
function hide_47207() {
	var selector = "#obj46870";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = obj47168_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47207(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47168_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47208();
function switchText_47208() {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = obj47168_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47168 
move_47209();
function move_47209() {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = obj47168_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj47168");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj47168_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47210();
function runjs_47210() {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = obj47168_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj46872").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj47168_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46870
(function(){
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = obj47168_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj46870";
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
					window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47168_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47212();
function playAudio_47212() {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = obj47168_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj47168_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47213();
function switchText_47213() {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = obj47168_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_6_runningActionsCount = window.obj47168_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj47168_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47197();
function runjs_47197() {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = obj47168_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46901").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj47168_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46889 
hide_47198();
function hide_47198() {
	var selector = "#obj46889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = obj47168_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47198(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47168_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47199();
function switchText_47199() {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = obj47168_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47168 
move_47200();
function move_47200() {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = obj47168_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj47168");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj47168_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47201();
function runjs_47201() {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = obj47168_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj46901").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj47168_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46889
(function(){
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = obj47168_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj46889";
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
					window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47168_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47203();
function playAudio_47203() {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = obj47168_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj47168_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47204();
function switchText_47204() {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = obj47168_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_5_runningActionsCount = window.obj47168_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj47168_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47188();
function runjs_47188() {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = obj47168_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46905").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj47168_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj46893 
hide_47189();
function hide_47189() {
	var selector = "#obj46893";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = obj47168_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47189(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47168_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47190();
function switchText_47190() {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = obj47168_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47168 
move_47191();
function move_47191() {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = obj47168_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj47168");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj47168_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47192();
function runjs_47192() {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = obj47168_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj46905").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj47168_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj46893
(function(){
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = obj47168_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj46893";
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
					window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47168_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj46877 
playAudio_47194();
function playAudio_47194() {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = obj47168_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj46877")[0];
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
		    window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj47168_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47195();
function switchText_47195() {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = obj47168_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_4_runningActionsCount = window.obj47168_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj47168_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47185();
function switchText_47185() {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = obj47168_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_3_runningActionsCount = window.obj47168_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_3_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_3_runningActionsCount = window.obj47168_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47183();
function runjs_47183() {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = obj47168_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46899").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47168_droppedInsideTargetActions_3_runningActionsCount = window.obj47168_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47168_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46887 
hide_47184();
function hide_47184() {
	var selector = "#obj46887";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = obj47168_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47168_droppedInsideTargetActions_3_runningActionsCount = window.obj47168_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47184(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47168_droppedInsideTargetActions_3_runningActionsCount = window.obj47168_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47168_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47186();
function playAudio_47186() {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = obj47168_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47168_droppedInsideTargetActions_3_runningActionsCount = window.obj47168_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47168_droppedInsideTargetActions_3_runningActionsCount = window.obj47168_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj47168_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93299();
function switchText_93299() {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = obj47168_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_3_runningActionsCount = window.obj47168_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_3_runningActionsCount = window.obj47168_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj47168_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47180();
function switchText_47180() {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = obj47168_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_2_runningActionsCount = window.obj47168_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_2_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_2_runningActionsCount = window.obj47168_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47178();
function runjs_47178() {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = obj47168_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46903").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47168_droppedInsideTargetActions_2_runningActionsCount = window.obj47168_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47168_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46891 
hide_47179();
function hide_47179() {
	var selector = "#obj46891";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = obj47168_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47168_droppedInsideTargetActions_2_runningActionsCount = window.obj47168_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47179(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47168_droppedInsideTargetActions_2_runningActionsCount = window.obj47168_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47168_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47181();
function playAudio_47181() {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = obj47168_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47168_droppedInsideTargetActions_2_runningActionsCount = window.obj47168_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47168_droppedInsideTargetActions_2_runningActionsCount = window.obj47168_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj47168_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93298();
function switchText_93298() {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = obj47168_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_2_runningActionsCount = window.obj47168_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_2_runningActionsCount = window.obj47168_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj47168_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_47175();
function switchText_47175() {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = obj47168_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_runningActionsCount = window.obj47168_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_runningActionsCount = window.obj47168_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47173();
function runjs_47173() {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = obj47168_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46907").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj47168_droppedInsideTargetActions_runningActionsCount = window.obj47168_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47168_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46895 
hide_47174();
function hide_47174() {
	var selector = "#obj46895";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47168_droppedInsideTargetActions_runningActionsCount = obj47168_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47168_droppedInsideTargetActions_runningActionsCount = window.obj47168_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47174(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47168_droppedInsideTargetActions_runningActionsCount = window.obj47168_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47168_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj46879 
playAudio_47176();
function playAudio_47176() {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = obj47168_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46879")[0];
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
		    window.obj47168_droppedInsideTargetActions_runningActionsCount = window.obj47168_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47168_droppedInsideTargetActions_runningActionsCount = window.obj47168_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj47168_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_93297();
function switchText_93297() {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = obj47168_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46881_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46881_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46881").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46881_content");
			setTimeout(function () {
				window.obj47168_droppedInsideTargetActions_runningActionsCount = window.obj47168_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46881 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47168_droppedInsideTargetActions_runningActionsCount = window.obj47168_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47168_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47168_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47168_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47168_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj47168_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47168").trigger("obj47168_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47168) {
				console.warn("de-queueing event obj47168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47168_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj67646_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67646_onTap_activeActionGroupIndex = -1;
		$("#obj67646").trigger("obj67646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67646) {
				console.warn("de-queueing event obj67646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67646_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67646 
hide_67649();
function hide_67649() {
	var selector = "#obj67646";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67646_onTap_runningActionsCount = obj67646_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67646_onTap_runningActionsCount = window.obj67646_onTap_runningActionsCount - 1;
if (window.obj67646_onTap_runningActionsCount < 0) {
	window.obj67646_onTap_runningActionsCount = 0;
} else if (window.obj67646_onTap_runningActionsCount == 0) {
	obj67646_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67649(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67646_onTap_runningActionsCount = window.obj67646_onTap_runningActionsCount - 1;
if (window.obj67646_onTap_runningActionsCount < 0) {
	window.obj67646_onTap_runningActionsCount = 0;
} else if (window.obj67646_onTap_runningActionsCount == 0) {
	obj67646_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67652 
stopMovie_67648();
function stopMovie_67648() {
	window.obj67646_onTap_runningActionsCount = obj67646_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67652")[0];
	myVideo.pause();
	window.obj67646_onTap_runningActionsCount = window.obj67646_onTap_runningActionsCount - 1;
if (window.obj67646_onTap_runningActionsCount < 0) {
	window.obj67646_onTap_runningActionsCount = 0;
} else if (window.obj67646_onTap_runningActionsCount == 0) {
	obj67646_onTap_actionGroup1();
}
}
















};
obj67646_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67646_onTap_activeActionGroupIndex = -1;
		$("#obj67646").trigger("obj67646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67646) {
				console.warn("de-queueing event obj67646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67646_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67638
(function(){
	window.obj67646_onTap_runningActionsCount = obj67646_onTap_runningActionsCount + 1;

	var selector = "#obj67638";
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
					window.obj67646_onTap_runningActionsCount = window.obj67646_onTap_runningActionsCount - 1;
if (window.obj67646_onTap_runningActionsCount < 0) {
	window.obj67646_onTap_runningActionsCount = 0;
} else if (window.obj67646_onTap_runningActionsCount == 0) {
	obj67646_onTap_actionGroup2();
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
				window.obj67646_onTap_runningActionsCount = window.obj67646_onTap_runningActionsCount - 1;
if (window.obj67646_onTap_runningActionsCount < 0) {
	window.obj67646_onTap_runningActionsCount = 0;
} else if (window.obj67646_onTap_runningActionsCount == 0) {
	obj67646_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67646_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67646_onTap_activeActionGroupIndex = -1;
		$("#obj67646").trigger("obj67646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67646) {
				console.warn("de-queueing event obj67646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67646_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67652 
move_67651();
function move_67651() {
	window.obj67646_onTap_runningActionsCount = obj67646_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67652");
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
			window.obj67646_onTap_runningActionsCount = window.obj67646_onTap_runningActionsCount - 1;
if (window.obj67646_onTap_runningActionsCount < 0) {
	window.obj67646_onTap_runningActionsCount = 0;
} else if (window.obj67646_onTap_runningActionsCount == 0) {
	obj67646_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67646_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67646_onTap_activeActionGroupIndex = -1;
		$("#obj67646").trigger("obj67646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67646) {
				console.warn("de-queueing event obj67646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67646_onTap_activeActionGroupIndex = 3;
	





















};
obj67638_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67638_onTap_activeActionGroupIndex = -1;
		$("#obj67638").trigger("obj67638_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67638) {
				console.warn("de-queueing event obj67638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67638_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67638 
hide_67641();
function hide_67641() {
	var selector = "#obj67638";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67638_onTap_runningActionsCount = obj67638_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67638_onTap_runningActionsCount = window.obj67638_onTap_runningActionsCount - 1;
if (window.obj67638_onTap_runningActionsCount < 0) {
	window.obj67638_onTap_runningActionsCount = 0;
} else if (window.obj67638_onTap_runningActionsCount == 0) {
	obj67638_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67641(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67638_onTap_runningActionsCount = window.obj67638_onTap_runningActionsCount - 1;
if (window.obj67638_onTap_runningActionsCount < 0) {
	window.obj67638_onTap_runningActionsCount = 0;
} else if (window.obj67638_onTap_runningActionsCount == 0) {
	obj67638_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67652 
playPauseMovie_67640();
function playPauseMovie_67640() {
	window.obj67638_onTap_runningActionsCount = obj67638_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67652")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67638_onTap_runningActionsCount = window.obj67638_onTap_runningActionsCount - 1;
if (window.obj67638_onTap_runningActionsCount < 0) {
	window.obj67638_onTap_runningActionsCount = 0;
} else if (window.obj67638_onTap_runningActionsCount == 0) {
	obj67638_onTap_actionGroup1();
}
}

















};
obj67638_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67638_onTap_activeActionGroupIndex = -1;
		$("#obj67638").trigger("obj67638_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67638) {
				console.warn("de-queueing event obj67638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67638_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67646
(function(){
	window.obj67638_onTap_runningActionsCount = obj67638_onTap_runningActionsCount + 1;

	var selector = "#obj67646";
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
					window.obj67638_onTap_runningActionsCount = window.obj67638_onTap_runningActionsCount - 1;
if (window.obj67638_onTap_runningActionsCount < 0) {
	window.obj67638_onTap_runningActionsCount = 0;
} else if (window.obj67638_onTap_runningActionsCount == 0) {
	obj67638_onTap_actionGroup2();
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
				window.obj67638_onTap_runningActionsCount = window.obj67638_onTap_runningActionsCount - 1;
if (window.obj67638_onTap_runningActionsCount < 0) {
	window.obj67638_onTap_runningActionsCount = 0;
} else if (window.obj67638_onTap_runningActionsCount == 0) {
	obj67638_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67638_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67638_onTap_activeActionGroupIndex = -1;
		$("#obj67638").trigger("obj67638_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67638) {
				console.warn("de-queueing event obj67638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67638_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67652 
move_67643();
function move_67643() {
	window.obj67638_onTap_runningActionsCount = obj67638_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67652");
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
			window.obj67638_onTap_runningActionsCount = window.obj67638_onTap_runningActionsCount - 1;
if (window.obj67638_onTap_runningActionsCount < 0) {
	window.obj67638_onTap_runningActionsCount = 0;
} else if (window.obj67638_onTap_runningActionsCount == 0) {
	obj67638_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67638_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67638_onTap_activeActionGroupIndex = -1;
		$("#obj67638").trigger("obj67638_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67638) {
				console.warn("de-queueing event obj67638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67638_onTap_activeActionGroupIndex = 3;
	





















};
obj88861_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88861_onTap_activeActionGroupIndex = -1;
		$("#obj88861").trigger("obj88861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88861) {
				console.warn("de-queueing event obj88861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88861_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88866 
stopAudio_88863();
function stopAudio_88863() {
	window.obj88861_onTap_runningActionsCount = obj88861_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88866")[0];
	myAudio.pause();
	window.obj88861_onTap_runningActionsCount = window.obj88861_onTap_runningActionsCount - 1;
if (window.obj88861_onTap_runningActionsCount < 0) {
	window.obj88861_onTap_runningActionsCount = 0;
} else if (window.obj88861_onTap_runningActionsCount == 0) {
	obj88861_onTap_actionGroup1();
}
}








};
obj88861_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88861_onTap_activeActionGroupIndex = -1;
		$("#obj88861").trigger("obj88861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88861) {
				console.warn("de-queueing event obj88861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88861_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88861 
hide_88864();
function hide_88864() {
	var selector = "#obj88861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88861_onTap_runningActionsCount = obj88861_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88861_onTap_runningActionsCount = window.obj88861_onTap_runningActionsCount - 1;
if (window.obj88861_onTap_runningActionsCount < 0) {
	window.obj88861_onTap_runningActionsCount = 0;
} else if (window.obj88861_onTap_runningActionsCount == 0) {
	obj88861_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88864(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88861_onTap_runningActionsCount = window.obj88861_onTap_runningActionsCount - 1;
if (window.obj88861_onTap_runningActionsCount < 0) {
	window.obj88861_onTap_runningActionsCount = 0;
} else if (window.obj88861_onTap_runningActionsCount == 0) {
	obj88861_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88861_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88861_onTap_activeActionGroupIndex = -1;
		$("#obj88861").trigger("obj88861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88861) {
				console.warn("de-queueing event obj88861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88861_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88856
(function(){
	window.obj88861_onTap_runningActionsCount = obj88861_onTap_runningActionsCount + 1;

	var selector = "#obj88856";
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
					window.obj88861_onTap_runningActionsCount = window.obj88861_onTap_runningActionsCount - 1;
if (window.obj88861_onTap_runningActionsCount < 0) {
	window.obj88861_onTap_runningActionsCount = 0;
} else if (window.obj88861_onTap_runningActionsCount == 0) {
	obj88861_onTap_actionGroup3();
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
				window.obj88861_onTap_runningActionsCount = window.obj88861_onTap_runningActionsCount - 1;
if (window.obj88861_onTap_runningActionsCount < 0) {
	window.obj88861_onTap_runningActionsCount = 0;
} else if (window.obj88861_onTap_runningActionsCount == 0) {
	obj88861_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88861_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88861_onTap_activeActionGroupIndex = -1;
		$("#obj88861").trigger("obj88861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88861) {
				console.warn("de-queueing event obj88861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88861_onTap_activeActionGroupIndex = 3;
	





















};
obj88856_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88856_onTap_activeActionGroupIndex = -1;
		$("#obj88856").trigger("obj88856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88856) {
				console.warn("de-queueing event obj88856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88856_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88856 
hide_88858();
function hide_88858() {
	var selector = "#obj88856";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88856_onTap_runningActionsCount = obj88856_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88856_onTap_runningActionsCount = window.obj88856_onTap_runningActionsCount - 1;
if (window.obj88856_onTap_runningActionsCount < 0) {
	window.obj88856_onTap_runningActionsCount = 0;
} else if (window.obj88856_onTap_runningActionsCount == 0) {
	obj88856_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88858(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88856_onTap_runningActionsCount = window.obj88856_onTap_runningActionsCount - 1;
if (window.obj88856_onTap_runningActionsCount < 0) {
	window.obj88856_onTap_runningActionsCount = 0;
} else if (window.obj88856_onTap_runningActionsCount == 0) {
	obj88856_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88856_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88856_onTap_activeActionGroupIndex = -1;
		$("#obj88856").trigger("obj88856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88856) {
				console.warn("de-queueing event obj88856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88856_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88861
(function(){
	window.obj88856_onTap_runningActionsCount = obj88856_onTap_runningActionsCount + 1;

	var selector = "#obj88861";
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
					window.obj88856_onTap_runningActionsCount = window.obj88856_onTap_runningActionsCount - 1;
if (window.obj88856_onTap_runningActionsCount < 0) {
	window.obj88856_onTap_runningActionsCount = 0;
} else if (window.obj88856_onTap_runningActionsCount == 0) {
	obj88856_onTap_actionGroup2();
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
				window.obj88856_onTap_runningActionsCount = window.obj88856_onTap_runningActionsCount - 1;
if (window.obj88856_onTap_runningActionsCount < 0) {
	window.obj88856_onTap_runningActionsCount = 0;
} else if (window.obj88856_onTap_runningActionsCount == 0) {
	obj88856_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88856_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88856_onTap_activeActionGroupIndex = -1;
		$("#obj88856").trigger("obj88856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88856) {
				console.warn("de-queueing event obj88856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88856_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88866 
playAudio_88860();
function playAudio_88860() {
	window.obj88856_onTap_runningActionsCount = obj88856_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88866")[0];
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
		    window.obj88856_onTap_runningActionsCount = window.obj88856_onTap_runningActionsCount - 1;
if (window.obj88856_onTap_runningActionsCount < 0) {
	window.obj88856_onTap_runningActionsCount = 0;
} else if (window.obj88856_onTap_runningActionsCount == 0) {
	obj88856_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88856_onTap_runningActionsCount = window.obj88856_onTap_runningActionsCount - 1;
if (window.obj88856_onTap_runningActionsCount < 0) {
	window.obj88856_onTap_runningActionsCount = 0;
} else if (window.obj88856_onTap_runningActionsCount == 0) {
	obj88856_onTap_actionGroup3();
}
	}
}









};
obj88856_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88856_onTap_activeActionGroupIndex = -1;
		$("#obj88856").trigger("obj88856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88856) {
				console.warn("de-queueing event obj88856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88856_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj46928: Event Touch Down
 *
 */
$("#obj46928").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46928_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46928_onTap is still running");
	return;
}
var obj46928_onTap_runningActionsCount = 0;
var obj46928_onTap_loopCount = 0;
obj46928_onTap_actionGroup0();
});










/*
 *
 *   obj46925: Event Touch Down
 *
 */
$("#obj46925").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46925_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46925_onTap is still running");
	return;
}
var obj46925_onTap_runningActionsCount = 0;
var obj46925_onTap_loopCount = 0;
obj46925_onTap_actionGroup0();
});










/*
 *
 *   obj46921: Event Touch Down
 *
 */
$("#obj46921").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46921_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46921_onTap is still running");
	return;
}
var obj46921_onTap_runningActionsCount = 0;
var obj46921_onTap_loopCount = 0;
obj46921_onTap_actionGroup0();
});





































































































































































































































































/*
 *
 *   obj46824: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj46824");
	var winTarget = document.getElementById("obj46824");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj46824").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj46824_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj46824_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj46824_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46824_onTouchDown is still running");
	return;
}
var obj46824_onTouchDown_runningActionsCount = 0;
var obj46824_onTouchDown_loopCount = 0;
obj46824_onTouchDown_actionGroup0();
});



/*
 *
 *   obj46824: Event SCActionDragDrop46827_droppedOutsideTargetActions
 *
 */
$("#obj46824").bind("SCActionDragDrop46827_droppedOutsideTargetActions", function(event) {
	if (window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46824_SCActionDragDrop46827_droppedOutsideTargetActions is still running");
	return;
}
var obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_loopCount = 0;
obj46824_SCActionDragDrop46827_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj46824: Event droppedInsideTargetActions_6
 *
 */
$("#obj46824").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj46824_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46824_droppedInsideTargetActions_6 is still running");
	return;
}
var obj46824_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_6_loopCount = 0;
obj46824_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj46824: Event droppedInsideTargetActions_5
 *
 */
$("#obj46824").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj46824_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46824_droppedInsideTargetActions_5 is still running");
	return;
}
var obj46824_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_5_loopCount = 0;
obj46824_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj46824: Event droppedInsideTargetActions_4
 *
 */
$("#obj46824").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj46824_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46824_droppedInsideTargetActions_4 is still running");
	return;
}
var obj46824_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_4_loopCount = 0;
obj46824_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj46824: Event droppedInsideTargetActions_3
 *
 */
$("#obj46824").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj46824_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46824_droppedInsideTargetActions_3 is still running");
	return;
}
var obj46824_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_3_loopCount = 0;
obj46824_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj46824: Event droppedInsideTargetActions_2
 *
 */
$("#obj46824").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj46824_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46824_droppedInsideTargetActions_2 is still running");
	return;
}
var obj46824_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_2_loopCount = 0;
obj46824_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj46824: Event droppedInsideTargetActions
 *
 */
$("#obj46824").bind("droppedInsideTargetActions", function(event) {
	if (window.obj46824_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46824_droppedInsideTargetActions is still running");
	return;
}
var obj46824_droppedInsideTargetActions_runningActionsCount = 0;
var obj46824_droppedInsideTargetActions_loopCount = 0;
obj46824_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj46778: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj46778");
	var winTarget = document.getElementById("obj46778");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj46778").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj46778_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj46778_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj46778_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46778_onTouchDown is still running");
	return;
}
var obj46778_onTouchDown_runningActionsCount = 0;
var obj46778_onTouchDown_loopCount = 0;
obj46778_onTouchDown_actionGroup0();
});



/*
 *
 *   obj46778: Event SCActionDragDrop46781_droppedOutsideTargetActions
 *
 */
$("#obj46778").bind("SCActionDragDrop46781_droppedOutsideTargetActions", function(event) {
	if (window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46778_SCActionDragDrop46781_droppedOutsideTargetActions is still running");
	return;
}
var obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_loopCount = 0;
obj46778_SCActionDragDrop46781_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj46778: Event droppedInsideTargetActions_6
 *
 */
$("#obj46778").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj46778_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46778_droppedInsideTargetActions_6 is still running");
	return;
}
var obj46778_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_6_loopCount = 0;
obj46778_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj46778: Event droppedInsideTargetActions_5
 *
 */
$("#obj46778").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj46778_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46778_droppedInsideTargetActions_5 is still running");
	return;
}
var obj46778_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_5_loopCount = 0;
obj46778_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj46778: Event droppedInsideTargetActions_4
 *
 */
$("#obj46778").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj46778_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46778_droppedInsideTargetActions_4 is still running");
	return;
}
var obj46778_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_4_loopCount = 0;
obj46778_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj46778: Event droppedInsideTargetActions_3
 *
 */
$("#obj46778").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj46778_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46778_droppedInsideTargetActions_3 is still running");
	return;
}
var obj46778_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_3_loopCount = 0;
obj46778_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj46778: Event droppedInsideTargetActions_2
 *
 */
$("#obj46778").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj46778_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46778_droppedInsideTargetActions_2 is still running");
	return;
}
var obj46778_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_2_loopCount = 0;
obj46778_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj46778: Event droppedInsideTargetActions
 *
 */
$("#obj46778").bind("droppedInsideTargetActions", function(event) {
	if (window.obj46778_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46778_droppedInsideTargetActions is still running");
	return;
}
var obj46778_droppedInsideTargetActions_runningActionsCount = 0;
var obj46778_droppedInsideTargetActions_loopCount = 0;
obj46778_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj47030: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47030");
	var winTarget = document.getElementById("obj47030");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47030").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47030_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47030_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47030_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47030_onTouchDown is still running");
	return;
}
var obj47030_onTouchDown_runningActionsCount = 0;
var obj47030_onTouchDown_loopCount = 0;
obj47030_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47030: Event SCActionDragDrop47033_droppedOutsideTargetActions
 *
 */
$("#obj47030").bind("SCActionDragDrop47033_droppedOutsideTargetActions", function(event) {
	if (window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47030_SCActionDragDrop47033_droppedOutsideTargetActions is still running");
	return;
}
var obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_loopCount = 0;
obj47030_SCActionDragDrop47033_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47030: Event droppedInsideTargetActions_6
 *
 */
$("#obj47030").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj47030_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47030_droppedInsideTargetActions_6 is still running");
	return;
}
var obj47030_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_6_loopCount = 0;
obj47030_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj47030: Event droppedInsideTargetActions_5
 *
 */
$("#obj47030").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj47030_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47030_droppedInsideTargetActions_5 is still running");
	return;
}
var obj47030_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_5_loopCount = 0;
obj47030_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj47030: Event droppedInsideTargetActions_4
 *
 */
$("#obj47030").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj47030_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47030_droppedInsideTargetActions_4 is still running");
	return;
}
var obj47030_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_4_loopCount = 0;
obj47030_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj47030: Event droppedInsideTargetActions_3
 *
 */
$("#obj47030").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47030_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47030_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47030_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_3_loopCount = 0;
obj47030_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47030: Event droppedInsideTargetActions_2
 *
 */
$("#obj47030").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47030_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47030_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47030_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_2_loopCount = 0;
obj47030_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47030: Event droppedInsideTargetActions
 *
 */
$("#obj47030").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47030_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47030_droppedInsideTargetActions is still running");
	return;
}
var obj47030_droppedInsideTargetActions_runningActionsCount = 0;
var obj47030_droppedInsideTargetActions_loopCount = 0;
obj47030_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj47076: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47076");
	var winTarget = document.getElementById("obj47076");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47076").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47076_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47076_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47076_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47076_onTouchDown is still running");
	return;
}
var obj47076_onTouchDown_runningActionsCount = 0;
var obj47076_onTouchDown_loopCount = 0;
obj47076_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47076: Event SCActionDragDrop47079_droppedOutsideTargetActions
 *
 */
$("#obj47076").bind("SCActionDragDrop47079_droppedOutsideTargetActions", function(event) {
	if (window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47076_SCActionDragDrop47079_droppedOutsideTargetActions is still running");
	return;
}
var obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_loopCount = 0;
obj47076_SCActionDragDrop47079_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47076: Event droppedInsideTargetActions_6
 *
 */
$("#obj47076").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj47076_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47076_droppedInsideTargetActions_6 is still running");
	return;
}
var obj47076_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_6_loopCount = 0;
obj47076_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj47076: Event droppedInsideTargetActions_5
 *
 */
$("#obj47076").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj47076_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47076_droppedInsideTargetActions_5 is still running");
	return;
}
var obj47076_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_5_loopCount = 0;
obj47076_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj47076: Event droppedInsideTargetActions_4
 *
 */
$("#obj47076").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj47076_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47076_droppedInsideTargetActions_4 is still running");
	return;
}
var obj47076_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_4_loopCount = 0;
obj47076_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj47076: Event droppedInsideTargetActions_3
 *
 */
$("#obj47076").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47076_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47076_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47076_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_3_loopCount = 0;
obj47076_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47076: Event droppedInsideTargetActions_2
 *
 */
$("#obj47076").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47076_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47076_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47076_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_2_loopCount = 0;
obj47076_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47076: Event droppedInsideTargetActions
 *
 */
$("#obj47076").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47076_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47076_droppedInsideTargetActions is still running");
	return;
}
var obj47076_droppedInsideTargetActions_runningActionsCount = 0;
var obj47076_droppedInsideTargetActions_loopCount = 0;
obj47076_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj47122: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47122");
	var winTarget = document.getElementById("obj47122");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47122").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47122_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47122_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47122_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47122_onTouchDown is still running");
	return;
}
var obj47122_onTouchDown_runningActionsCount = 0;
var obj47122_onTouchDown_loopCount = 0;
obj47122_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47122: Event SCActionDragDrop47125_droppedOutsideTargetActions
 *
 */
$("#obj47122").bind("SCActionDragDrop47125_droppedOutsideTargetActions", function(event) {
	if (window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47122_SCActionDragDrop47125_droppedOutsideTargetActions is still running");
	return;
}
var obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_loopCount = 0;
obj47122_SCActionDragDrop47125_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47122: Event droppedInsideTargetActions_6
 *
 */
$("#obj47122").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj47122_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47122_droppedInsideTargetActions_6 is still running");
	return;
}
var obj47122_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_6_loopCount = 0;
obj47122_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj47122: Event droppedInsideTargetActions_5
 *
 */
$("#obj47122").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj47122_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47122_droppedInsideTargetActions_5 is still running");
	return;
}
var obj47122_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_5_loopCount = 0;
obj47122_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj47122: Event droppedInsideTargetActions_4
 *
 */
$("#obj47122").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj47122_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47122_droppedInsideTargetActions_4 is still running");
	return;
}
var obj47122_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_4_loopCount = 0;
obj47122_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj47122: Event droppedInsideTargetActions_3
 *
 */
$("#obj47122").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47122_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47122_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47122_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_3_loopCount = 0;
obj47122_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47122: Event droppedInsideTargetActions_2
 *
 */
$("#obj47122").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47122_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47122_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47122_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_2_loopCount = 0;
obj47122_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47122: Event droppedInsideTargetActions
 *
 */
$("#obj47122").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47122_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47122_droppedInsideTargetActions is still running");
	return;
}
var obj47122_droppedInsideTargetActions_runningActionsCount = 0;
var obj47122_droppedInsideTargetActions_loopCount = 0;
obj47122_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj47168: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47168");
	var winTarget = document.getElementById("obj47168");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47168").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47168_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47168_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47168_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47168_onTouchDown is still running");
	return;
}
var obj47168_onTouchDown_runningActionsCount = 0;
var obj47168_onTouchDown_loopCount = 0;
obj47168_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47168: Event SCActionDragDrop47171_droppedOutsideTargetActions
 *
 */
$("#obj47168").bind("SCActionDragDrop47171_droppedOutsideTargetActions", function(event) {
	if (window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47168_SCActionDragDrop47171_droppedOutsideTargetActions is still running");
	return;
}
var obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_loopCount = 0;
obj47168_SCActionDragDrop47171_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47168: Event droppedInsideTargetActions_6
 *
 */
$("#obj47168").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj47168_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47168_droppedInsideTargetActions_6 is still running");
	return;
}
var obj47168_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_6_loopCount = 0;
obj47168_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj47168: Event droppedInsideTargetActions_5
 *
 */
$("#obj47168").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj47168_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47168_droppedInsideTargetActions_5 is still running");
	return;
}
var obj47168_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_5_loopCount = 0;
obj47168_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj47168: Event droppedInsideTargetActions_4
 *
 */
$("#obj47168").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj47168_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47168_droppedInsideTargetActions_4 is still running");
	return;
}
var obj47168_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_4_loopCount = 0;
obj47168_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj47168: Event droppedInsideTargetActions_3
 *
 */
$("#obj47168").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47168_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47168_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47168_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_3_loopCount = 0;
obj47168_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47168: Event droppedInsideTargetActions_2
 *
 */
$("#obj47168").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47168_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47168_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47168_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_2_loopCount = 0;
obj47168_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47168: Event droppedInsideTargetActions
 *
 */
$("#obj47168").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47168_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47168_droppedInsideTargetActions is still running");
	return;
}
var obj47168_droppedInsideTargetActions_runningActionsCount = 0;
var obj47168_droppedInsideTargetActions_loopCount = 0;
obj47168_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67646: Event Touch Down
 *
 */
$("#obj67646").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67646_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67646_onTap is still running");
	return;
}
var obj67646_onTap_runningActionsCount = 0;
var obj67646_onTap_loopCount = 0;
obj67646_onTap_actionGroup0();
});










/*
 *
 *   obj67638: Event Touch Down
 *
 */
$("#obj67638").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67638_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67638_onTap is still running");
	return;
}
var obj67638_onTap_runningActionsCount = 0;
var obj67638_onTap_loopCount = 0;
obj67638_onTap_actionGroup0();
});










/*
 *
 *   obj88861: Event Touch Down
 *
 */
$("#obj88861").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88861_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88861_onTap is still running");
	return;
}
var obj88861_onTap_runningActionsCount = 0;
var obj88861_onTap_loopCount = 0;
obj88861_onTap_actionGroup0();
});










/*
 *
 *   obj88856: Event Touch Down
 *
 */
$("#obj88856").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88856_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88856_onTap is still running");
	return;
}
var obj88856_onTap_runningActionsCount = 0;
var obj88856_onTap_loopCount = 0;
obj88856_onTap_actionGroup0();
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
	
$("#obj46944").trigger('SCEventShow');
$("#obj46928").trigger('SCEventShow');
$("#obj46925").trigger('SCEventShow');
$("#obj46921").trigger('SCEventShow');
$("#obj46919").trigger('SCEventShow');
$("#obj46917").trigger('SCEventShow');
$("#obj46915").trigger('SCEventShow');
$("#obj46913").trigger('SCEventShow');
$("#obj46911").trigger('SCEventShow');
$("#obj46909").trigger('SCEventShow');
$("#obj46907").trigger('SCEventShow');
$("#obj46905").trigger('SCEventShow');
$("#obj46903").trigger('SCEventShow');
$("#obj46901").trigger('SCEventShow');
$("#obj46899").trigger('SCEventShow');
$("#obj46897").trigger('SCEventShow');
$("#obj46895").trigger('SCEventShow');
$("#obj46893").trigger('SCEventShow');
$("#obj46891").trigger('SCEventShow');
$("#obj46889").trigger('SCEventShow');
$("#obj46887").trigger('SCEventShow');
$("#obj46885").trigger('SCEventShow');
$("#obj46883").trigger('SCEventShow');
$("#obj46881").trigger('SCEventShow');
$("#obj46879").trigger('SCEventShow');
$("#obj46877").trigger('SCEventShow');
$("#obj46872").trigger('SCEventShow');
$("#obj46870").trigger('SCEventShow');
$("#obj46946").trigger('SCEventShow');
$("#obj46824").trigger('SCEventShow');
$("#obj46778").trigger('SCEventShow');
$("#obj47030").trigger('SCEventShow');
$("#obj47076").trigger('SCEventShow');
$("#obj47122").trigger('SCEventShow');
$("#obj47168").trigger('SCEventShow');
$("#obj67646").trigger('SCEventShow');
$("#obj67638").trigger('SCEventShow');
$("#obj88861").trigger('SCEventShow');
$("#obj88856").trigger('SCEventShow');
$("#obj88866").trigger('SCEventShow');
$("#obj94959").trigger('SCEventShow');
$("#obj67652").trigger('SCEventShow');
	
});