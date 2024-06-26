pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 120;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
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
var obj140_onTap_activeActionGroupIndex = -1;
var obj140_onTap_runningActionsCount = 0;
var obj140_onTap_loopCount = 0;
var obj143_onTap_activeActionGroupIndex = -1;
var obj143_onTap_runningActionsCount = 0;
var obj143_onTap_loopCount = 0;
var obj136_onTap_activeActionGroupIndex = -1;
var obj136_onTap_runningActionsCount = 0;
var obj136_onTap_loopCount = 0;
var obj6397_onTap_activeActionGroupIndex = -1;
var obj6397_onTap_runningActionsCount = 0;
var obj6397_onTap_loopCount = 0;
var obj6399_onTap_activeActionGroupIndex = -1;
var obj6399_onTap_runningActionsCount = 0;
var obj6399_onTap_loopCount = 0;
var obj6401_onTap_activeActionGroupIndex = -1;
var obj6401_onTap_runningActionsCount = 0;
var obj6401_onTap_loopCount = 0;
var obj6403_onTap_activeActionGroupIndex = -1;
var obj6403_onTap_runningActionsCount = 0;
var obj6403_onTap_loopCount = 0;
var obj6405_onTap_activeActionGroupIndex = -1;
var obj6405_onTap_runningActionsCount = 0;
var obj6405_onTap_loopCount = 0;
var obj6407_onTap_activeActionGroupIndex = -1;
var obj6407_onTap_runningActionsCount = 0;
var obj6407_onTap_loopCount = 0;
var obj6409_onTap_activeActionGroupIndex = -1;
var obj6409_onTap_runningActionsCount = 0;
var obj6409_onTap_loopCount = 0;
var obj6411_onTap_activeActionGroupIndex = -1;
var obj6411_onTap_runningActionsCount = 0;
var obj6411_onTap_loopCount = 0;
var obj6413_onTap_activeActionGroupIndex = -1;
var obj6413_onTap_runningActionsCount = 0;
var obj6413_onTap_loopCount = 0;
var obj6415_onTap_activeActionGroupIndex = -1;
var obj6415_onTap_runningActionsCount = 0;
var obj6415_onTap_loopCount = 0;
var obj6417_onTap_activeActionGroupIndex = -1;
var obj6417_onTap_runningActionsCount = 0;
var obj6417_onTap_loopCount = 0;
var obj6419_onTap_activeActionGroupIndex = -1;
var obj6419_onTap_runningActionsCount = 0;
var obj6419_onTap_loopCount = 0;
var obj6421_onTap_activeActionGroupIndex = -1;
var obj6421_onTap_runningActionsCount = 0;
var obj6421_onTap_loopCount = 0;
var obj6423_onTap_activeActionGroupIndex = -1;
var obj6423_onTap_runningActionsCount = 0;
var obj6423_onTap_loopCount = 0;
var obj6425_onTap_activeActionGroupIndex = -1;
var obj6425_onTap_runningActionsCount = 0;
var obj6425_onTap_loopCount = 0;
var obj6427_onTap_activeActionGroupIndex = -1;
var obj6427_onTap_runningActionsCount = 0;
var obj6427_onTap_loopCount = 0;
var obj6429_onTap_activeActionGroupIndex = -1;
var obj6429_onTap_runningActionsCount = 0;
var obj6429_onTap_loopCount = 0;
var obj6431_onTap_activeActionGroupIndex = -1;
var obj6431_onTap_runningActionsCount = 0;
var obj6431_onTap_loopCount = 0;
var obj6435_onTap_activeActionGroupIndex = -1;
var obj6435_onTap_runningActionsCount = 0;
var obj6435_onTap_loopCount = 0;
var obj6437_onTap_activeActionGroupIndex = -1;
var obj6437_onTap_runningActionsCount = 0;
var obj6437_onTap_loopCount = 0;
var obj6439_onTap_activeActionGroupIndex = -1;
var obj6439_onTap_runningActionsCount = 0;
var obj6439_onTap_loopCount = 0;
var obj6441_onTap_activeActionGroupIndex = -1;
var obj6441_onTap_runningActionsCount = 0;
var obj6441_onTap_loopCount = 0;
var obj6445_onTap_activeActionGroupIndex = -1;
var obj6445_onTap_runningActionsCount = 0;
var obj6445_onTap_loopCount = 0;
var obj6447_onTap_activeActionGroupIndex = -1;
var obj6447_onTap_runningActionsCount = 0;
var obj6447_onTap_loopCount = 0;
var obj6449_onTap_activeActionGroupIndex = -1;
var obj6449_onTap_runningActionsCount = 0;
var obj6449_onTap_loopCount = 0;
var obj6453_onTap_activeActionGroupIndex = -1;
var obj6453_onTap_runningActionsCount = 0;
var obj6453_onTap_loopCount = 0;
var obj6455_onTap_activeActionGroupIndex = -1;
var obj6455_onTap_runningActionsCount = 0;
var obj6455_onTap_loopCount = 0;
var obj6457_onTap_activeActionGroupIndex = -1;
var obj6457_onTap_runningActionsCount = 0;
var obj6457_onTap_loopCount = 0;
var obj6461_onTap_activeActionGroupIndex = -1;
var obj6461_onTap_runningActionsCount = 0;
var obj6461_onTap_loopCount = 0;
var obj6465_onTap_activeActionGroupIndex = -1;
var obj6465_onTap_runningActionsCount = 0;
var obj6465_onTap_loopCount = 0;
var obj6467_onTap_activeActionGroupIndex = -1;
var obj6467_onTap_runningActionsCount = 0;
var obj6467_onTap_loopCount = 0;
var obj6471_onTap_activeActionGroupIndex = -1;
var obj6471_onTap_runningActionsCount = 0;
var obj6471_onTap_loopCount = 0;
var obj6473_onTap_activeActionGroupIndex = -1;
var obj6473_onTap_runningActionsCount = 0;
var obj6473_onTap_loopCount = 0;
var obj6477_onTap_activeActionGroupIndex = -1;
var obj6477_onTap_runningActionsCount = 0;
var obj6477_onTap_loopCount = 0;
var obj6481_onTap_activeActionGroupIndex = -1;
var obj6481_onTap_runningActionsCount = 0;
var obj6481_onTap_loopCount = 0;
var obj6483_onTap_activeActionGroupIndex = -1;
var obj6483_onTap_runningActionsCount = 0;
var obj6483_onTap_loopCount = 0;
var obj6485_onTap_activeActionGroupIndex = -1;
var obj6485_onTap_runningActionsCount = 0;
var obj6485_onTap_loopCount = 0;
var obj6489_onTap_activeActionGroupIndex = -1;
var obj6489_onTap_runningActionsCount = 0;
var obj6489_onTap_loopCount = 0;
var obj6493_onTap_activeActionGroupIndex = -1;
var obj6493_onTap_runningActionsCount = 0;
var obj6493_onTap_loopCount = 0;
var obj6497_onTap_activeActionGroupIndex = -1;
var obj6497_onTap_runningActionsCount = 0;
var obj6497_onTap_loopCount = 0;
var obj6499_onTap_activeActionGroupIndex = -1;
var obj6499_onTap_runningActionsCount = 0;
var obj6499_onTap_loopCount = 0;
var obj6501_onTap_activeActionGroupIndex = -1;
var obj6501_onTap_runningActionsCount = 0;
var obj6501_onTap_loopCount = 0;
var obj6503_onTap_activeActionGroupIndex = -1;
var obj6503_onTap_runningActionsCount = 0;
var obj6503_onTap_loopCount = 0;
var obj6509_onTap_activeActionGroupIndex = -1;
var obj6509_onTap_runningActionsCount = 0;
var obj6509_onTap_loopCount = 0;
var obj6513_onTap_activeActionGroupIndex = -1;
var obj6513_onTap_runningActionsCount = 0;
var obj6513_onTap_loopCount = 0;
var obj6515_onTap_activeActionGroupIndex = -1;
var obj6515_onTap_runningActionsCount = 0;
var obj6515_onTap_loopCount = 0;
var obj6517_onTap_activeActionGroupIndex = -1;
var obj6517_onTap_runningActionsCount = 0;
var obj6517_onTap_loopCount = 0;
var obj6519_onTap_activeActionGroupIndex = -1;
var obj6519_onTap_runningActionsCount = 0;
var obj6519_onTap_loopCount = 0;
var obj6521_onTap_activeActionGroupIndex = -1;
var obj6521_onTap_runningActionsCount = 0;
var obj6521_onTap_loopCount = 0;
var obj6525_onTap_activeActionGroupIndex = -1;
var obj6525_onTap_runningActionsCount = 0;
var obj6525_onTap_loopCount = 0;
var obj6529_onTap_activeActionGroupIndex = -1;
var obj6529_onTap_runningActionsCount = 0;
var obj6529_onTap_loopCount = 0;
var obj6531_onTap_activeActionGroupIndex = -1;
var obj6531_onTap_runningActionsCount = 0;
var obj6531_onTap_loopCount = 0;
var obj6533_onTap_activeActionGroupIndex = -1;
var obj6533_onTap_runningActionsCount = 0;
var obj6533_onTap_loopCount = 0;
var obj6535_onTap_activeActionGroupIndex = -1;
var obj6535_onTap_runningActionsCount = 0;
var obj6535_onTap_loopCount = 0;
var obj6537_onTap_activeActionGroupIndex = -1;
var obj6537_onTap_runningActionsCount = 0;
var obj6537_onTap_loopCount = 0;
var obj6545_onTap_activeActionGroupIndex = -1;
var obj6545_onTap_runningActionsCount = 0;
var obj6545_onTap_loopCount = 0;
var obj6547_onTap_activeActionGroupIndex = -1;
var obj6547_onTap_runningActionsCount = 0;
var obj6547_onTap_loopCount = 0;
var obj6549_onTap_activeActionGroupIndex = -1;
var obj6549_onTap_runningActionsCount = 0;
var obj6549_onTap_loopCount = 0;
var obj6551_onTap_activeActionGroupIndex = -1;
var obj6551_onTap_runningActionsCount = 0;
var obj6551_onTap_loopCount = 0;
var obj6553_onTap_activeActionGroupIndex = -1;
var obj6553_onTap_runningActionsCount = 0;
var obj6553_onTap_loopCount = 0;
var obj6557_onTap_activeActionGroupIndex = -1;
var obj6557_onTap_runningActionsCount = 0;
var obj6557_onTap_loopCount = 0;
var obj6561_onTap_activeActionGroupIndex = -1;
var obj6561_onTap_runningActionsCount = 0;
var obj6561_onTap_loopCount = 0;
var obj6563_onTap_activeActionGroupIndex = -1;
var obj6563_onTap_runningActionsCount = 0;
var obj6563_onTap_loopCount = 0;
var obj6565_onTap_activeActionGroupIndex = -1;
var obj6565_onTap_runningActionsCount = 0;
var obj6565_onTap_loopCount = 0;
var obj6567_onTap_activeActionGroupIndex = -1;
var obj6567_onTap_runningActionsCount = 0;
var obj6567_onTap_loopCount = 0;
var obj6569_onTap_activeActionGroupIndex = -1;
var obj6569_onTap_runningActionsCount = 0;
var obj6569_onTap_loopCount = 0;
var obj6573_onTap_activeActionGroupIndex = -1;
var obj6573_onTap_runningActionsCount = 0;
var obj6573_onTap_loopCount = 0;
var obj6577_onTap_activeActionGroupIndex = -1;
var obj6577_onTap_runningActionsCount = 0;
var obj6577_onTap_loopCount = 0;
var obj6579_onTap_activeActionGroupIndex = -1;
var obj6579_onTap_runningActionsCount = 0;
var obj6579_onTap_loopCount = 0;
var obj6581_onTap_activeActionGroupIndex = -1;
var obj6581_onTap_runningActionsCount = 0;
var obj6581_onTap_loopCount = 0;
var obj6583_onTap_activeActionGroupIndex = -1;
var obj6583_onTap_runningActionsCount = 0;
var obj6583_onTap_loopCount = 0;
var obj6585_onTap_activeActionGroupIndex = -1;
var obj6585_onTap_runningActionsCount = 0;
var obj6585_onTap_loopCount = 0;
var obj6589_onTap_activeActionGroupIndex = -1;
var obj6589_onTap_runningActionsCount = 0;
var obj6589_onTap_loopCount = 0;
var obj6593_onTap_activeActionGroupIndex = -1;
var obj6593_onTap_runningActionsCount = 0;
var obj6593_onTap_loopCount = 0;
var obj6595_onTap_activeActionGroupIndex = -1;
var obj6595_onTap_runningActionsCount = 0;
var obj6595_onTap_loopCount = 0;
var obj6597_onTap_activeActionGroupIndex = -1;
var obj6597_onTap_runningActionsCount = 0;
var obj6597_onTap_loopCount = 0;
var obj6599_onTap_activeActionGroupIndex = -1;
var obj6599_onTap_runningActionsCount = 0;
var obj6599_onTap_loopCount = 0;
var obj6601_onTap_activeActionGroupIndex = -1;
var obj6601_onTap_runningActionsCount = 0;
var obj6601_onTap_loopCount = 0;
var obj6605_onTap_activeActionGroupIndex = -1;
var obj6605_onTap_runningActionsCount = 0;
var obj6605_onTap_loopCount = 0;
var obj6607_onTap_activeActionGroupIndex = -1;
var obj6607_onTap_runningActionsCount = 0;
var obj6607_onTap_loopCount = 0;
var obj6619_onTap_activeActionGroupIndex = -1;
var obj6619_onTap_runningActionsCount = 0;
var obj6619_onTap_loopCount = 0;
var obj65070_onTap_activeActionGroupIndex = -1;
var obj65070_onTap_runningActionsCount = 0;
var obj65070_onTap_loopCount = 0;
var obj65062_onTap_activeActionGroupIndex = -1;
var obj65062_onTap_runningActionsCount = 0;
var obj65062_onTap_loopCount = 0;
var obj86865_onTap_activeActionGroupIndex = -1;
var obj86865_onTap_runningActionsCount = 0;
var obj86865_onTap_loopCount = 0;
var obj86860_onTap_activeActionGroupIndex = -1;
var obj86860_onTap_runningActionsCount = 0;
var obj86860_onTap_loopCount = 0;
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
		
obj140_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj140_onTap_activeActionGroupIndex = -1;
		$("#obj140").trigger("obj140_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 140) {
				console.warn("de-queueing event obj140." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj140").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj140_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_142();
function goToPage_142() {
	window.obj140_onTap_runningActionsCount = obj140_onTap_runningActionsCount + 1;
	$("#anchor49")[0].click();
	window.obj140_onTap_runningActionsCount = window.obj140_onTap_runningActionsCount - 1;
if (window.obj140_onTap_runningActionsCount < 0) {
	window.obj140_onTap_runningActionsCount = 0;
} else if (window.obj140_onTap_runningActionsCount == 0) {
	obj140_onTap_actionGroup1();
}
}





















};
obj140_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj140_onTap_activeActionGroupIndex = -1;
		$("#obj140").trigger("obj140_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 140) {
				console.warn("de-queueing event obj140." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj140").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj140_onTap_activeActionGroupIndex = 1;
	





















};
obj143_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj143_onTap_activeActionGroupIndex = -1;
		$("#obj143").trigger("obj143_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 143) {
				console.warn("de-queueing event obj143." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj143").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj143_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_145();
function goToPage_145() {
	window.obj143_onTap_runningActionsCount = obj143_onTap_runningActionsCount + 1;
	$("#anchor50")[0].click();
	window.obj143_onTap_runningActionsCount = window.obj143_onTap_runningActionsCount - 1;
if (window.obj143_onTap_runningActionsCount < 0) {
	window.obj143_onTap_runningActionsCount = 0;
} else if (window.obj143_onTap_runningActionsCount == 0) {
	obj143_onTap_actionGroup1();
}
}





















};
obj143_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj143_onTap_activeActionGroupIndex = -1;
		$("#obj143").trigger("obj143_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 143) {
				console.warn("de-queueing event obj143." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj143").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj143_onTap_activeActionGroupIndex = 1;
	





















};
obj136_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj136_onTap_activeActionGroupIndex = -1;
		$("#obj136").trigger("obj136_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 136) {
				console.warn("de-queueing event obj136." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj136").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj136_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_58170();
function goToPage_58170() {
	window.obj136_onTap_runningActionsCount = obj136_onTap_runningActionsCount + 1;
	$("#anchor51")[0].click();
	window.obj136_onTap_runningActionsCount = window.obj136_onTap_runningActionsCount - 1;
if (window.obj136_onTap_runningActionsCount < 0) {
	window.obj136_onTap_runningActionsCount = 0;
} else if (window.obj136_onTap_runningActionsCount == 0) {
	obj136_onTap_actionGroup1();
}
}





















};
obj136_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj136_onTap_activeActionGroupIndex = -1;
		$("#obj136").trigger("obj136_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 136) {
				console.warn("de-queueing event obj136." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj136").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj136_onTap_activeActionGroupIndex = 1;
	





















};
obj6397_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6397_onTap_activeActionGroupIndex = -1;
		$("#obj6397").trigger("obj6397_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6397) {
				console.warn("de-queueing event obj6397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6397_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6653();
function runjs_6653() {
	window.obj6397_onTap_runningActionsCount = obj6397_onTap_runningActionsCount + 1;

	$("#obj6397").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6397_onTap_runningActionsCount = window.obj6397_onTap_runningActionsCount - 1;
if (window.obj6397_onTap_runningActionsCount < 0) {
	window.obj6397_onTap_runningActionsCount = 0;
} else if (window.obj6397_onTap_runningActionsCount == 0) {
	obj6397_onTap_actionGroup1();
}
	}, 1);
}







};
obj6397_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6397_onTap_activeActionGroupIndex = -1;
		$("#obj6397").trigger("obj6397_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6397) {
				console.warn("de-queueing event obj6397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6397_onTap_activeActionGroupIndex = 1;
	





















};
obj6399_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6399_onTap_activeActionGroupIndex = -1;
		$("#obj6399").trigger("obj6399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6399) {
				console.warn("de-queueing event obj6399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6399_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57620();
function switchText_57620() {
	window.obj6399_onTap_runningActionsCount = obj6399_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6399_onTap_runningActionsCount = window.obj6399_onTap_runningActionsCount - 1;
if (window.obj6399_onTap_runningActionsCount < 0) {
	window.obj6399_onTap_runningActionsCount = 0;
} else if (window.obj6399_onTap_runningActionsCount == 0) {
	obj6399_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6399_onTap_runningActionsCount = window.obj6399_onTap_runningActionsCount - 1;
if (window.obj6399_onTap_runningActionsCount < 0) {
	window.obj6399_onTap_runningActionsCount = 0;
} else if (window.obj6399_onTap_runningActionsCount == 0) {
	obj6399_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6399_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6399_onTap_activeActionGroupIndex = -1;
		$("#obj6399").trigger("obj6399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6399) {
				console.warn("de-queueing event obj6399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6399_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57621();
function runjs_57621() {
	window.obj6399_onTap_runningActionsCount = obj6399_onTap_runningActionsCount + 1;

	$("#obj6399").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6399_onTap_runningActionsCount = window.obj6399_onTap_runningActionsCount - 1;
if (window.obj6399_onTap_runningActionsCount < 0) {
	window.obj6399_onTap_runningActionsCount = 0;
} else if (window.obj6399_onTap_runningActionsCount == 0) {
	obj6399_onTap_actionGroup2();
}
	}, 1);
}







};
obj6399_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6399_onTap_activeActionGroupIndex = -1;
		$("#obj6399").trigger("obj6399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6399) {
				console.warn("de-queueing event obj6399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6399_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57622();
function playAudio_57622() {
	window.obj6399_onTap_runningActionsCount = obj6399_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6399_onTap_runningActionsCount = window.obj6399_onTap_runningActionsCount - 1;
if (window.obj6399_onTap_runningActionsCount < 0) {
	window.obj6399_onTap_runningActionsCount = 0;
} else if (window.obj6399_onTap_runningActionsCount == 0) {
	obj6399_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6399_onTap_runningActionsCount = window.obj6399_onTap_runningActionsCount - 1;
if (window.obj6399_onTap_runningActionsCount < 0) {
	window.obj6399_onTap_runningActionsCount = 0;
} else if (window.obj6399_onTap_runningActionsCount == 0) {
	obj6399_onTap_actionGroup3();
}
	}
}









};
obj6399_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6399_onTap_activeActionGroupIndex = -1;
		$("#obj6399").trigger("obj6399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6399) {
				console.warn("de-queueing event obj6399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6399_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57623();
function runjs_57623() {
	window.obj6399_onTap_runningActionsCount = obj6399_onTap_runningActionsCount + 1;

	$("#obj6399").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6399_onTap_runningActionsCount = window.obj6399_onTap_runningActionsCount - 1;
if (window.obj6399_onTap_runningActionsCount < 0) {
	window.obj6399_onTap_runningActionsCount = 0;
} else if (window.obj6399_onTap_runningActionsCount == 0) {
	obj6399_onTap_actionGroup4();
}
	}, 1);
}







};
obj6399_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6399_onTap_activeActionGroupIndex = -1;
		$("#obj6399").trigger("obj6399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6399) {
				console.warn("de-queueing event obj6399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6399_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57624();
function switchText_57624() {
	window.obj6399_onTap_runningActionsCount = obj6399_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6399_onTap_runningActionsCount = window.obj6399_onTap_runningActionsCount - 1;
if (window.obj6399_onTap_runningActionsCount < 0) {
	window.obj6399_onTap_runningActionsCount = 0;
} else if (window.obj6399_onTap_runningActionsCount == 0) {
	obj6399_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6399_onTap_runningActionsCount = window.obj6399_onTap_runningActionsCount - 1;
if (window.obj6399_onTap_runningActionsCount < 0) {
	window.obj6399_onTap_runningActionsCount = 0;
} else if (window.obj6399_onTap_runningActionsCount == 0) {
	obj6399_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6399_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6399_onTap_activeActionGroupIndex = -1;
		$("#obj6399").trigger("obj6399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6399) {
				console.warn("de-queueing event obj6399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6399_onTap_activeActionGroupIndex = 5;
	





















};
obj6401_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6401_onTap_activeActionGroupIndex = -1;
		$("#obj6401").trigger("obj6401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6401) {
				console.warn("de-queueing event obj6401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6401_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57625();
function switchText_57625() {
	window.obj6401_onTap_runningActionsCount = obj6401_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6401_onTap_runningActionsCount = window.obj6401_onTap_runningActionsCount - 1;
if (window.obj6401_onTap_runningActionsCount < 0) {
	window.obj6401_onTap_runningActionsCount = 0;
} else if (window.obj6401_onTap_runningActionsCount == 0) {
	obj6401_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6401_onTap_runningActionsCount = window.obj6401_onTap_runningActionsCount - 1;
if (window.obj6401_onTap_runningActionsCount < 0) {
	window.obj6401_onTap_runningActionsCount = 0;
} else if (window.obj6401_onTap_runningActionsCount == 0) {
	obj6401_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6401_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6401_onTap_activeActionGroupIndex = -1;
		$("#obj6401").trigger("obj6401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6401) {
				console.warn("de-queueing event obj6401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6401_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57626();
function runjs_57626() {
	window.obj6401_onTap_runningActionsCount = obj6401_onTap_runningActionsCount + 1;

	$("#obj6401").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6401_onTap_runningActionsCount = window.obj6401_onTap_runningActionsCount - 1;
if (window.obj6401_onTap_runningActionsCount < 0) {
	window.obj6401_onTap_runningActionsCount = 0;
} else if (window.obj6401_onTap_runningActionsCount == 0) {
	obj6401_onTap_actionGroup2();
}
	}, 1);
}







};
obj6401_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6401_onTap_activeActionGroupIndex = -1;
		$("#obj6401").trigger("obj6401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6401) {
				console.warn("de-queueing event obj6401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6401_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57627();
function playAudio_57627() {
	window.obj6401_onTap_runningActionsCount = obj6401_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6401_onTap_runningActionsCount = window.obj6401_onTap_runningActionsCount - 1;
if (window.obj6401_onTap_runningActionsCount < 0) {
	window.obj6401_onTap_runningActionsCount = 0;
} else if (window.obj6401_onTap_runningActionsCount == 0) {
	obj6401_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6401_onTap_runningActionsCount = window.obj6401_onTap_runningActionsCount - 1;
if (window.obj6401_onTap_runningActionsCount < 0) {
	window.obj6401_onTap_runningActionsCount = 0;
} else if (window.obj6401_onTap_runningActionsCount == 0) {
	obj6401_onTap_actionGroup3();
}
	}
}









};
obj6401_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6401_onTap_activeActionGroupIndex = -1;
		$("#obj6401").trigger("obj6401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6401) {
				console.warn("de-queueing event obj6401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6401_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57628();
function runjs_57628() {
	window.obj6401_onTap_runningActionsCount = obj6401_onTap_runningActionsCount + 1;

	$("#obj6401").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6401_onTap_runningActionsCount = window.obj6401_onTap_runningActionsCount - 1;
if (window.obj6401_onTap_runningActionsCount < 0) {
	window.obj6401_onTap_runningActionsCount = 0;
} else if (window.obj6401_onTap_runningActionsCount == 0) {
	obj6401_onTap_actionGroup4();
}
	}, 1);
}







};
obj6401_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6401_onTap_activeActionGroupIndex = -1;
		$("#obj6401").trigger("obj6401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6401) {
				console.warn("de-queueing event obj6401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6401_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57629();
function switchText_57629() {
	window.obj6401_onTap_runningActionsCount = obj6401_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6401_onTap_runningActionsCount = window.obj6401_onTap_runningActionsCount - 1;
if (window.obj6401_onTap_runningActionsCount < 0) {
	window.obj6401_onTap_runningActionsCount = 0;
} else if (window.obj6401_onTap_runningActionsCount == 0) {
	obj6401_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6401_onTap_runningActionsCount = window.obj6401_onTap_runningActionsCount - 1;
if (window.obj6401_onTap_runningActionsCount < 0) {
	window.obj6401_onTap_runningActionsCount = 0;
} else if (window.obj6401_onTap_runningActionsCount == 0) {
	obj6401_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6401_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6401_onTap_activeActionGroupIndex = -1;
		$("#obj6401").trigger("obj6401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6401) {
				console.warn("de-queueing event obj6401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6401_onTap_activeActionGroupIndex = 5;
	





















};
obj6403_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6403_onTap_activeActionGroupIndex = -1;
		$("#obj6403").trigger("obj6403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6403) {
				console.warn("de-queueing event obj6403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6403_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57630();
function switchText_57630() {
	window.obj6403_onTap_runningActionsCount = obj6403_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6403_onTap_runningActionsCount = window.obj6403_onTap_runningActionsCount - 1;
if (window.obj6403_onTap_runningActionsCount < 0) {
	window.obj6403_onTap_runningActionsCount = 0;
} else if (window.obj6403_onTap_runningActionsCount == 0) {
	obj6403_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6403_onTap_runningActionsCount = window.obj6403_onTap_runningActionsCount - 1;
if (window.obj6403_onTap_runningActionsCount < 0) {
	window.obj6403_onTap_runningActionsCount = 0;
} else if (window.obj6403_onTap_runningActionsCount == 0) {
	obj6403_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6403_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6403_onTap_activeActionGroupIndex = -1;
		$("#obj6403").trigger("obj6403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6403) {
				console.warn("de-queueing event obj6403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6403_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57631();
function runjs_57631() {
	window.obj6403_onTap_runningActionsCount = obj6403_onTap_runningActionsCount + 1;

	$("#obj6403").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6403_onTap_runningActionsCount = window.obj6403_onTap_runningActionsCount - 1;
if (window.obj6403_onTap_runningActionsCount < 0) {
	window.obj6403_onTap_runningActionsCount = 0;
} else if (window.obj6403_onTap_runningActionsCount == 0) {
	obj6403_onTap_actionGroup2();
}
	}, 1);
}







};
obj6403_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6403_onTap_activeActionGroupIndex = -1;
		$("#obj6403").trigger("obj6403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6403) {
				console.warn("de-queueing event obj6403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6403_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57632();
function playAudio_57632() {
	window.obj6403_onTap_runningActionsCount = obj6403_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6403_onTap_runningActionsCount = window.obj6403_onTap_runningActionsCount - 1;
if (window.obj6403_onTap_runningActionsCount < 0) {
	window.obj6403_onTap_runningActionsCount = 0;
} else if (window.obj6403_onTap_runningActionsCount == 0) {
	obj6403_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6403_onTap_runningActionsCount = window.obj6403_onTap_runningActionsCount - 1;
if (window.obj6403_onTap_runningActionsCount < 0) {
	window.obj6403_onTap_runningActionsCount = 0;
} else if (window.obj6403_onTap_runningActionsCount == 0) {
	obj6403_onTap_actionGroup3();
}
	}
}









};
obj6403_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6403_onTap_activeActionGroupIndex = -1;
		$("#obj6403").trigger("obj6403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6403) {
				console.warn("de-queueing event obj6403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6403_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57633();
function runjs_57633() {
	window.obj6403_onTap_runningActionsCount = obj6403_onTap_runningActionsCount + 1;

	$("#obj6403").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6403_onTap_runningActionsCount = window.obj6403_onTap_runningActionsCount - 1;
if (window.obj6403_onTap_runningActionsCount < 0) {
	window.obj6403_onTap_runningActionsCount = 0;
} else if (window.obj6403_onTap_runningActionsCount == 0) {
	obj6403_onTap_actionGroup4();
}
	}, 1);
}







};
obj6403_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6403_onTap_activeActionGroupIndex = -1;
		$("#obj6403").trigger("obj6403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6403) {
				console.warn("de-queueing event obj6403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6403_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57634();
function switchText_57634() {
	window.obj6403_onTap_runningActionsCount = obj6403_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6403_onTap_runningActionsCount = window.obj6403_onTap_runningActionsCount - 1;
if (window.obj6403_onTap_runningActionsCount < 0) {
	window.obj6403_onTap_runningActionsCount = 0;
} else if (window.obj6403_onTap_runningActionsCount == 0) {
	obj6403_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6403_onTap_runningActionsCount = window.obj6403_onTap_runningActionsCount - 1;
if (window.obj6403_onTap_runningActionsCount < 0) {
	window.obj6403_onTap_runningActionsCount = 0;
} else if (window.obj6403_onTap_runningActionsCount == 0) {
	obj6403_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6403_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6403_onTap_activeActionGroupIndex = -1;
		$("#obj6403").trigger("obj6403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6403) {
				console.warn("de-queueing event obj6403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6403_onTap_activeActionGroupIndex = 5;
	





















};
obj6405_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6405_onTap_activeActionGroupIndex = -1;
		$("#obj6405").trigger("obj6405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6405) {
				console.warn("de-queueing event obj6405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6405_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57635();
function switchText_57635() {
	window.obj6405_onTap_runningActionsCount = obj6405_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6405_onTap_runningActionsCount = window.obj6405_onTap_runningActionsCount - 1;
if (window.obj6405_onTap_runningActionsCount < 0) {
	window.obj6405_onTap_runningActionsCount = 0;
} else if (window.obj6405_onTap_runningActionsCount == 0) {
	obj6405_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6405_onTap_runningActionsCount = window.obj6405_onTap_runningActionsCount - 1;
if (window.obj6405_onTap_runningActionsCount < 0) {
	window.obj6405_onTap_runningActionsCount = 0;
} else if (window.obj6405_onTap_runningActionsCount == 0) {
	obj6405_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6405_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6405_onTap_activeActionGroupIndex = -1;
		$("#obj6405").trigger("obj6405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6405) {
				console.warn("de-queueing event obj6405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6405_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57636();
function runjs_57636() {
	window.obj6405_onTap_runningActionsCount = obj6405_onTap_runningActionsCount + 1;

	$("#obj6405").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6405_onTap_runningActionsCount = window.obj6405_onTap_runningActionsCount - 1;
if (window.obj6405_onTap_runningActionsCount < 0) {
	window.obj6405_onTap_runningActionsCount = 0;
} else if (window.obj6405_onTap_runningActionsCount == 0) {
	obj6405_onTap_actionGroup2();
}
	}, 1);
}







};
obj6405_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6405_onTap_activeActionGroupIndex = -1;
		$("#obj6405").trigger("obj6405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6405) {
				console.warn("de-queueing event obj6405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6405_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57637();
function playAudio_57637() {
	window.obj6405_onTap_runningActionsCount = obj6405_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6405_onTap_runningActionsCount = window.obj6405_onTap_runningActionsCount - 1;
if (window.obj6405_onTap_runningActionsCount < 0) {
	window.obj6405_onTap_runningActionsCount = 0;
} else if (window.obj6405_onTap_runningActionsCount == 0) {
	obj6405_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6405_onTap_runningActionsCount = window.obj6405_onTap_runningActionsCount - 1;
if (window.obj6405_onTap_runningActionsCount < 0) {
	window.obj6405_onTap_runningActionsCount = 0;
} else if (window.obj6405_onTap_runningActionsCount == 0) {
	obj6405_onTap_actionGroup3();
}
	}
}









};
obj6405_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6405_onTap_activeActionGroupIndex = -1;
		$("#obj6405").trigger("obj6405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6405) {
				console.warn("de-queueing event obj6405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6405_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57638();
function runjs_57638() {
	window.obj6405_onTap_runningActionsCount = obj6405_onTap_runningActionsCount + 1;

	$("#obj6405").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6405_onTap_runningActionsCount = window.obj6405_onTap_runningActionsCount - 1;
if (window.obj6405_onTap_runningActionsCount < 0) {
	window.obj6405_onTap_runningActionsCount = 0;
} else if (window.obj6405_onTap_runningActionsCount == 0) {
	obj6405_onTap_actionGroup4();
}
	}, 1);
}







};
obj6405_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6405_onTap_activeActionGroupIndex = -1;
		$("#obj6405").trigger("obj6405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6405) {
				console.warn("de-queueing event obj6405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6405_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57639();
function switchText_57639() {
	window.obj6405_onTap_runningActionsCount = obj6405_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6405_onTap_runningActionsCount = window.obj6405_onTap_runningActionsCount - 1;
if (window.obj6405_onTap_runningActionsCount < 0) {
	window.obj6405_onTap_runningActionsCount = 0;
} else if (window.obj6405_onTap_runningActionsCount == 0) {
	obj6405_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6405_onTap_runningActionsCount = window.obj6405_onTap_runningActionsCount - 1;
if (window.obj6405_onTap_runningActionsCount < 0) {
	window.obj6405_onTap_runningActionsCount = 0;
} else if (window.obj6405_onTap_runningActionsCount == 0) {
	obj6405_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6405_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6405_onTap_activeActionGroupIndex = -1;
		$("#obj6405").trigger("obj6405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6405) {
				console.warn("de-queueing event obj6405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6405_onTap_activeActionGroupIndex = 5;
	





















};
obj6407_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6407_onTap_activeActionGroupIndex = -1;
		$("#obj6407").trigger("obj6407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6407) {
				console.warn("de-queueing event obj6407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6407_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57640();
function switchText_57640() {
	window.obj6407_onTap_runningActionsCount = obj6407_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6407_onTap_runningActionsCount = window.obj6407_onTap_runningActionsCount - 1;
if (window.obj6407_onTap_runningActionsCount < 0) {
	window.obj6407_onTap_runningActionsCount = 0;
} else if (window.obj6407_onTap_runningActionsCount == 0) {
	obj6407_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6407_onTap_runningActionsCount = window.obj6407_onTap_runningActionsCount - 1;
if (window.obj6407_onTap_runningActionsCount < 0) {
	window.obj6407_onTap_runningActionsCount = 0;
} else if (window.obj6407_onTap_runningActionsCount == 0) {
	obj6407_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6407_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6407_onTap_activeActionGroupIndex = -1;
		$("#obj6407").trigger("obj6407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6407) {
				console.warn("de-queueing event obj6407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6407_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57641();
function runjs_57641() {
	window.obj6407_onTap_runningActionsCount = obj6407_onTap_runningActionsCount + 1;

	$("#obj6407").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6407_onTap_runningActionsCount = window.obj6407_onTap_runningActionsCount - 1;
if (window.obj6407_onTap_runningActionsCount < 0) {
	window.obj6407_onTap_runningActionsCount = 0;
} else if (window.obj6407_onTap_runningActionsCount == 0) {
	obj6407_onTap_actionGroup2();
}
	}, 1);
}







};
obj6407_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6407_onTap_activeActionGroupIndex = -1;
		$("#obj6407").trigger("obj6407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6407) {
				console.warn("de-queueing event obj6407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6407_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57642();
function playAudio_57642() {
	window.obj6407_onTap_runningActionsCount = obj6407_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6407_onTap_runningActionsCount = window.obj6407_onTap_runningActionsCount - 1;
if (window.obj6407_onTap_runningActionsCount < 0) {
	window.obj6407_onTap_runningActionsCount = 0;
} else if (window.obj6407_onTap_runningActionsCount == 0) {
	obj6407_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6407_onTap_runningActionsCount = window.obj6407_onTap_runningActionsCount - 1;
if (window.obj6407_onTap_runningActionsCount < 0) {
	window.obj6407_onTap_runningActionsCount = 0;
} else if (window.obj6407_onTap_runningActionsCount == 0) {
	obj6407_onTap_actionGroup3();
}
	}
}









};
obj6407_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6407_onTap_activeActionGroupIndex = -1;
		$("#obj6407").trigger("obj6407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6407) {
				console.warn("de-queueing event obj6407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6407_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57643();
function runjs_57643() {
	window.obj6407_onTap_runningActionsCount = obj6407_onTap_runningActionsCount + 1;

	$("#obj6407").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6407_onTap_runningActionsCount = window.obj6407_onTap_runningActionsCount - 1;
if (window.obj6407_onTap_runningActionsCount < 0) {
	window.obj6407_onTap_runningActionsCount = 0;
} else if (window.obj6407_onTap_runningActionsCount == 0) {
	obj6407_onTap_actionGroup4();
}
	}, 1);
}







};
obj6407_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6407_onTap_activeActionGroupIndex = -1;
		$("#obj6407").trigger("obj6407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6407) {
				console.warn("de-queueing event obj6407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6407_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57644();
function switchText_57644() {
	window.obj6407_onTap_runningActionsCount = obj6407_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6407_onTap_runningActionsCount = window.obj6407_onTap_runningActionsCount - 1;
if (window.obj6407_onTap_runningActionsCount < 0) {
	window.obj6407_onTap_runningActionsCount = 0;
} else if (window.obj6407_onTap_runningActionsCount == 0) {
	obj6407_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6407_onTap_runningActionsCount = window.obj6407_onTap_runningActionsCount - 1;
if (window.obj6407_onTap_runningActionsCount < 0) {
	window.obj6407_onTap_runningActionsCount = 0;
} else if (window.obj6407_onTap_runningActionsCount == 0) {
	obj6407_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6407_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6407_onTap_activeActionGroupIndex = -1;
		$("#obj6407").trigger("obj6407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6407) {
				console.warn("de-queueing event obj6407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6407_onTap_activeActionGroupIndex = 5;
	





















};
obj6409_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6409_onTap_activeActionGroupIndex = -1;
		$("#obj6409").trigger("obj6409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6409) {
				console.warn("de-queueing event obj6409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6409_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57645();
function switchText_57645() {
	window.obj6409_onTap_runningActionsCount = obj6409_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6409_onTap_runningActionsCount = window.obj6409_onTap_runningActionsCount - 1;
if (window.obj6409_onTap_runningActionsCount < 0) {
	window.obj6409_onTap_runningActionsCount = 0;
} else if (window.obj6409_onTap_runningActionsCount == 0) {
	obj6409_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6409_onTap_runningActionsCount = window.obj6409_onTap_runningActionsCount - 1;
if (window.obj6409_onTap_runningActionsCount < 0) {
	window.obj6409_onTap_runningActionsCount = 0;
} else if (window.obj6409_onTap_runningActionsCount == 0) {
	obj6409_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6409_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6409_onTap_activeActionGroupIndex = -1;
		$("#obj6409").trigger("obj6409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6409) {
				console.warn("de-queueing event obj6409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6409_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57646();
function runjs_57646() {
	window.obj6409_onTap_runningActionsCount = obj6409_onTap_runningActionsCount + 1;

	$("#obj6409").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6409_onTap_runningActionsCount = window.obj6409_onTap_runningActionsCount - 1;
if (window.obj6409_onTap_runningActionsCount < 0) {
	window.obj6409_onTap_runningActionsCount = 0;
} else if (window.obj6409_onTap_runningActionsCount == 0) {
	obj6409_onTap_actionGroup2();
}
	}, 1);
}







};
obj6409_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6409_onTap_activeActionGroupIndex = -1;
		$("#obj6409").trigger("obj6409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6409) {
				console.warn("de-queueing event obj6409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6409_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57647();
function playAudio_57647() {
	window.obj6409_onTap_runningActionsCount = obj6409_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6409_onTap_runningActionsCount = window.obj6409_onTap_runningActionsCount - 1;
if (window.obj6409_onTap_runningActionsCount < 0) {
	window.obj6409_onTap_runningActionsCount = 0;
} else if (window.obj6409_onTap_runningActionsCount == 0) {
	obj6409_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6409_onTap_runningActionsCount = window.obj6409_onTap_runningActionsCount - 1;
if (window.obj6409_onTap_runningActionsCount < 0) {
	window.obj6409_onTap_runningActionsCount = 0;
} else if (window.obj6409_onTap_runningActionsCount == 0) {
	obj6409_onTap_actionGroup3();
}
	}
}









};
obj6409_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6409_onTap_activeActionGroupIndex = -1;
		$("#obj6409").trigger("obj6409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6409) {
				console.warn("de-queueing event obj6409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6409_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57648();
function runjs_57648() {
	window.obj6409_onTap_runningActionsCount = obj6409_onTap_runningActionsCount + 1;

	$("#obj6409").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6409_onTap_runningActionsCount = window.obj6409_onTap_runningActionsCount - 1;
if (window.obj6409_onTap_runningActionsCount < 0) {
	window.obj6409_onTap_runningActionsCount = 0;
} else if (window.obj6409_onTap_runningActionsCount == 0) {
	obj6409_onTap_actionGroup4();
}
	}, 1);
}







};
obj6409_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6409_onTap_activeActionGroupIndex = -1;
		$("#obj6409").trigger("obj6409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6409) {
				console.warn("de-queueing event obj6409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6409_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57649();
function switchText_57649() {
	window.obj6409_onTap_runningActionsCount = obj6409_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6409_onTap_runningActionsCount = window.obj6409_onTap_runningActionsCount - 1;
if (window.obj6409_onTap_runningActionsCount < 0) {
	window.obj6409_onTap_runningActionsCount = 0;
} else if (window.obj6409_onTap_runningActionsCount == 0) {
	obj6409_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6409_onTap_runningActionsCount = window.obj6409_onTap_runningActionsCount - 1;
if (window.obj6409_onTap_runningActionsCount < 0) {
	window.obj6409_onTap_runningActionsCount = 0;
} else if (window.obj6409_onTap_runningActionsCount == 0) {
	obj6409_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6409_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6409_onTap_activeActionGroupIndex = -1;
		$("#obj6409").trigger("obj6409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6409) {
				console.warn("de-queueing event obj6409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6409_onTap_activeActionGroupIndex = 5;
	





















};
obj6411_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6411_onTap_activeActionGroupIndex = -1;
		$("#obj6411").trigger("obj6411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6411) {
				console.warn("de-queueing event obj6411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6411_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6679();
function runjs_6679() {
	window.obj6411_onTap_runningActionsCount = obj6411_onTap_runningActionsCount + 1;

	$("#obj6411").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6411_onTap_runningActionsCount = window.obj6411_onTap_runningActionsCount - 1;
if (window.obj6411_onTap_runningActionsCount < 0) {
	window.obj6411_onTap_runningActionsCount = 0;
} else if (window.obj6411_onTap_runningActionsCount == 0) {
	obj6411_onTap_actionGroup1();
}
	}, 1);
}







};
obj6411_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6411_onTap_activeActionGroupIndex = -1;
		$("#obj6411").trigger("obj6411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6411) {
				console.warn("de-queueing event obj6411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6411_onTap_activeActionGroupIndex = 1;
	





















};
obj6413_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6413_onTap_activeActionGroupIndex = -1;
		$("#obj6413").trigger("obj6413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6413) {
				console.warn("de-queueing event obj6413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6413_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_6710();
function switchText_6710() {
	window.obj6413_onTap_runningActionsCount = obj6413_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6413_onTap_runningActionsCount = window.obj6413_onTap_runningActionsCount - 1;
if (window.obj6413_onTap_runningActionsCount < 0) {
	window.obj6413_onTap_runningActionsCount = 0;
} else if (window.obj6413_onTap_runningActionsCount == 0) {
	obj6413_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6413_onTap_runningActionsCount = window.obj6413_onTap_runningActionsCount - 1;
if (window.obj6413_onTap_runningActionsCount < 0) {
	window.obj6413_onTap_runningActionsCount = 0;
} else if (window.obj6413_onTap_runningActionsCount == 0) {
	obj6413_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6413_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6413_onTap_activeActionGroupIndex = -1;
		$("#obj6413").trigger("obj6413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6413) {
				console.warn("de-queueing event obj6413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6413_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6703();
function runjs_6703() {
	window.obj6413_onTap_runningActionsCount = obj6413_onTap_runningActionsCount + 1;

	$("#obj6413").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6413_onTap_runningActionsCount = window.obj6413_onTap_runningActionsCount - 1;
if (window.obj6413_onTap_runningActionsCount < 0) {
	window.obj6413_onTap_runningActionsCount = 0;
} else if (window.obj6413_onTap_runningActionsCount == 0) {
	obj6413_onTap_actionGroup2();
}
	}, 1);
}







};
obj6413_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6413_onTap_activeActionGroupIndex = -1;
		$("#obj6413").trigger("obj6413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6413) {
				console.warn("de-queueing event obj6413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6413_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_6712();
function playAudio_6712() {
	window.obj6413_onTap_runningActionsCount = obj6413_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6413_onTap_runningActionsCount = window.obj6413_onTap_runningActionsCount - 1;
if (window.obj6413_onTap_runningActionsCount < 0) {
	window.obj6413_onTap_runningActionsCount = 0;
} else if (window.obj6413_onTap_runningActionsCount == 0) {
	obj6413_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6413_onTap_runningActionsCount = window.obj6413_onTap_runningActionsCount - 1;
if (window.obj6413_onTap_runningActionsCount < 0) {
	window.obj6413_onTap_runningActionsCount = 0;
} else if (window.obj6413_onTap_runningActionsCount == 0) {
	obj6413_onTap_actionGroup3();
}
	}
}









};
obj6413_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6413_onTap_activeActionGroupIndex = -1;
		$("#obj6413").trigger("obj6413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6413) {
				console.warn("de-queueing event obj6413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6413_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57569();
function runjs_57569() {
	window.obj6413_onTap_runningActionsCount = obj6413_onTap_runningActionsCount + 1;

	$("#obj6413").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6413_onTap_runningActionsCount = window.obj6413_onTap_runningActionsCount - 1;
if (window.obj6413_onTap_runningActionsCount < 0) {
	window.obj6413_onTap_runningActionsCount = 0;
} else if (window.obj6413_onTap_runningActionsCount == 0) {
	obj6413_onTap_actionGroup4();
}
	}, 1);
}







};
obj6413_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6413_onTap_activeActionGroupIndex = -1;
		$("#obj6413").trigger("obj6413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6413) {
				console.warn("de-queueing event obj6413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6413_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6711();
function switchText_6711() {
	window.obj6413_onTap_runningActionsCount = obj6413_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6413_onTap_runningActionsCount = window.obj6413_onTap_runningActionsCount - 1;
if (window.obj6413_onTap_runningActionsCount < 0) {
	window.obj6413_onTap_runningActionsCount = 0;
} else if (window.obj6413_onTap_runningActionsCount == 0) {
	obj6413_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6413_onTap_runningActionsCount = window.obj6413_onTap_runningActionsCount - 1;
if (window.obj6413_onTap_runningActionsCount < 0) {
	window.obj6413_onTap_runningActionsCount = 0;
} else if (window.obj6413_onTap_runningActionsCount == 0) {
	obj6413_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6413_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6413_onTap_activeActionGroupIndex = -1;
		$("#obj6413").trigger("obj6413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6413) {
				console.warn("de-queueing event obj6413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6413_onTap_activeActionGroupIndex = 5;
	





















};
obj6415_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6654();
function runjs_6654() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;

	$("#obj6415").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup1();
}
	}, 1);
}







};
obj6415_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_6713();
function switchText_6713() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj6415_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_6655();
function runjs_6655() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;

	$("#obj6433").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup3();
}
	}, 1);
}







};
obj6415_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6656();
function runjs_6656() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;

	$("#obj6451").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup4();
}
	}, 1);
}







};
obj6415_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_6657();
function runjs_6657() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;

	$("#obj6469").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup5();
}
	}, 1);
}







};
obj6415_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_6664();
function runjs_6664() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;

	$("#obj6487").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup6();
}
	}, 1);
}







};
obj6415_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6659();
function runjs_6659() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;

	$("#obj6505").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup7();
}
	}, 1);
}







};
obj6415_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6663();
function runjs_6663() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;

	$("#obj6637").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup8();
}
	}, 1);
}







};
obj6415_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj6662 
playAudio_6660();
function playAudio_6660() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6662")[0];
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
		    window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup9();
}
	}
}









};
obj6415_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_90054();
function switchText_90054() {
	window.obj6415_onTap_runningActionsCount = obj6415_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6415_onTap_runningActionsCount = window.obj6415_onTap_runningActionsCount - 1;
if (window.obj6415_onTap_runningActionsCount < 0) {
	window.obj6415_onTap_runningActionsCount = 0;
} else if (window.obj6415_onTap_runningActionsCount == 0) {
	obj6415_onTap_actionGroup10();
}
		}, 1);
	}
}






};
obj6415_onTap_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6415_onTap_activeActionGroupIndex = -1;
		$("#obj6415").trigger("obj6415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6415) {
				console.warn("de-queueing event obj6415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6415_onTap_activeActionGroupIndex = 10;
	





















};
obj6417_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6417_onTap_activeActionGroupIndex = -1;
		$("#obj6417").trigger("obj6417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6417) {
				console.warn("de-queueing event obj6417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6417_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57650();
function switchText_57650() {
	window.obj6417_onTap_runningActionsCount = obj6417_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6417_onTap_runningActionsCount = window.obj6417_onTap_runningActionsCount - 1;
if (window.obj6417_onTap_runningActionsCount < 0) {
	window.obj6417_onTap_runningActionsCount = 0;
} else if (window.obj6417_onTap_runningActionsCount == 0) {
	obj6417_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6417_onTap_runningActionsCount = window.obj6417_onTap_runningActionsCount - 1;
if (window.obj6417_onTap_runningActionsCount < 0) {
	window.obj6417_onTap_runningActionsCount = 0;
} else if (window.obj6417_onTap_runningActionsCount == 0) {
	obj6417_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6417_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6417_onTap_activeActionGroupIndex = -1;
		$("#obj6417").trigger("obj6417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6417) {
				console.warn("de-queueing event obj6417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6417_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57651();
function runjs_57651() {
	window.obj6417_onTap_runningActionsCount = obj6417_onTap_runningActionsCount + 1;

	$("#obj6417").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6417_onTap_runningActionsCount = window.obj6417_onTap_runningActionsCount - 1;
if (window.obj6417_onTap_runningActionsCount < 0) {
	window.obj6417_onTap_runningActionsCount = 0;
} else if (window.obj6417_onTap_runningActionsCount == 0) {
	obj6417_onTap_actionGroup2();
}
	}, 1);
}







};
obj6417_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6417_onTap_activeActionGroupIndex = -1;
		$("#obj6417").trigger("obj6417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6417) {
				console.warn("de-queueing event obj6417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6417_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57652();
function playAudio_57652() {
	window.obj6417_onTap_runningActionsCount = obj6417_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6417_onTap_runningActionsCount = window.obj6417_onTap_runningActionsCount - 1;
if (window.obj6417_onTap_runningActionsCount < 0) {
	window.obj6417_onTap_runningActionsCount = 0;
} else if (window.obj6417_onTap_runningActionsCount == 0) {
	obj6417_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6417_onTap_runningActionsCount = window.obj6417_onTap_runningActionsCount - 1;
if (window.obj6417_onTap_runningActionsCount < 0) {
	window.obj6417_onTap_runningActionsCount = 0;
} else if (window.obj6417_onTap_runningActionsCount == 0) {
	obj6417_onTap_actionGroup3();
}
	}
}









};
obj6417_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6417_onTap_activeActionGroupIndex = -1;
		$("#obj6417").trigger("obj6417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6417) {
				console.warn("de-queueing event obj6417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6417_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57653();
function runjs_57653() {
	window.obj6417_onTap_runningActionsCount = obj6417_onTap_runningActionsCount + 1;

	$("#obj6417").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6417_onTap_runningActionsCount = window.obj6417_onTap_runningActionsCount - 1;
if (window.obj6417_onTap_runningActionsCount < 0) {
	window.obj6417_onTap_runningActionsCount = 0;
} else if (window.obj6417_onTap_runningActionsCount == 0) {
	obj6417_onTap_actionGroup4();
}
	}, 1);
}







};
obj6417_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6417_onTap_activeActionGroupIndex = -1;
		$("#obj6417").trigger("obj6417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6417) {
				console.warn("de-queueing event obj6417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6417_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57654();
function switchText_57654() {
	window.obj6417_onTap_runningActionsCount = obj6417_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6417_onTap_runningActionsCount = window.obj6417_onTap_runningActionsCount - 1;
if (window.obj6417_onTap_runningActionsCount < 0) {
	window.obj6417_onTap_runningActionsCount = 0;
} else if (window.obj6417_onTap_runningActionsCount == 0) {
	obj6417_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6417_onTap_runningActionsCount = window.obj6417_onTap_runningActionsCount - 1;
if (window.obj6417_onTap_runningActionsCount < 0) {
	window.obj6417_onTap_runningActionsCount = 0;
} else if (window.obj6417_onTap_runningActionsCount == 0) {
	obj6417_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6417_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6417_onTap_activeActionGroupIndex = -1;
		$("#obj6417").trigger("obj6417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6417) {
				console.warn("de-queueing event obj6417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6417_onTap_activeActionGroupIndex = 5;
	





















};
obj6419_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6419_onTap_activeActionGroupIndex = -1;
		$("#obj6419").trigger("obj6419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6419) {
				console.warn("de-queueing event obj6419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6419_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57655();
function switchText_57655() {
	window.obj6419_onTap_runningActionsCount = obj6419_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6419_onTap_runningActionsCount = window.obj6419_onTap_runningActionsCount - 1;
if (window.obj6419_onTap_runningActionsCount < 0) {
	window.obj6419_onTap_runningActionsCount = 0;
} else if (window.obj6419_onTap_runningActionsCount == 0) {
	obj6419_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6419_onTap_runningActionsCount = window.obj6419_onTap_runningActionsCount - 1;
if (window.obj6419_onTap_runningActionsCount < 0) {
	window.obj6419_onTap_runningActionsCount = 0;
} else if (window.obj6419_onTap_runningActionsCount == 0) {
	obj6419_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6419_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6419_onTap_activeActionGroupIndex = -1;
		$("#obj6419").trigger("obj6419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6419) {
				console.warn("de-queueing event obj6419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6419_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57656();
function runjs_57656() {
	window.obj6419_onTap_runningActionsCount = obj6419_onTap_runningActionsCount + 1;

	$("#obj6419").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6419_onTap_runningActionsCount = window.obj6419_onTap_runningActionsCount - 1;
if (window.obj6419_onTap_runningActionsCount < 0) {
	window.obj6419_onTap_runningActionsCount = 0;
} else if (window.obj6419_onTap_runningActionsCount == 0) {
	obj6419_onTap_actionGroup2();
}
	}, 1);
}







};
obj6419_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6419_onTap_activeActionGroupIndex = -1;
		$("#obj6419").trigger("obj6419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6419) {
				console.warn("de-queueing event obj6419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6419_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57657();
function playAudio_57657() {
	window.obj6419_onTap_runningActionsCount = obj6419_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6419_onTap_runningActionsCount = window.obj6419_onTap_runningActionsCount - 1;
if (window.obj6419_onTap_runningActionsCount < 0) {
	window.obj6419_onTap_runningActionsCount = 0;
} else if (window.obj6419_onTap_runningActionsCount == 0) {
	obj6419_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6419_onTap_runningActionsCount = window.obj6419_onTap_runningActionsCount - 1;
if (window.obj6419_onTap_runningActionsCount < 0) {
	window.obj6419_onTap_runningActionsCount = 0;
} else if (window.obj6419_onTap_runningActionsCount == 0) {
	obj6419_onTap_actionGroup3();
}
	}
}









};
obj6419_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6419_onTap_activeActionGroupIndex = -1;
		$("#obj6419").trigger("obj6419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6419) {
				console.warn("de-queueing event obj6419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6419_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57658();
function runjs_57658() {
	window.obj6419_onTap_runningActionsCount = obj6419_onTap_runningActionsCount + 1;

	$("#obj6419").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6419_onTap_runningActionsCount = window.obj6419_onTap_runningActionsCount - 1;
if (window.obj6419_onTap_runningActionsCount < 0) {
	window.obj6419_onTap_runningActionsCount = 0;
} else if (window.obj6419_onTap_runningActionsCount == 0) {
	obj6419_onTap_actionGroup4();
}
	}, 1);
}







};
obj6419_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6419_onTap_activeActionGroupIndex = -1;
		$("#obj6419").trigger("obj6419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6419) {
				console.warn("de-queueing event obj6419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6419_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57659();
function switchText_57659() {
	window.obj6419_onTap_runningActionsCount = obj6419_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6419_onTap_runningActionsCount = window.obj6419_onTap_runningActionsCount - 1;
if (window.obj6419_onTap_runningActionsCount < 0) {
	window.obj6419_onTap_runningActionsCount = 0;
} else if (window.obj6419_onTap_runningActionsCount == 0) {
	obj6419_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6419_onTap_runningActionsCount = window.obj6419_onTap_runningActionsCount - 1;
if (window.obj6419_onTap_runningActionsCount < 0) {
	window.obj6419_onTap_runningActionsCount = 0;
} else if (window.obj6419_onTap_runningActionsCount == 0) {
	obj6419_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6419_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6419_onTap_activeActionGroupIndex = -1;
		$("#obj6419").trigger("obj6419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6419) {
				console.warn("de-queueing event obj6419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6419_onTap_activeActionGroupIndex = 5;
	





















};
obj6421_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6421_onTap_activeActionGroupIndex = -1;
		$("#obj6421").trigger("obj6421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6421) {
				console.warn("de-queueing event obj6421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6421_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57660();
function switchText_57660() {
	window.obj6421_onTap_runningActionsCount = obj6421_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6421_onTap_runningActionsCount = window.obj6421_onTap_runningActionsCount - 1;
if (window.obj6421_onTap_runningActionsCount < 0) {
	window.obj6421_onTap_runningActionsCount = 0;
} else if (window.obj6421_onTap_runningActionsCount == 0) {
	obj6421_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6421_onTap_runningActionsCount = window.obj6421_onTap_runningActionsCount - 1;
if (window.obj6421_onTap_runningActionsCount < 0) {
	window.obj6421_onTap_runningActionsCount = 0;
} else if (window.obj6421_onTap_runningActionsCount == 0) {
	obj6421_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6421_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6421_onTap_activeActionGroupIndex = -1;
		$("#obj6421").trigger("obj6421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6421) {
				console.warn("de-queueing event obj6421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6421_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57661();
function runjs_57661() {
	window.obj6421_onTap_runningActionsCount = obj6421_onTap_runningActionsCount + 1;

	$("#obj6421").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6421_onTap_runningActionsCount = window.obj6421_onTap_runningActionsCount - 1;
if (window.obj6421_onTap_runningActionsCount < 0) {
	window.obj6421_onTap_runningActionsCount = 0;
} else if (window.obj6421_onTap_runningActionsCount == 0) {
	obj6421_onTap_actionGroup2();
}
	}, 1);
}







};
obj6421_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6421_onTap_activeActionGroupIndex = -1;
		$("#obj6421").trigger("obj6421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6421) {
				console.warn("de-queueing event obj6421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6421_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57662();
function playAudio_57662() {
	window.obj6421_onTap_runningActionsCount = obj6421_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6421_onTap_runningActionsCount = window.obj6421_onTap_runningActionsCount - 1;
if (window.obj6421_onTap_runningActionsCount < 0) {
	window.obj6421_onTap_runningActionsCount = 0;
} else if (window.obj6421_onTap_runningActionsCount == 0) {
	obj6421_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6421_onTap_runningActionsCount = window.obj6421_onTap_runningActionsCount - 1;
if (window.obj6421_onTap_runningActionsCount < 0) {
	window.obj6421_onTap_runningActionsCount = 0;
} else if (window.obj6421_onTap_runningActionsCount == 0) {
	obj6421_onTap_actionGroup3();
}
	}
}









};
obj6421_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6421_onTap_activeActionGroupIndex = -1;
		$("#obj6421").trigger("obj6421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6421) {
				console.warn("de-queueing event obj6421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6421_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57663();
function runjs_57663() {
	window.obj6421_onTap_runningActionsCount = obj6421_onTap_runningActionsCount + 1;

	$("#obj6421").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6421_onTap_runningActionsCount = window.obj6421_onTap_runningActionsCount - 1;
if (window.obj6421_onTap_runningActionsCount < 0) {
	window.obj6421_onTap_runningActionsCount = 0;
} else if (window.obj6421_onTap_runningActionsCount == 0) {
	obj6421_onTap_actionGroup4();
}
	}, 1);
}







};
obj6421_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6421_onTap_activeActionGroupIndex = -1;
		$("#obj6421").trigger("obj6421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6421) {
				console.warn("de-queueing event obj6421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6421_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57664();
function switchText_57664() {
	window.obj6421_onTap_runningActionsCount = obj6421_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6421_onTap_runningActionsCount = window.obj6421_onTap_runningActionsCount - 1;
if (window.obj6421_onTap_runningActionsCount < 0) {
	window.obj6421_onTap_runningActionsCount = 0;
} else if (window.obj6421_onTap_runningActionsCount == 0) {
	obj6421_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6421_onTap_runningActionsCount = window.obj6421_onTap_runningActionsCount - 1;
if (window.obj6421_onTap_runningActionsCount < 0) {
	window.obj6421_onTap_runningActionsCount = 0;
} else if (window.obj6421_onTap_runningActionsCount == 0) {
	obj6421_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6421_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6421_onTap_activeActionGroupIndex = -1;
		$("#obj6421").trigger("obj6421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6421) {
				console.warn("de-queueing event obj6421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6421_onTap_activeActionGroupIndex = 5;
	





















};
obj6423_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6423_onTap_activeActionGroupIndex = -1;
		$("#obj6423").trigger("obj6423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6423) {
				console.warn("de-queueing event obj6423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6423_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57665();
function switchText_57665() {
	window.obj6423_onTap_runningActionsCount = obj6423_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6423_onTap_runningActionsCount = window.obj6423_onTap_runningActionsCount - 1;
if (window.obj6423_onTap_runningActionsCount < 0) {
	window.obj6423_onTap_runningActionsCount = 0;
} else if (window.obj6423_onTap_runningActionsCount == 0) {
	obj6423_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6423_onTap_runningActionsCount = window.obj6423_onTap_runningActionsCount - 1;
if (window.obj6423_onTap_runningActionsCount < 0) {
	window.obj6423_onTap_runningActionsCount = 0;
} else if (window.obj6423_onTap_runningActionsCount == 0) {
	obj6423_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6423_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6423_onTap_activeActionGroupIndex = -1;
		$("#obj6423").trigger("obj6423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6423) {
				console.warn("de-queueing event obj6423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6423_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57666();
function runjs_57666() {
	window.obj6423_onTap_runningActionsCount = obj6423_onTap_runningActionsCount + 1;

	$("#obj6423").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6423_onTap_runningActionsCount = window.obj6423_onTap_runningActionsCount - 1;
if (window.obj6423_onTap_runningActionsCount < 0) {
	window.obj6423_onTap_runningActionsCount = 0;
} else if (window.obj6423_onTap_runningActionsCount == 0) {
	obj6423_onTap_actionGroup2();
}
	}, 1);
}







};
obj6423_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6423_onTap_activeActionGroupIndex = -1;
		$("#obj6423").trigger("obj6423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6423) {
				console.warn("de-queueing event obj6423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6423_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57667();
function playAudio_57667() {
	window.obj6423_onTap_runningActionsCount = obj6423_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6423_onTap_runningActionsCount = window.obj6423_onTap_runningActionsCount - 1;
if (window.obj6423_onTap_runningActionsCount < 0) {
	window.obj6423_onTap_runningActionsCount = 0;
} else if (window.obj6423_onTap_runningActionsCount == 0) {
	obj6423_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6423_onTap_runningActionsCount = window.obj6423_onTap_runningActionsCount - 1;
if (window.obj6423_onTap_runningActionsCount < 0) {
	window.obj6423_onTap_runningActionsCount = 0;
} else if (window.obj6423_onTap_runningActionsCount == 0) {
	obj6423_onTap_actionGroup3();
}
	}
}









};
obj6423_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6423_onTap_activeActionGroupIndex = -1;
		$("#obj6423").trigger("obj6423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6423) {
				console.warn("de-queueing event obj6423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6423_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57668();
function runjs_57668() {
	window.obj6423_onTap_runningActionsCount = obj6423_onTap_runningActionsCount + 1;

	$("#obj6423").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6423_onTap_runningActionsCount = window.obj6423_onTap_runningActionsCount - 1;
if (window.obj6423_onTap_runningActionsCount < 0) {
	window.obj6423_onTap_runningActionsCount = 0;
} else if (window.obj6423_onTap_runningActionsCount == 0) {
	obj6423_onTap_actionGroup4();
}
	}, 1);
}







};
obj6423_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6423_onTap_activeActionGroupIndex = -1;
		$("#obj6423").trigger("obj6423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6423) {
				console.warn("de-queueing event obj6423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6423_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57669();
function switchText_57669() {
	window.obj6423_onTap_runningActionsCount = obj6423_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6423_onTap_runningActionsCount = window.obj6423_onTap_runningActionsCount - 1;
if (window.obj6423_onTap_runningActionsCount < 0) {
	window.obj6423_onTap_runningActionsCount = 0;
} else if (window.obj6423_onTap_runningActionsCount == 0) {
	obj6423_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6423_onTap_runningActionsCount = window.obj6423_onTap_runningActionsCount - 1;
if (window.obj6423_onTap_runningActionsCount < 0) {
	window.obj6423_onTap_runningActionsCount = 0;
} else if (window.obj6423_onTap_runningActionsCount == 0) {
	obj6423_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6423_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6423_onTap_activeActionGroupIndex = -1;
		$("#obj6423").trigger("obj6423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6423) {
				console.warn("de-queueing event obj6423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6423_onTap_activeActionGroupIndex = 5;
	





















};
obj6425_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6425_onTap_activeActionGroupIndex = -1;
		$("#obj6425").trigger("obj6425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6425) {
				console.warn("de-queueing event obj6425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6425_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57670();
function switchText_57670() {
	window.obj6425_onTap_runningActionsCount = obj6425_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6425_onTap_runningActionsCount = window.obj6425_onTap_runningActionsCount - 1;
if (window.obj6425_onTap_runningActionsCount < 0) {
	window.obj6425_onTap_runningActionsCount = 0;
} else if (window.obj6425_onTap_runningActionsCount == 0) {
	obj6425_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6425_onTap_runningActionsCount = window.obj6425_onTap_runningActionsCount - 1;
if (window.obj6425_onTap_runningActionsCount < 0) {
	window.obj6425_onTap_runningActionsCount = 0;
} else if (window.obj6425_onTap_runningActionsCount == 0) {
	obj6425_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6425_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6425_onTap_activeActionGroupIndex = -1;
		$("#obj6425").trigger("obj6425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6425) {
				console.warn("de-queueing event obj6425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6425_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57671();
function runjs_57671() {
	window.obj6425_onTap_runningActionsCount = obj6425_onTap_runningActionsCount + 1;

	$("#obj6425").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6425_onTap_runningActionsCount = window.obj6425_onTap_runningActionsCount - 1;
if (window.obj6425_onTap_runningActionsCount < 0) {
	window.obj6425_onTap_runningActionsCount = 0;
} else if (window.obj6425_onTap_runningActionsCount == 0) {
	obj6425_onTap_actionGroup2();
}
	}, 1);
}







};
obj6425_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6425_onTap_activeActionGroupIndex = -1;
		$("#obj6425").trigger("obj6425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6425) {
				console.warn("de-queueing event obj6425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6425_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57672();
function playAudio_57672() {
	window.obj6425_onTap_runningActionsCount = obj6425_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6425_onTap_runningActionsCount = window.obj6425_onTap_runningActionsCount - 1;
if (window.obj6425_onTap_runningActionsCount < 0) {
	window.obj6425_onTap_runningActionsCount = 0;
} else if (window.obj6425_onTap_runningActionsCount == 0) {
	obj6425_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6425_onTap_runningActionsCount = window.obj6425_onTap_runningActionsCount - 1;
if (window.obj6425_onTap_runningActionsCount < 0) {
	window.obj6425_onTap_runningActionsCount = 0;
} else if (window.obj6425_onTap_runningActionsCount == 0) {
	obj6425_onTap_actionGroup3();
}
	}
}









};
obj6425_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6425_onTap_activeActionGroupIndex = -1;
		$("#obj6425").trigger("obj6425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6425) {
				console.warn("de-queueing event obj6425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6425_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57673();
function runjs_57673() {
	window.obj6425_onTap_runningActionsCount = obj6425_onTap_runningActionsCount + 1;

	$("#obj6425").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6425_onTap_runningActionsCount = window.obj6425_onTap_runningActionsCount - 1;
if (window.obj6425_onTap_runningActionsCount < 0) {
	window.obj6425_onTap_runningActionsCount = 0;
} else if (window.obj6425_onTap_runningActionsCount == 0) {
	obj6425_onTap_actionGroup4();
}
	}, 1);
}







};
obj6425_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6425_onTap_activeActionGroupIndex = -1;
		$("#obj6425").trigger("obj6425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6425) {
				console.warn("de-queueing event obj6425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6425_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57674();
function switchText_57674() {
	window.obj6425_onTap_runningActionsCount = obj6425_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6425_onTap_runningActionsCount = window.obj6425_onTap_runningActionsCount - 1;
if (window.obj6425_onTap_runningActionsCount < 0) {
	window.obj6425_onTap_runningActionsCount = 0;
} else if (window.obj6425_onTap_runningActionsCount == 0) {
	obj6425_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6425_onTap_runningActionsCount = window.obj6425_onTap_runningActionsCount - 1;
if (window.obj6425_onTap_runningActionsCount < 0) {
	window.obj6425_onTap_runningActionsCount = 0;
} else if (window.obj6425_onTap_runningActionsCount == 0) {
	obj6425_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6425_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6425_onTap_activeActionGroupIndex = -1;
		$("#obj6425").trigger("obj6425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6425) {
				console.warn("de-queueing event obj6425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6425_onTap_activeActionGroupIndex = 5;
	





















};
obj6427_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6680();
function runjs_6680() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6427").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup1();
}
	}, 1);
}







};
obj6427_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_6714();
function switchText_6714() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj6427_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_6681();
function runjs_6681() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6443").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup3();
}
	}, 1);
}







};
obj6427_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6682();
function runjs_6682() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6459").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup4();
}
	}, 1);
}







};
obj6427_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_6683();
function runjs_6683() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6475").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup5();
}
	}, 1);
}







};
obj6427_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_6684();
function runjs_6684() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6491").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup6();
}
	}, 1);
}







};
obj6427_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6685();
function runjs_6685() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6507").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup7();
}
	}, 1);
}







};
obj6427_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6686();
function runjs_6686() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6523").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup8();
}
	}, 1);
}







};
obj6427_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_6687();
function runjs_6687() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6539").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup9();
}
	}, 1);
}







};
obj6427_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6688();
function runjs_6688() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6555").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup10();
}
	}, 1);
}







};
obj6427_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6689();
function runjs_6689() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6571").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup11();
}
	}, 1);
}







};
obj6427_onTap_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 11;
	















//	action: Run JavaScript
runjs_6690();
function runjs_6690() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6587").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup12();
}
	}, 1);
}







};
obj6427_onTap_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 12;
	















//	action: Run JavaScript
runjs_6691();
function runjs_6691() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6603").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup13();
}
	}, 1);
}







};
obj6427_onTap_actionGroup13 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 13;
	















//	action: Run JavaScript
runjs_6692();
function runjs_6692() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;

	$("#obj6639").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup14();
}
	}, 1);
}







};
obj6427_onTap_actionGroup14 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 14;
	












//	action: playAudio
//	target: obj6662 
playAudio_6693();
function playAudio_6693() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6662")[0];
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
		    window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup15();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup15();
}
	}
}









};
obj6427_onTap_actionGroup15 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 15;
	















//	action: Switch Text
switchText_90056();
function switchText_90056() {
	window.obj6427_onTap_runningActionsCount = obj6427_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup16();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6427_onTap_runningActionsCount = window.obj6427_onTap_runningActionsCount - 1;
if (window.obj6427_onTap_runningActionsCount < 0) {
	window.obj6427_onTap_runningActionsCount = 0;
} else if (window.obj6427_onTap_runningActionsCount == 0) {
	obj6427_onTap_actionGroup16();
}
		}, 1);
	}
}






};
obj6427_onTap_actionGroup16 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6427_onTap_activeActionGroupIndex = -1;
		$("#obj6427").trigger("obj6427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6427) {
				console.warn("de-queueing event obj6427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6427_onTap_activeActionGroupIndex = 16;
	





















};
obj6429_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6429_onTap_activeActionGroupIndex = -1;
		$("#obj6429").trigger("obj6429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6429) {
				console.warn("de-queueing event obj6429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6429_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57570();
function switchText_57570() {
	window.obj6429_onTap_runningActionsCount = obj6429_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6429_onTap_runningActionsCount = window.obj6429_onTap_runningActionsCount - 1;
if (window.obj6429_onTap_runningActionsCount < 0) {
	window.obj6429_onTap_runningActionsCount = 0;
} else if (window.obj6429_onTap_runningActionsCount == 0) {
	obj6429_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6429_onTap_runningActionsCount = window.obj6429_onTap_runningActionsCount - 1;
if (window.obj6429_onTap_runningActionsCount < 0) {
	window.obj6429_onTap_runningActionsCount = 0;
} else if (window.obj6429_onTap_runningActionsCount == 0) {
	obj6429_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6429_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6429_onTap_activeActionGroupIndex = -1;
		$("#obj6429").trigger("obj6429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6429) {
				console.warn("de-queueing event obj6429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6429_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57571();
function runjs_57571() {
	window.obj6429_onTap_runningActionsCount = obj6429_onTap_runningActionsCount + 1;

	$("#obj6429").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6429_onTap_runningActionsCount = window.obj6429_onTap_runningActionsCount - 1;
if (window.obj6429_onTap_runningActionsCount < 0) {
	window.obj6429_onTap_runningActionsCount = 0;
} else if (window.obj6429_onTap_runningActionsCount == 0) {
	obj6429_onTap_actionGroup2();
}
	}, 1);
}







};
obj6429_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6429_onTap_activeActionGroupIndex = -1;
		$("#obj6429").trigger("obj6429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6429) {
				console.warn("de-queueing event obj6429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6429_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57572();
function playAudio_57572() {
	window.obj6429_onTap_runningActionsCount = obj6429_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6429_onTap_runningActionsCount = window.obj6429_onTap_runningActionsCount - 1;
if (window.obj6429_onTap_runningActionsCount < 0) {
	window.obj6429_onTap_runningActionsCount = 0;
} else if (window.obj6429_onTap_runningActionsCount == 0) {
	obj6429_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6429_onTap_runningActionsCount = window.obj6429_onTap_runningActionsCount - 1;
if (window.obj6429_onTap_runningActionsCount < 0) {
	window.obj6429_onTap_runningActionsCount = 0;
} else if (window.obj6429_onTap_runningActionsCount == 0) {
	obj6429_onTap_actionGroup3();
}
	}
}









};
obj6429_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6429_onTap_activeActionGroupIndex = -1;
		$("#obj6429").trigger("obj6429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6429) {
				console.warn("de-queueing event obj6429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6429_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57573();
function runjs_57573() {
	window.obj6429_onTap_runningActionsCount = obj6429_onTap_runningActionsCount + 1;

	$("#obj6429").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6429_onTap_runningActionsCount = window.obj6429_onTap_runningActionsCount - 1;
if (window.obj6429_onTap_runningActionsCount < 0) {
	window.obj6429_onTap_runningActionsCount = 0;
} else if (window.obj6429_onTap_runningActionsCount == 0) {
	obj6429_onTap_actionGroup4();
}
	}, 1);
}







};
obj6429_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6429_onTap_activeActionGroupIndex = -1;
		$("#obj6429").trigger("obj6429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6429) {
				console.warn("de-queueing event obj6429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6429_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57574();
function switchText_57574() {
	window.obj6429_onTap_runningActionsCount = obj6429_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6429_onTap_runningActionsCount = window.obj6429_onTap_runningActionsCount - 1;
if (window.obj6429_onTap_runningActionsCount < 0) {
	window.obj6429_onTap_runningActionsCount = 0;
} else if (window.obj6429_onTap_runningActionsCount == 0) {
	obj6429_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6429_onTap_runningActionsCount = window.obj6429_onTap_runningActionsCount - 1;
if (window.obj6429_onTap_runningActionsCount < 0) {
	window.obj6429_onTap_runningActionsCount = 0;
} else if (window.obj6429_onTap_runningActionsCount == 0) {
	obj6429_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6429_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6429_onTap_activeActionGroupIndex = -1;
		$("#obj6429").trigger("obj6429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6429) {
				console.warn("de-queueing event obj6429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6429_onTap_activeActionGroupIndex = 5;
	





















};
obj6431_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6431_onTap_activeActionGroupIndex = -1;
		$("#obj6431").trigger("obj6431_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6431) {
				console.warn("de-queueing event obj6431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6431_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6665();
function runjs_6665() {
	window.obj6431_onTap_runningActionsCount = obj6431_onTap_runningActionsCount + 1;

	$("#obj6431").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6431_onTap_runningActionsCount = window.obj6431_onTap_runningActionsCount - 1;
if (window.obj6431_onTap_runningActionsCount < 0) {
	window.obj6431_onTap_runningActionsCount = 0;
} else if (window.obj6431_onTap_runningActionsCount == 0) {
	obj6431_onTap_actionGroup1();
}
	}, 1);
}







};
obj6431_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6431_onTap_activeActionGroupIndex = -1;
		$("#obj6431").trigger("obj6431_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6431) {
				console.warn("de-queueing event obj6431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6431_onTap_activeActionGroupIndex = 1;
	





















};
obj6435_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6435_onTap_activeActionGroupIndex = -1;
		$("#obj6435").trigger("obj6435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6435) {
				console.warn("de-queueing event obj6435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6435_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57675();
function switchText_57675() {
	window.obj6435_onTap_runningActionsCount = obj6435_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6435_onTap_runningActionsCount = window.obj6435_onTap_runningActionsCount - 1;
if (window.obj6435_onTap_runningActionsCount < 0) {
	window.obj6435_onTap_runningActionsCount = 0;
} else if (window.obj6435_onTap_runningActionsCount == 0) {
	obj6435_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6435_onTap_runningActionsCount = window.obj6435_onTap_runningActionsCount - 1;
if (window.obj6435_onTap_runningActionsCount < 0) {
	window.obj6435_onTap_runningActionsCount = 0;
} else if (window.obj6435_onTap_runningActionsCount == 0) {
	obj6435_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6435_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6435_onTap_activeActionGroupIndex = -1;
		$("#obj6435").trigger("obj6435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6435) {
				console.warn("de-queueing event obj6435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6435_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57676();
function runjs_57676() {
	window.obj6435_onTap_runningActionsCount = obj6435_onTap_runningActionsCount + 1;

	$("#obj6435").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6435_onTap_runningActionsCount = window.obj6435_onTap_runningActionsCount - 1;
if (window.obj6435_onTap_runningActionsCount < 0) {
	window.obj6435_onTap_runningActionsCount = 0;
} else if (window.obj6435_onTap_runningActionsCount == 0) {
	obj6435_onTap_actionGroup2();
}
	}, 1);
}







};
obj6435_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6435_onTap_activeActionGroupIndex = -1;
		$("#obj6435").trigger("obj6435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6435) {
				console.warn("de-queueing event obj6435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6435_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57677();
function playAudio_57677() {
	window.obj6435_onTap_runningActionsCount = obj6435_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6435_onTap_runningActionsCount = window.obj6435_onTap_runningActionsCount - 1;
if (window.obj6435_onTap_runningActionsCount < 0) {
	window.obj6435_onTap_runningActionsCount = 0;
} else if (window.obj6435_onTap_runningActionsCount == 0) {
	obj6435_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6435_onTap_runningActionsCount = window.obj6435_onTap_runningActionsCount - 1;
if (window.obj6435_onTap_runningActionsCount < 0) {
	window.obj6435_onTap_runningActionsCount = 0;
} else if (window.obj6435_onTap_runningActionsCount == 0) {
	obj6435_onTap_actionGroup3();
}
	}
}









};
obj6435_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6435_onTap_activeActionGroupIndex = -1;
		$("#obj6435").trigger("obj6435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6435) {
				console.warn("de-queueing event obj6435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6435_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57678();
function runjs_57678() {
	window.obj6435_onTap_runningActionsCount = obj6435_onTap_runningActionsCount + 1;

	$("#obj6435").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6435_onTap_runningActionsCount = window.obj6435_onTap_runningActionsCount - 1;
if (window.obj6435_onTap_runningActionsCount < 0) {
	window.obj6435_onTap_runningActionsCount = 0;
} else if (window.obj6435_onTap_runningActionsCount == 0) {
	obj6435_onTap_actionGroup4();
}
	}, 1);
}







};
obj6435_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6435_onTap_activeActionGroupIndex = -1;
		$("#obj6435").trigger("obj6435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6435) {
				console.warn("de-queueing event obj6435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6435_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57679();
function switchText_57679() {
	window.obj6435_onTap_runningActionsCount = obj6435_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6435_onTap_runningActionsCount = window.obj6435_onTap_runningActionsCount - 1;
if (window.obj6435_onTap_runningActionsCount < 0) {
	window.obj6435_onTap_runningActionsCount = 0;
} else if (window.obj6435_onTap_runningActionsCount == 0) {
	obj6435_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6435_onTap_runningActionsCount = window.obj6435_onTap_runningActionsCount - 1;
if (window.obj6435_onTap_runningActionsCount < 0) {
	window.obj6435_onTap_runningActionsCount = 0;
} else if (window.obj6435_onTap_runningActionsCount == 0) {
	obj6435_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6435_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6435_onTap_activeActionGroupIndex = -1;
		$("#obj6435").trigger("obj6435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6435) {
				console.warn("de-queueing event obj6435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6435_onTap_activeActionGroupIndex = 5;
	





















};
obj6437_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6437_onTap_activeActionGroupIndex = -1;
		$("#obj6437").trigger("obj6437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6437) {
				console.warn("de-queueing event obj6437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6437_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57680();
function switchText_57680() {
	window.obj6437_onTap_runningActionsCount = obj6437_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6437_onTap_runningActionsCount = window.obj6437_onTap_runningActionsCount - 1;
if (window.obj6437_onTap_runningActionsCount < 0) {
	window.obj6437_onTap_runningActionsCount = 0;
} else if (window.obj6437_onTap_runningActionsCount == 0) {
	obj6437_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6437_onTap_runningActionsCount = window.obj6437_onTap_runningActionsCount - 1;
if (window.obj6437_onTap_runningActionsCount < 0) {
	window.obj6437_onTap_runningActionsCount = 0;
} else if (window.obj6437_onTap_runningActionsCount == 0) {
	obj6437_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6437_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6437_onTap_activeActionGroupIndex = -1;
		$("#obj6437").trigger("obj6437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6437) {
				console.warn("de-queueing event obj6437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6437_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57681();
function runjs_57681() {
	window.obj6437_onTap_runningActionsCount = obj6437_onTap_runningActionsCount + 1;

	$("#obj6437").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6437_onTap_runningActionsCount = window.obj6437_onTap_runningActionsCount - 1;
if (window.obj6437_onTap_runningActionsCount < 0) {
	window.obj6437_onTap_runningActionsCount = 0;
} else if (window.obj6437_onTap_runningActionsCount == 0) {
	obj6437_onTap_actionGroup2();
}
	}, 1);
}







};
obj6437_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6437_onTap_activeActionGroupIndex = -1;
		$("#obj6437").trigger("obj6437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6437) {
				console.warn("de-queueing event obj6437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6437_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57682();
function playAudio_57682() {
	window.obj6437_onTap_runningActionsCount = obj6437_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6437_onTap_runningActionsCount = window.obj6437_onTap_runningActionsCount - 1;
if (window.obj6437_onTap_runningActionsCount < 0) {
	window.obj6437_onTap_runningActionsCount = 0;
} else if (window.obj6437_onTap_runningActionsCount == 0) {
	obj6437_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6437_onTap_runningActionsCount = window.obj6437_onTap_runningActionsCount - 1;
if (window.obj6437_onTap_runningActionsCount < 0) {
	window.obj6437_onTap_runningActionsCount = 0;
} else if (window.obj6437_onTap_runningActionsCount == 0) {
	obj6437_onTap_actionGroup3();
}
	}
}









};
obj6437_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6437_onTap_activeActionGroupIndex = -1;
		$("#obj6437").trigger("obj6437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6437) {
				console.warn("de-queueing event obj6437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6437_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57683();
function runjs_57683() {
	window.obj6437_onTap_runningActionsCount = obj6437_onTap_runningActionsCount + 1;

	$("#obj6437").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6437_onTap_runningActionsCount = window.obj6437_onTap_runningActionsCount - 1;
if (window.obj6437_onTap_runningActionsCount < 0) {
	window.obj6437_onTap_runningActionsCount = 0;
} else if (window.obj6437_onTap_runningActionsCount == 0) {
	obj6437_onTap_actionGroup4();
}
	}, 1);
}







};
obj6437_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6437_onTap_activeActionGroupIndex = -1;
		$("#obj6437").trigger("obj6437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6437) {
				console.warn("de-queueing event obj6437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6437_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57684();
function switchText_57684() {
	window.obj6437_onTap_runningActionsCount = obj6437_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6437_onTap_runningActionsCount = window.obj6437_onTap_runningActionsCount - 1;
if (window.obj6437_onTap_runningActionsCount < 0) {
	window.obj6437_onTap_runningActionsCount = 0;
} else if (window.obj6437_onTap_runningActionsCount == 0) {
	obj6437_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6437_onTap_runningActionsCount = window.obj6437_onTap_runningActionsCount - 1;
if (window.obj6437_onTap_runningActionsCount < 0) {
	window.obj6437_onTap_runningActionsCount = 0;
} else if (window.obj6437_onTap_runningActionsCount == 0) {
	obj6437_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6437_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6437_onTap_activeActionGroupIndex = -1;
		$("#obj6437").trigger("obj6437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6437) {
				console.warn("de-queueing event obj6437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6437_onTap_activeActionGroupIndex = 5;
	





















};
obj6439_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6439_onTap_activeActionGroupIndex = -1;
		$("#obj6439").trigger("obj6439_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6439) {
				console.warn("de-queueing event obj6439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6439_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57685();
function switchText_57685() {
	window.obj6439_onTap_runningActionsCount = obj6439_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6439_onTap_runningActionsCount = window.obj6439_onTap_runningActionsCount - 1;
if (window.obj6439_onTap_runningActionsCount < 0) {
	window.obj6439_onTap_runningActionsCount = 0;
} else if (window.obj6439_onTap_runningActionsCount == 0) {
	obj6439_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6439_onTap_runningActionsCount = window.obj6439_onTap_runningActionsCount - 1;
if (window.obj6439_onTap_runningActionsCount < 0) {
	window.obj6439_onTap_runningActionsCount = 0;
} else if (window.obj6439_onTap_runningActionsCount == 0) {
	obj6439_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6439_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6439_onTap_activeActionGroupIndex = -1;
		$("#obj6439").trigger("obj6439_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6439) {
				console.warn("de-queueing event obj6439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6439_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57686();
function runjs_57686() {
	window.obj6439_onTap_runningActionsCount = obj6439_onTap_runningActionsCount + 1;

	$("#obj6439").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6439_onTap_runningActionsCount = window.obj6439_onTap_runningActionsCount - 1;
if (window.obj6439_onTap_runningActionsCount < 0) {
	window.obj6439_onTap_runningActionsCount = 0;
} else if (window.obj6439_onTap_runningActionsCount == 0) {
	obj6439_onTap_actionGroup2();
}
	}, 1);
}







};
obj6439_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6439_onTap_activeActionGroupIndex = -1;
		$("#obj6439").trigger("obj6439_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6439) {
				console.warn("de-queueing event obj6439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6439_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57687();
function playAudio_57687() {
	window.obj6439_onTap_runningActionsCount = obj6439_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6439_onTap_runningActionsCount = window.obj6439_onTap_runningActionsCount - 1;
if (window.obj6439_onTap_runningActionsCount < 0) {
	window.obj6439_onTap_runningActionsCount = 0;
} else if (window.obj6439_onTap_runningActionsCount == 0) {
	obj6439_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6439_onTap_runningActionsCount = window.obj6439_onTap_runningActionsCount - 1;
if (window.obj6439_onTap_runningActionsCount < 0) {
	window.obj6439_onTap_runningActionsCount = 0;
} else if (window.obj6439_onTap_runningActionsCount == 0) {
	obj6439_onTap_actionGroup3();
}
	}
}









};
obj6439_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6439_onTap_activeActionGroupIndex = -1;
		$("#obj6439").trigger("obj6439_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6439) {
				console.warn("de-queueing event obj6439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6439_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57688();
function runjs_57688() {
	window.obj6439_onTap_runningActionsCount = obj6439_onTap_runningActionsCount + 1;

	$("#obj6439").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6439_onTap_runningActionsCount = window.obj6439_onTap_runningActionsCount - 1;
if (window.obj6439_onTap_runningActionsCount < 0) {
	window.obj6439_onTap_runningActionsCount = 0;
} else if (window.obj6439_onTap_runningActionsCount == 0) {
	obj6439_onTap_actionGroup4();
}
	}, 1);
}







};
obj6439_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6439_onTap_activeActionGroupIndex = -1;
		$("#obj6439").trigger("obj6439_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6439) {
				console.warn("de-queueing event obj6439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6439_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57689();
function switchText_57689() {
	window.obj6439_onTap_runningActionsCount = obj6439_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6439_onTap_runningActionsCount = window.obj6439_onTap_runningActionsCount - 1;
if (window.obj6439_onTap_runningActionsCount < 0) {
	window.obj6439_onTap_runningActionsCount = 0;
} else if (window.obj6439_onTap_runningActionsCount == 0) {
	obj6439_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6439_onTap_runningActionsCount = window.obj6439_onTap_runningActionsCount - 1;
if (window.obj6439_onTap_runningActionsCount < 0) {
	window.obj6439_onTap_runningActionsCount = 0;
} else if (window.obj6439_onTap_runningActionsCount == 0) {
	obj6439_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6439_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6439_onTap_activeActionGroupIndex = -1;
		$("#obj6439").trigger("obj6439_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6439) {
				console.warn("de-queueing event obj6439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6439_onTap_activeActionGroupIndex = 5;
	





















};
obj6441_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6441_onTap_activeActionGroupIndex = -1;
		$("#obj6441").trigger("obj6441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6441) {
				console.warn("de-queueing event obj6441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6441_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57690();
function switchText_57690() {
	window.obj6441_onTap_runningActionsCount = obj6441_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6441_onTap_runningActionsCount = window.obj6441_onTap_runningActionsCount - 1;
if (window.obj6441_onTap_runningActionsCount < 0) {
	window.obj6441_onTap_runningActionsCount = 0;
} else if (window.obj6441_onTap_runningActionsCount == 0) {
	obj6441_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6441_onTap_runningActionsCount = window.obj6441_onTap_runningActionsCount - 1;
if (window.obj6441_onTap_runningActionsCount < 0) {
	window.obj6441_onTap_runningActionsCount = 0;
} else if (window.obj6441_onTap_runningActionsCount == 0) {
	obj6441_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6441_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6441_onTap_activeActionGroupIndex = -1;
		$("#obj6441").trigger("obj6441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6441) {
				console.warn("de-queueing event obj6441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6441_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57691();
function runjs_57691() {
	window.obj6441_onTap_runningActionsCount = obj6441_onTap_runningActionsCount + 1;

	$("#obj6441").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6441_onTap_runningActionsCount = window.obj6441_onTap_runningActionsCount - 1;
if (window.obj6441_onTap_runningActionsCount < 0) {
	window.obj6441_onTap_runningActionsCount = 0;
} else if (window.obj6441_onTap_runningActionsCount == 0) {
	obj6441_onTap_actionGroup2();
}
	}, 1);
}







};
obj6441_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6441_onTap_activeActionGroupIndex = -1;
		$("#obj6441").trigger("obj6441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6441) {
				console.warn("de-queueing event obj6441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6441_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57692();
function playAudio_57692() {
	window.obj6441_onTap_runningActionsCount = obj6441_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6441_onTap_runningActionsCount = window.obj6441_onTap_runningActionsCount - 1;
if (window.obj6441_onTap_runningActionsCount < 0) {
	window.obj6441_onTap_runningActionsCount = 0;
} else if (window.obj6441_onTap_runningActionsCount == 0) {
	obj6441_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6441_onTap_runningActionsCount = window.obj6441_onTap_runningActionsCount - 1;
if (window.obj6441_onTap_runningActionsCount < 0) {
	window.obj6441_onTap_runningActionsCount = 0;
} else if (window.obj6441_onTap_runningActionsCount == 0) {
	obj6441_onTap_actionGroup3();
}
	}
}









};
obj6441_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6441_onTap_activeActionGroupIndex = -1;
		$("#obj6441").trigger("obj6441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6441) {
				console.warn("de-queueing event obj6441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6441_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57693();
function runjs_57693() {
	window.obj6441_onTap_runningActionsCount = obj6441_onTap_runningActionsCount + 1;

	$("#obj6441").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6441_onTap_runningActionsCount = window.obj6441_onTap_runningActionsCount - 1;
if (window.obj6441_onTap_runningActionsCount < 0) {
	window.obj6441_onTap_runningActionsCount = 0;
} else if (window.obj6441_onTap_runningActionsCount == 0) {
	obj6441_onTap_actionGroup4();
}
	}, 1);
}







};
obj6441_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6441_onTap_activeActionGroupIndex = -1;
		$("#obj6441").trigger("obj6441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6441) {
				console.warn("de-queueing event obj6441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6441_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57694();
function switchText_57694() {
	window.obj6441_onTap_runningActionsCount = obj6441_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6441_onTap_runningActionsCount = window.obj6441_onTap_runningActionsCount - 1;
if (window.obj6441_onTap_runningActionsCount < 0) {
	window.obj6441_onTap_runningActionsCount = 0;
} else if (window.obj6441_onTap_runningActionsCount == 0) {
	obj6441_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6441_onTap_runningActionsCount = window.obj6441_onTap_runningActionsCount - 1;
if (window.obj6441_onTap_runningActionsCount < 0) {
	window.obj6441_onTap_runningActionsCount = 0;
} else if (window.obj6441_onTap_runningActionsCount == 0) {
	obj6441_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6441_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6441_onTap_activeActionGroupIndex = -1;
		$("#obj6441").trigger("obj6441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6441) {
				console.warn("de-queueing event obj6441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6441_onTap_activeActionGroupIndex = 5;
	





















};
obj6445_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6445_onTap_activeActionGroupIndex = -1;
		$("#obj6445").trigger("obj6445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6445) {
				console.warn("de-queueing event obj6445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6445_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57575();
function switchText_57575() {
	window.obj6445_onTap_runningActionsCount = obj6445_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6445_onTap_runningActionsCount = window.obj6445_onTap_runningActionsCount - 1;
if (window.obj6445_onTap_runningActionsCount < 0) {
	window.obj6445_onTap_runningActionsCount = 0;
} else if (window.obj6445_onTap_runningActionsCount == 0) {
	obj6445_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6445_onTap_runningActionsCount = window.obj6445_onTap_runningActionsCount - 1;
if (window.obj6445_onTap_runningActionsCount < 0) {
	window.obj6445_onTap_runningActionsCount = 0;
} else if (window.obj6445_onTap_runningActionsCount == 0) {
	obj6445_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6445_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6445_onTap_activeActionGroupIndex = -1;
		$("#obj6445").trigger("obj6445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6445) {
				console.warn("de-queueing event obj6445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6445_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57576();
function runjs_57576() {
	window.obj6445_onTap_runningActionsCount = obj6445_onTap_runningActionsCount + 1;

	$("#obj6445").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6445_onTap_runningActionsCount = window.obj6445_onTap_runningActionsCount - 1;
if (window.obj6445_onTap_runningActionsCount < 0) {
	window.obj6445_onTap_runningActionsCount = 0;
} else if (window.obj6445_onTap_runningActionsCount == 0) {
	obj6445_onTap_actionGroup2();
}
	}, 1);
}







};
obj6445_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6445_onTap_activeActionGroupIndex = -1;
		$("#obj6445").trigger("obj6445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6445) {
				console.warn("de-queueing event obj6445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6445_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57577();
function playAudio_57577() {
	window.obj6445_onTap_runningActionsCount = obj6445_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6445_onTap_runningActionsCount = window.obj6445_onTap_runningActionsCount - 1;
if (window.obj6445_onTap_runningActionsCount < 0) {
	window.obj6445_onTap_runningActionsCount = 0;
} else if (window.obj6445_onTap_runningActionsCount == 0) {
	obj6445_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6445_onTap_runningActionsCount = window.obj6445_onTap_runningActionsCount - 1;
if (window.obj6445_onTap_runningActionsCount < 0) {
	window.obj6445_onTap_runningActionsCount = 0;
} else if (window.obj6445_onTap_runningActionsCount == 0) {
	obj6445_onTap_actionGroup3();
}
	}
}









};
obj6445_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6445_onTap_activeActionGroupIndex = -1;
		$("#obj6445").trigger("obj6445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6445) {
				console.warn("de-queueing event obj6445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6445_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57578();
function runjs_57578() {
	window.obj6445_onTap_runningActionsCount = obj6445_onTap_runningActionsCount + 1;

	$("#obj6445").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6445_onTap_runningActionsCount = window.obj6445_onTap_runningActionsCount - 1;
if (window.obj6445_onTap_runningActionsCount < 0) {
	window.obj6445_onTap_runningActionsCount = 0;
} else if (window.obj6445_onTap_runningActionsCount == 0) {
	obj6445_onTap_actionGroup4();
}
	}, 1);
}







};
obj6445_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6445_onTap_activeActionGroupIndex = -1;
		$("#obj6445").trigger("obj6445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6445) {
				console.warn("de-queueing event obj6445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6445_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57579();
function switchText_57579() {
	window.obj6445_onTap_runningActionsCount = obj6445_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6445_onTap_runningActionsCount = window.obj6445_onTap_runningActionsCount - 1;
if (window.obj6445_onTap_runningActionsCount < 0) {
	window.obj6445_onTap_runningActionsCount = 0;
} else if (window.obj6445_onTap_runningActionsCount == 0) {
	obj6445_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6445_onTap_runningActionsCount = window.obj6445_onTap_runningActionsCount - 1;
if (window.obj6445_onTap_runningActionsCount < 0) {
	window.obj6445_onTap_runningActionsCount = 0;
} else if (window.obj6445_onTap_runningActionsCount == 0) {
	obj6445_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6445_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6445_onTap_activeActionGroupIndex = -1;
		$("#obj6445").trigger("obj6445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6445) {
				console.warn("de-queueing event obj6445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6445_onTap_activeActionGroupIndex = 5;
	





















};
obj6447_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6666();
function runjs_6666() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6447").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup1();
}
	}, 1);
}







};
obj6447_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_6715();
function switchText_6715() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj6447_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_6668();
function runjs_6668() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6463").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup3();
}
	}, 1);
}







};
obj6447_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6669();
function runjs_6669() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6479").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup4();
}
	}, 1);
}







};
obj6447_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_6670();
function runjs_6670() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6495").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup5();
}
	}, 1);
}







};
obj6447_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_6671();
function runjs_6671() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6511").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup6();
}
	}, 1);
}







};
obj6447_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6672();
function runjs_6672() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6527").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup7();
}
	}, 1);
}







};
obj6447_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6673();
function runjs_6673() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6543").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup8();
}
	}, 1);
}







};
obj6447_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_6674();
function runjs_6674() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6559").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup9();
}
	}, 1);
}







};
obj6447_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6675();
function runjs_6675() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6575").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup10();
}
	}, 1);
}







};
obj6447_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6676();
function runjs_6676() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6591").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup11();
}
	}, 1);
}







};
obj6447_onTap_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 11;
	















//	action: Run JavaScript
runjs_6677();
function runjs_6677() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;

	$("#obj6641").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup12();
}
	}, 1);
}







};
obj6447_onTap_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 12;
	












//	action: playAudio
//	target: obj6662 
playAudio_6678();
function playAudio_6678() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6662")[0];
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
		    window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup13();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup13();
}
	}
}









};
obj6447_onTap_actionGroup13 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 13;
	















//	action: Switch Text
switchText_90057();
function switchText_90057() {
	window.obj6447_onTap_runningActionsCount = obj6447_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup14();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6447_onTap_runningActionsCount = window.obj6447_onTap_runningActionsCount - 1;
if (window.obj6447_onTap_runningActionsCount < 0) {
	window.obj6447_onTap_runningActionsCount = 0;
} else if (window.obj6447_onTap_runningActionsCount == 0) {
	obj6447_onTap_actionGroup14();
}
		}, 1);
	}
}






};
obj6447_onTap_actionGroup14 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6447_onTap_activeActionGroupIndex = -1;
		$("#obj6447").trigger("obj6447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6447) {
				console.warn("de-queueing event obj6447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6447_onTap_activeActionGroupIndex = 14;
	





















};
obj6449_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6449_onTap_activeActionGroupIndex = -1;
		$("#obj6449").trigger("obj6449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6449) {
				console.warn("de-queueing event obj6449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6449_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57725();
function switchText_57725() {
	window.obj6449_onTap_runningActionsCount = obj6449_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6449_onTap_runningActionsCount = window.obj6449_onTap_runningActionsCount - 1;
if (window.obj6449_onTap_runningActionsCount < 0) {
	window.obj6449_onTap_runningActionsCount = 0;
} else if (window.obj6449_onTap_runningActionsCount == 0) {
	obj6449_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6449_onTap_runningActionsCount = window.obj6449_onTap_runningActionsCount - 1;
if (window.obj6449_onTap_runningActionsCount < 0) {
	window.obj6449_onTap_runningActionsCount = 0;
} else if (window.obj6449_onTap_runningActionsCount == 0) {
	obj6449_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6449_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6449_onTap_activeActionGroupIndex = -1;
		$("#obj6449").trigger("obj6449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6449) {
				console.warn("de-queueing event obj6449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6449_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57726();
function runjs_57726() {
	window.obj6449_onTap_runningActionsCount = obj6449_onTap_runningActionsCount + 1;

	$("#obj6449").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6449_onTap_runningActionsCount = window.obj6449_onTap_runningActionsCount - 1;
if (window.obj6449_onTap_runningActionsCount < 0) {
	window.obj6449_onTap_runningActionsCount = 0;
} else if (window.obj6449_onTap_runningActionsCount == 0) {
	obj6449_onTap_actionGroup2();
}
	}, 1);
}







};
obj6449_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6449_onTap_activeActionGroupIndex = -1;
		$("#obj6449").trigger("obj6449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6449) {
				console.warn("de-queueing event obj6449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6449_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57727();
function playAudio_57727() {
	window.obj6449_onTap_runningActionsCount = obj6449_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6449_onTap_runningActionsCount = window.obj6449_onTap_runningActionsCount - 1;
if (window.obj6449_onTap_runningActionsCount < 0) {
	window.obj6449_onTap_runningActionsCount = 0;
} else if (window.obj6449_onTap_runningActionsCount == 0) {
	obj6449_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6449_onTap_runningActionsCount = window.obj6449_onTap_runningActionsCount - 1;
if (window.obj6449_onTap_runningActionsCount < 0) {
	window.obj6449_onTap_runningActionsCount = 0;
} else if (window.obj6449_onTap_runningActionsCount == 0) {
	obj6449_onTap_actionGroup3();
}
	}
}









};
obj6449_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6449_onTap_activeActionGroupIndex = -1;
		$("#obj6449").trigger("obj6449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6449) {
				console.warn("de-queueing event obj6449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6449_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57728();
function runjs_57728() {
	window.obj6449_onTap_runningActionsCount = obj6449_onTap_runningActionsCount + 1;

	$("#obj6449").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6449_onTap_runningActionsCount = window.obj6449_onTap_runningActionsCount - 1;
if (window.obj6449_onTap_runningActionsCount < 0) {
	window.obj6449_onTap_runningActionsCount = 0;
} else if (window.obj6449_onTap_runningActionsCount == 0) {
	obj6449_onTap_actionGroup4();
}
	}, 1);
}







};
obj6449_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6449_onTap_activeActionGroupIndex = -1;
		$("#obj6449").trigger("obj6449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6449) {
				console.warn("de-queueing event obj6449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6449_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57729();
function switchText_57729() {
	window.obj6449_onTap_runningActionsCount = obj6449_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6449_onTap_runningActionsCount = window.obj6449_onTap_runningActionsCount - 1;
if (window.obj6449_onTap_runningActionsCount < 0) {
	window.obj6449_onTap_runningActionsCount = 0;
} else if (window.obj6449_onTap_runningActionsCount == 0) {
	obj6449_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6449_onTap_runningActionsCount = window.obj6449_onTap_runningActionsCount - 1;
if (window.obj6449_onTap_runningActionsCount < 0) {
	window.obj6449_onTap_runningActionsCount = 0;
} else if (window.obj6449_onTap_runningActionsCount == 0) {
	obj6449_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6449_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6449_onTap_activeActionGroupIndex = -1;
		$("#obj6449").trigger("obj6449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6449) {
				console.warn("de-queueing event obj6449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6449_onTap_activeActionGroupIndex = 5;
	





















};
obj6453_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6453_onTap_activeActionGroupIndex = -1;
		$("#obj6453").trigger("obj6453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6453) {
				console.warn("de-queueing event obj6453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6453_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57695();
function switchText_57695() {
	window.obj6453_onTap_runningActionsCount = obj6453_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6453_onTap_runningActionsCount = window.obj6453_onTap_runningActionsCount - 1;
if (window.obj6453_onTap_runningActionsCount < 0) {
	window.obj6453_onTap_runningActionsCount = 0;
} else if (window.obj6453_onTap_runningActionsCount == 0) {
	obj6453_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6453_onTap_runningActionsCount = window.obj6453_onTap_runningActionsCount - 1;
if (window.obj6453_onTap_runningActionsCount < 0) {
	window.obj6453_onTap_runningActionsCount = 0;
} else if (window.obj6453_onTap_runningActionsCount == 0) {
	obj6453_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6453_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6453_onTap_activeActionGroupIndex = -1;
		$("#obj6453").trigger("obj6453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6453) {
				console.warn("de-queueing event obj6453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6453_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57696();
function runjs_57696() {
	window.obj6453_onTap_runningActionsCount = obj6453_onTap_runningActionsCount + 1;

	$("#obj6453").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6453_onTap_runningActionsCount = window.obj6453_onTap_runningActionsCount - 1;
if (window.obj6453_onTap_runningActionsCount < 0) {
	window.obj6453_onTap_runningActionsCount = 0;
} else if (window.obj6453_onTap_runningActionsCount == 0) {
	obj6453_onTap_actionGroup2();
}
	}, 1);
}







};
obj6453_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6453_onTap_activeActionGroupIndex = -1;
		$("#obj6453").trigger("obj6453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6453) {
				console.warn("de-queueing event obj6453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6453_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57697();
function playAudio_57697() {
	window.obj6453_onTap_runningActionsCount = obj6453_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6453_onTap_runningActionsCount = window.obj6453_onTap_runningActionsCount - 1;
if (window.obj6453_onTap_runningActionsCount < 0) {
	window.obj6453_onTap_runningActionsCount = 0;
} else if (window.obj6453_onTap_runningActionsCount == 0) {
	obj6453_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6453_onTap_runningActionsCount = window.obj6453_onTap_runningActionsCount - 1;
if (window.obj6453_onTap_runningActionsCount < 0) {
	window.obj6453_onTap_runningActionsCount = 0;
} else if (window.obj6453_onTap_runningActionsCount == 0) {
	obj6453_onTap_actionGroup3();
}
	}
}









};
obj6453_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6453_onTap_activeActionGroupIndex = -1;
		$("#obj6453").trigger("obj6453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6453) {
				console.warn("de-queueing event obj6453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6453_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57698();
function runjs_57698() {
	window.obj6453_onTap_runningActionsCount = obj6453_onTap_runningActionsCount + 1;

	$("#obj6453").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6453_onTap_runningActionsCount = window.obj6453_onTap_runningActionsCount - 1;
if (window.obj6453_onTap_runningActionsCount < 0) {
	window.obj6453_onTap_runningActionsCount = 0;
} else if (window.obj6453_onTap_runningActionsCount == 0) {
	obj6453_onTap_actionGroup4();
}
	}, 1);
}







};
obj6453_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6453_onTap_activeActionGroupIndex = -1;
		$("#obj6453").trigger("obj6453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6453) {
				console.warn("de-queueing event obj6453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6453_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57699();
function switchText_57699() {
	window.obj6453_onTap_runningActionsCount = obj6453_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6453_onTap_runningActionsCount = window.obj6453_onTap_runningActionsCount - 1;
if (window.obj6453_onTap_runningActionsCount < 0) {
	window.obj6453_onTap_runningActionsCount = 0;
} else if (window.obj6453_onTap_runningActionsCount == 0) {
	obj6453_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6453_onTap_runningActionsCount = window.obj6453_onTap_runningActionsCount - 1;
if (window.obj6453_onTap_runningActionsCount < 0) {
	window.obj6453_onTap_runningActionsCount = 0;
} else if (window.obj6453_onTap_runningActionsCount == 0) {
	obj6453_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6453_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6453_onTap_activeActionGroupIndex = -1;
		$("#obj6453").trigger("obj6453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6453) {
				console.warn("de-queueing event obj6453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6453_onTap_activeActionGroupIndex = 5;
	





















};
obj6455_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6455_onTap_activeActionGroupIndex = -1;
		$("#obj6455").trigger("obj6455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6455) {
				console.warn("de-queueing event obj6455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6455_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57700();
function switchText_57700() {
	window.obj6455_onTap_runningActionsCount = obj6455_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6455_onTap_runningActionsCount = window.obj6455_onTap_runningActionsCount - 1;
if (window.obj6455_onTap_runningActionsCount < 0) {
	window.obj6455_onTap_runningActionsCount = 0;
} else if (window.obj6455_onTap_runningActionsCount == 0) {
	obj6455_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6455_onTap_runningActionsCount = window.obj6455_onTap_runningActionsCount - 1;
if (window.obj6455_onTap_runningActionsCount < 0) {
	window.obj6455_onTap_runningActionsCount = 0;
} else if (window.obj6455_onTap_runningActionsCount == 0) {
	obj6455_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6455_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6455_onTap_activeActionGroupIndex = -1;
		$("#obj6455").trigger("obj6455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6455) {
				console.warn("de-queueing event obj6455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6455_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57701();
function runjs_57701() {
	window.obj6455_onTap_runningActionsCount = obj6455_onTap_runningActionsCount + 1;

	$("#obj6455").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6455_onTap_runningActionsCount = window.obj6455_onTap_runningActionsCount - 1;
if (window.obj6455_onTap_runningActionsCount < 0) {
	window.obj6455_onTap_runningActionsCount = 0;
} else if (window.obj6455_onTap_runningActionsCount == 0) {
	obj6455_onTap_actionGroup2();
}
	}, 1);
}







};
obj6455_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6455_onTap_activeActionGroupIndex = -1;
		$("#obj6455").trigger("obj6455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6455) {
				console.warn("de-queueing event obj6455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6455_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57702();
function playAudio_57702() {
	window.obj6455_onTap_runningActionsCount = obj6455_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6455_onTap_runningActionsCount = window.obj6455_onTap_runningActionsCount - 1;
if (window.obj6455_onTap_runningActionsCount < 0) {
	window.obj6455_onTap_runningActionsCount = 0;
} else if (window.obj6455_onTap_runningActionsCount == 0) {
	obj6455_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6455_onTap_runningActionsCount = window.obj6455_onTap_runningActionsCount - 1;
if (window.obj6455_onTap_runningActionsCount < 0) {
	window.obj6455_onTap_runningActionsCount = 0;
} else if (window.obj6455_onTap_runningActionsCount == 0) {
	obj6455_onTap_actionGroup3();
}
	}
}









};
obj6455_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6455_onTap_activeActionGroupIndex = -1;
		$("#obj6455").trigger("obj6455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6455) {
				console.warn("de-queueing event obj6455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6455_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57703();
function runjs_57703() {
	window.obj6455_onTap_runningActionsCount = obj6455_onTap_runningActionsCount + 1;

	$("#obj6455").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6455_onTap_runningActionsCount = window.obj6455_onTap_runningActionsCount - 1;
if (window.obj6455_onTap_runningActionsCount < 0) {
	window.obj6455_onTap_runningActionsCount = 0;
} else if (window.obj6455_onTap_runningActionsCount == 0) {
	obj6455_onTap_actionGroup4();
}
	}, 1);
}







};
obj6455_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6455_onTap_activeActionGroupIndex = -1;
		$("#obj6455").trigger("obj6455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6455) {
				console.warn("de-queueing event obj6455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6455_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57704();
function switchText_57704() {
	window.obj6455_onTap_runningActionsCount = obj6455_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6455_onTap_runningActionsCount = window.obj6455_onTap_runningActionsCount - 1;
if (window.obj6455_onTap_runningActionsCount < 0) {
	window.obj6455_onTap_runningActionsCount = 0;
} else if (window.obj6455_onTap_runningActionsCount == 0) {
	obj6455_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6455_onTap_runningActionsCount = window.obj6455_onTap_runningActionsCount - 1;
if (window.obj6455_onTap_runningActionsCount < 0) {
	window.obj6455_onTap_runningActionsCount = 0;
} else if (window.obj6455_onTap_runningActionsCount == 0) {
	obj6455_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6455_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6455_onTap_activeActionGroupIndex = -1;
		$("#obj6455").trigger("obj6455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6455) {
				console.warn("de-queueing event obj6455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6455_onTap_activeActionGroupIndex = 5;
	





















};
obj6457_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6457_onTap_activeActionGroupIndex = -1;
		$("#obj6457").trigger("obj6457_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6457) {
				console.warn("de-queueing event obj6457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6457_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57705();
function switchText_57705() {
	window.obj6457_onTap_runningActionsCount = obj6457_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6457_onTap_runningActionsCount = window.obj6457_onTap_runningActionsCount - 1;
if (window.obj6457_onTap_runningActionsCount < 0) {
	window.obj6457_onTap_runningActionsCount = 0;
} else if (window.obj6457_onTap_runningActionsCount == 0) {
	obj6457_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6457_onTap_runningActionsCount = window.obj6457_onTap_runningActionsCount - 1;
if (window.obj6457_onTap_runningActionsCount < 0) {
	window.obj6457_onTap_runningActionsCount = 0;
} else if (window.obj6457_onTap_runningActionsCount == 0) {
	obj6457_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6457_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6457_onTap_activeActionGroupIndex = -1;
		$("#obj6457").trigger("obj6457_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6457) {
				console.warn("de-queueing event obj6457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6457_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57706();
function runjs_57706() {
	window.obj6457_onTap_runningActionsCount = obj6457_onTap_runningActionsCount + 1;

	$("#obj6457").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6457_onTap_runningActionsCount = window.obj6457_onTap_runningActionsCount - 1;
if (window.obj6457_onTap_runningActionsCount < 0) {
	window.obj6457_onTap_runningActionsCount = 0;
} else if (window.obj6457_onTap_runningActionsCount == 0) {
	obj6457_onTap_actionGroup2();
}
	}, 1);
}







};
obj6457_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6457_onTap_activeActionGroupIndex = -1;
		$("#obj6457").trigger("obj6457_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6457) {
				console.warn("de-queueing event obj6457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6457_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57707();
function playAudio_57707() {
	window.obj6457_onTap_runningActionsCount = obj6457_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6457_onTap_runningActionsCount = window.obj6457_onTap_runningActionsCount - 1;
if (window.obj6457_onTap_runningActionsCount < 0) {
	window.obj6457_onTap_runningActionsCount = 0;
} else if (window.obj6457_onTap_runningActionsCount == 0) {
	obj6457_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6457_onTap_runningActionsCount = window.obj6457_onTap_runningActionsCount - 1;
if (window.obj6457_onTap_runningActionsCount < 0) {
	window.obj6457_onTap_runningActionsCount = 0;
} else if (window.obj6457_onTap_runningActionsCount == 0) {
	obj6457_onTap_actionGroup3();
}
	}
}









};
obj6457_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6457_onTap_activeActionGroupIndex = -1;
		$("#obj6457").trigger("obj6457_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6457) {
				console.warn("de-queueing event obj6457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6457_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57708();
function runjs_57708() {
	window.obj6457_onTap_runningActionsCount = obj6457_onTap_runningActionsCount + 1;

	$("#obj6457").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6457_onTap_runningActionsCount = window.obj6457_onTap_runningActionsCount - 1;
if (window.obj6457_onTap_runningActionsCount < 0) {
	window.obj6457_onTap_runningActionsCount = 0;
} else if (window.obj6457_onTap_runningActionsCount == 0) {
	obj6457_onTap_actionGroup4();
}
	}, 1);
}







};
obj6457_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6457_onTap_activeActionGroupIndex = -1;
		$("#obj6457").trigger("obj6457_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6457) {
				console.warn("de-queueing event obj6457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6457_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57709();
function switchText_57709() {
	window.obj6457_onTap_runningActionsCount = obj6457_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6457_onTap_runningActionsCount = window.obj6457_onTap_runningActionsCount - 1;
if (window.obj6457_onTap_runningActionsCount < 0) {
	window.obj6457_onTap_runningActionsCount = 0;
} else if (window.obj6457_onTap_runningActionsCount == 0) {
	obj6457_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6457_onTap_runningActionsCount = window.obj6457_onTap_runningActionsCount - 1;
if (window.obj6457_onTap_runningActionsCount < 0) {
	window.obj6457_onTap_runningActionsCount = 0;
} else if (window.obj6457_onTap_runningActionsCount == 0) {
	obj6457_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6457_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6457_onTap_activeActionGroupIndex = -1;
		$("#obj6457").trigger("obj6457_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6457) {
				console.warn("de-queueing event obj6457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6457_onTap_activeActionGroupIndex = 5;
	





















};
obj6461_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6461_onTap_activeActionGroupIndex = -1;
		$("#obj6461").trigger("obj6461_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6461) {
				console.warn("de-queueing event obj6461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6461_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57580();
function switchText_57580() {
	window.obj6461_onTap_runningActionsCount = obj6461_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6461_onTap_runningActionsCount = window.obj6461_onTap_runningActionsCount - 1;
if (window.obj6461_onTap_runningActionsCount < 0) {
	window.obj6461_onTap_runningActionsCount = 0;
} else if (window.obj6461_onTap_runningActionsCount == 0) {
	obj6461_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6461_onTap_runningActionsCount = window.obj6461_onTap_runningActionsCount - 1;
if (window.obj6461_onTap_runningActionsCount < 0) {
	window.obj6461_onTap_runningActionsCount = 0;
} else if (window.obj6461_onTap_runningActionsCount == 0) {
	obj6461_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6461_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6461_onTap_activeActionGroupIndex = -1;
		$("#obj6461").trigger("obj6461_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6461) {
				console.warn("de-queueing event obj6461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6461_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57581();
function runjs_57581() {
	window.obj6461_onTap_runningActionsCount = obj6461_onTap_runningActionsCount + 1;

	$("#obj6461").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6461_onTap_runningActionsCount = window.obj6461_onTap_runningActionsCount - 1;
if (window.obj6461_onTap_runningActionsCount < 0) {
	window.obj6461_onTap_runningActionsCount = 0;
} else if (window.obj6461_onTap_runningActionsCount == 0) {
	obj6461_onTap_actionGroup2();
}
	}, 1);
}







};
obj6461_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6461_onTap_activeActionGroupIndex = -1;
		$("#obj6461").trigger("obj6461_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6461) {
				console.warn("de-queueing event obj6461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6461_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57582();
function playAudio_57582() {
	window.obj6461_onTap_runningActionsCount = obj6461_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6461_onTap_runningActionsCount = window.obj6461_onTap_runningActionsCount - 1;
if (window.obj6461_onTap_runningActionsCount < 0) {
	window.obj6461_onTap_runningActionsCount = 0;
} else if (window.obj6461_onTap_runningActionsCount == 0) {
	obj6461_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6461_onTap_runningActionsCount = window.obj6461_onTap_runningActionsCount - 1;
if (window.obj6461_onTap_runningActionsCount < 0) {
	window.obj6461_onTap_runningActionsCount = 0;
} else if (window.obj6461_onTap_runningActionsCount == 0) {
	obj6461_onTap_actionGroup3();
}
	}
}









};
obj6461_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6461_onTap_activeActionGroupIndex = -1;
		$("#obj6461").trigger("obj6461_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6461) {
				console.warn("de-queueing event obj6461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6461_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57583();
function runjs_57583() {
	window.obj6461_onTap_runningActionsCount = obj6461_onTap_runningActionsCount + 1;

	$("#obj6461").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6461_onTap_runningActionsCount = window.obj6461_onTap_runningActionsCount - 1;
if (window.obj6461_onTap_runningActionsCount < 0) {
	window.obj6461_onTap_runningActionsCount = 0;
} else if (window.obj6461_onTap_runningActionsCount == 0) {
	obj6461_onTap_actionGroup4();
}
	}, 1);
}







};
obj6461_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6461_onTap_activeActionGroupIndex = -1;
		$("#obj6461").trigger("obj6461_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6461) {
				console.warn("de-queueing event obj6461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6461_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57584();
function switchText_57584() {
	window.obj6461_onTap_runningActionsCount = obj6461_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6461_onTap_runningActionsCount = window.obj6461_onTap_runningActionsCount - 1;
if (window.obj6461_onTap_runningActionsCount < 0) {
	window.obj6461_onTap_runningActionsCount = 0;
} else if (window.obj6461_onTap_runningActionsCount == 0) {
	obj6461_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6461_onTap_runningActionsCount = window.obj6461_onTap_runningActionsCount - 1;
if (window.obj6461_onTap_runningActionsCount < 0) {
	window.obj6461_onTap_runningActionsCount = 0;
} else if (window.obj6461_onTap_runningActionsCount == 0) {
	obj6461_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6461_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6461_onTap_activeActionGroupIndex = -1;
		$("#obj6461").trigger("obj6461_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6461) {
				console.warn("de-queueing event obj6461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6461_onTap_activeActionGroupIndex = 5;
	





















};
obj6465_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6465_onTap_activeActionGroupIndex = -1;
		$("#obj6465").trigger("obj6465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6465) {
				console.warn("de-queueing event obj6465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6465_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57730();
function switchText_57730() {
	window.obj6465_onTap_runningActionsCount = obj6465_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6465_onTap_runningActionsCount = window.obj6465_onTap_runningActionsCount - 1;
if (window.obj6465_onTap_runningActionsCount < 0) {
	window.obj6465_onTap_runningActionsCount = 0;
} else if (window.obj6465_onTap_runningActionsCount == 0) {
	obj6465_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6465_onTap_runningActionsCount = window.obj6465_onTap_runningActionsCount - 1;
if (window.obj6465_onTap_runningActionsCount < 0) {
	window.obj6465_onTap_runningActionsCount = 0;
} else if (window.obj6465_onTap_runningActionsCount == 0) {
	obj6465_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6465_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6465_onTap_activeActionGroupIndex = -1;
		$("#obj6465").trigger("obj6465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6465) {
				console.warn("de-queueing event obj6465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6465_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57731();
function runjs_57731() {
	window.obj6465_onTap_runningActionsCount = obj6465_onTap_runningActionsCount + 1;

	$("#obj6465").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6465_onTap_runningActionsCount = window.obj6465_onTap_runningActionsCount - 1;
if (window.obj6465_onTap_runningActionsCount < 0) {
	window.obj6465_onTap_runningActionsCount = 0;
} else if (window.obj6465_onTap_runningActionsCount == 0) {
	obj6465_onTap_actionGroup2();
}
	}, 1);
}







};
obj6465_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6465_onTap_activeActionGroupIndex = -1;
		$("#obj6465").trigger("obj6465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6465) {
				console.warn("de-queueing event obj6465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6465_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57732();
function playAudio_57732() {
	window.obj6465_onTap_runningActionsCount = obj6465_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6465_onTap_runningActionsCount = window.obj6465_onTap_runningActionsCount - 1;
if (window.obj6465_onTap_runningActionsCount < 0) {
	window.obj6465_onTap_runningActionsCount = 0;
} else if (window.obj6465_onTap_runningActionsCount == 0) {
	obj6465_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6465_onTap_runningActionsCount = window.obj6465_onTap_runningActionsCount - 1;
if (window.obj6465_onTap_runningActionsCount < 0) {
	window.obj6465_onTap_runningActionsCount = 0;
} else if (window.obj6465_onTap_runningActionsCount == 0) {
	obj6465_onTap_actionGroup3();
}
	}
}









};
obj6465_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6465_onTap_activeActionGroupIndex = -1;
		$("#obj6465").trigger("obj6465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6465) {
				console.warn("de-queueing event obj6465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6465_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57733();
function runjs_57733() {
	window.obj6465_onTap_runningActionsCount = obj6465_onTap_runningActionsCount + 1;

	$("#obj6465").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6465_onTap_runningActionsCount = window.obj6465_onTap_runningActionsCount - 1;
if (window.obj6465_onTap_runningActionsCount < 0) {
	window.obj6465_onTap_runningActionsCount = 0;
} else if (window.obj6465_onTap_runningActionsCount == 0) {
	obj6465_onTap_actionGroup4();
}
	}, 1);
}







};
obj6465_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6465_onTap_activeActionGroupIndex = -1;
		$("#obj6465").trigger("obj6465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6465) {
				console.warn("de-queueing event obj6465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6465_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57734();
function switchText_57734() {
	window.obj6465_onTap_runningActionsCount = obj6465_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6465_onTap_runningActionsCount = window.obj6465_onTap_runningActionsCount - 1;
if (window.obj6465_onTap_runningActionsCount < 0) {
	window.obj6465_onTap_runningActionsCount = 0;
} else if (window.obj6465_onTap_runningActionsCount == 0) {
	obj6465_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6465_onTap_runningActionsCount = window.obj6465_onTap_runningActionsCount - 1;
if (window.obj6465_onTap_runningActionsCount < 0) {
	window.obj6465_onTap_runningActionsCount = 0;
} else if (window.obj6465_onTap_runningActionsCount == 0) {
	obj6465_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6465_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6465_onTap_activeActionGroupIndex = -1;
		$("#obj6465").trigger("obj6465_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6465) {
				console.warn("de-queueing event obj6465." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6465").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6465_onTap_activeActionGroupIndex = 5;
	





















};
obj6467_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6467_onTap_activeActionGroupIndex = -1;
		$("#obj6467").trigger("obj6467_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6467) {
				console.warn("de-queueing event obj6467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6467_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57775();
function switchText_57775() {
	window.obj6467_onTap_runningActionsCount = obj6467_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6467_onTap_runningActionsCount = window.obj6467_onTap_runningActionsCount - 1;
if (window.obj6467_onTap_runningActionsCount < 0) {
	window.obj6467_onTap_runningActionsCount = 0;
} else if (window.obj6467_onTap_runningActionsCount == 0) {
	obj6467_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6467_onTap_runningActionsCount = window.obj6467_onTap_runningActionsCount - 1;
if (window.obj6467_onTap_runningActionsCount < 0) {
	window.obj6467_onTap_runningActionsCount = 0;
} else if (window.obj6467_onTap_runningActionsCount == 0) {
	obj6467_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6467_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6467_onTap_activeActionGroupIndex = -1;
		$("#obj6467").trigger("obj6467_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6467) {
				console.warn("de-queueing event obj6467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6467_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57776();
function runjs_57776() {
	window.obj6467_onTap_runningActionsCount = obj6467_onTap_runningActionsCount + 1;

	$("#obj6467").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6467_onTap_runningActionsCount = window.obj6467_onTap_runningActionsCount - 1;
if (window.obj6467_onTap_runningActionsCount < 0) {
	window.obj6467_onTap_runningActionsCount = 0;
} else if (window.obj6467_onTap_runningActionsCount == 0) {
	obj6467_onTap_actionGroup2();
}
	}, 1);
}







};
obj6467_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6467_onTap_activeActionGroupIndex = -1;
		$("#obj6467").trigger("obj6467_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6467) {
				console.warn("de-queueing event obj6467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6467_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57777();
function playAudio_57777() {
	window.obj6467_onTap_runningActionsCount = obj6467_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6467_onTap_runningActionsCount = window.obj6467_onTap_runningActionsCount - 1;
if (window.obj6467_onTap_runningActionsCount < 0) {
	window.obj6467_onTap_runningActionsCount = 0;
} else if (window.obj6467_onTap_runningActionsCount == 0) {
	obj6467_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6467_onTap_runningActionsCount = window.obj6467_onTap_runningActionsCount - 1;
if (window.obj6467_onTap_runningActionsCount < 0) {
	window.obj6467_onTap_runningActionsCount = 0;
} else if (window.obj6467_onTap_runningActionsCount == 0) {
	obj6467_onTap_actionGroup3();
}
	}
}









};
obj6467_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6467_onTap_activeActionGroupIndex = -1;
		$("#obj6467").trigger("obj6467_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6467) {
				console.warn("de-queueing event obj6467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6467_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57778();
function runjs_57778() {
	window.obj6467_onTap_runningActionsCount = obj6467_onTap_runningActionsCount + 1;

	$("#obj6467").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6467_onTap_runningActionsCount = window.obj6467_onTap_runningActionsCount - 1;
if (window.obj6467_onTap_runningActionsCount < 0) {
	window.obj6467_onTap_runningActionsCount = 0;
} else if (window.obj6467_onTap_runningActionsCount == 0) {
	obj6467_onTap_actionGroup4();
}
	}, 1);
}







};
obj6467_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6467_onTap_activeActionGroupIndex = -1;
		$("#obj6467").trigger("obj6467_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6467) {
				console.warn("de-queueing event obj6467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6467_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57779();
function switchText_57779() {
	window.obj6467_onTap_runningActionsCount = obj6467_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6467_onTap_runningActionsCount = window.obj6467_onTap_runningActionsCount - 1;
if (window.obj6467_onTap_runningActionsCount < 0) {
	window.obj6467_onTap_runningActionsCount = 0;
} else if (window.obj6467_onTap_runningActionsCount == 0) {
	obj6467_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6467_onTap_runningActionsCount = window.obj6467_onTap_runningActionsCount - 1;
if (window.obj6467_onTap_runningActionsCount < 0) {
	window.obj6467_onTap_runningActionsCount = 0;
} else if (window.obj6467_onTap_runningActionsCount == 0) {
	obj6467_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6467_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6467_onTap_activeActionGroupIndex = -1;
		$("#obj6467").trigger("obj6467_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6467) {
				console.warn("de-queueing event obj6467." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6467").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6467_onTap_activeActionGroupIndex = 5;
	





















};
obj6471_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6471_onTap_activeActionGroupIndex = -1;
		$("#obj6471").trigger("obj6471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6471) {
				console.warn("de-queueing event obj6471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6471_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57710();
function switchText_57710() {
	window.obj6471_onTap_runningActionsCount = obj6471_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6471_onTap_runningActionsCount = window.obj6471_onTap_runningActionsCount - 1;
if (window.obj6471_onTap_runningActionsCount < 0) {
	window.obj6471_onTap_runningActionsCount = 0;
} else if (window.obj6471_onTap_runningActionsCount == 0) {
	obj6471_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6471_onTap_runningActionsCount = window.obj6471_onTap_runningActionsCount - 1;
if (window.obj6471_onTap_runningActionsCount < 0) {
	window.obj6471_onTap_runningActionsCount = 0;
} else if (window.obj6471_onTap_runningActionsCount == 0) {
	obj6471_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6471_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6471_onTap_activeActionGroupIndex = -1;
		$("#obj6471").trigger("obj6471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6471) {
				console.warn("de-queueing event obj6471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6471_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57711();
function runjs_57711() {
	window.obj6471_onTap_runningActionsCount = obj6471_onTap_runningActionsCount + 1;

	$("#obj6471").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6471_onTap_runningActionsCount = window.obj6471_onTap_runningActionsCount - 1;
if (window.obj6471_onTap_runningActionsCount < 0) {
	window.obj6471_onTap_runningActionsCount = 0;
} else if (window.obj6471_onTap_runningActionsCount == 0) {
	obj6471_onTap_actionGroup2();
}
	}, 1);
}







};
obj6471_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6471_onTap_activeActionGroupIndex = -1;
		$("#obj6471").trigger("obj6471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6471) {
				console.warn("de-queueing event obj6471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6471_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57712();
function playAudio_57712() {
	window.obj6471_onTap_runningActionsCount = obj6471_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6471_onTap_runningActionsCount = window.obj6471_onTap_runningActionsCount - 1;
if (window.obj6471_onTap_runningActionsCount < 0) {
	window.obj6471_onTap_runningActionsCount = 0;
} else if (window.obj6471_onTap_runningActionsCount == 0) {
	obj6471_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6471_onTap_runningActionsCount = window.obj6471_onTap_runningActionsCount - 1;
if (window.obj6471_onTap_runningActionsCount < 0) {
	window.obj6471_onTap_runningActionsCount = 0;
} else if (window.obj6471_onTap_runningActionsCount == 0) {
	obj6471_onTap_actionGroup3();
}
	}
}









};
obj6471_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6471_onTap_activeActionGroupIndex = -1;
		$("#obj6471").trigger("obj6471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6471) {
				console.warn("de-queueing event obj6471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6471_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57713();
function runjs_57713() {
	window.obj6471_onTap_runningActionsCount = obj6471_onTap_runningActionsCount + 1;

	$("#obj6471").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6471_onTap_runningActionsCount = window.obj6471_onTap_runningActionsCount - 1;
if (window.obj6471_onTap_runningActionsCount < 0) {
	window.obj6471_onTap_runningActionsCount = 0;
} else if (window.obj6471_onTap_runningActionsCount == 0) {
	obj6471_onTap_actionGroup4();
}
	}, 1);
}







};
obj6471_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6471_onTap_activeActionGroupIndex = -1;
		$("#obj6471").trigger("obj6471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6471) {
				console.warn("de-queueing event obj6471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6471_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57714();
function switchText_57714() {
	window.obj6471_onTap_runningActionsCount = obj6471_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6471_onTap_runningActionsCount = window.obj6471_onTap_runningActionsCount - 1;
if (window.obj6471_onTap_runningActionsCount < 0) {
	window.obj6471_onTap_runningActionsCount = 0;
} else if (window.obj6471_onTap_runningActionsCount == 0) {
	obj6471_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6471_onTap_runningActionsCount = window.obj6471_onTap_runningActionsCount - 1;
if (window.obj6471_onTap_runningActionsCount < 0) {
	window.obj6471_onTap_runningActionsCount = 0;
} else if (window.obj6471_onTap_runningActionsCount == 0) {
	obj6471_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6471_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6471_onTap_activeActionGroupIndex = -1;
		$("#obj6471").trigger("obj6471_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6471) {
				console.warn("de-queueing event obj6471." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6471").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6471_onTap_activeActionGroupIndex = 5;
	





















};
obj6473_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6473_onTap_activeActionGroupIndex = -1;
		$("#obj6473").trigger("obj6473_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6473) {
				console.warn("de-queueing event obj6473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6473_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57715();
function switchText_57715() {
	window.obj6473_onTap_runningActionsCount = obj6473_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6473_onTap_runningActionsCount = window.obj6473_onTap_runningActionsCount - 1;
if (window.obj6473_onTap_runningActionsCount < 0) {
	window.obj6473_onTap_runningActionsCount = 0;
} else if (window.obj6473_onTap_runningActionsCount == 0) {
	obj6473_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6473_onTap_runningActionsCount = window.obj6473_onTap_runningActionsCount - 1;
if (window.obj6473_onTap_runningActionsCount < 0) {
	window.obj6473_onTap_runningActionsCount = 0;
} else if (window.obj6473_onTap_runningActionsCount == 0) {
	obj6473_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6473_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6473_onTap_activeActionGroupIndex = -1;
		$("#obj6473").trigger("obj6473_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6473) {
				console.warn("de-queueing event obj6473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6473_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57716();
function runjs_57716() {
	window.obj6473_onTap_runningActionsCount = obj6473_onTap_runningActionsCount + 1;

	$("#obj6473").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6473_onTap_runningActionsCount = window.obj6473_onTap_runningActionsCount - 1;
if (window.obj6473_onTap_runningActionsCount < 0) {
	window.obj6473_onTap_runningActionsCount = 0;
} else if (window.obj6473_onTap_runningActionsCount == 0) {
	obj6473_onTap_actionGroup2();
}
	}, 1);
}







};
obj6473_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6473_onTap_activeActionGroupIndex = -1;
		$("#obj6473").trigger("obj6473_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6473) {
				console.warn("de-queueing event obj6473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6473_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57717();
function playAudio_57717() {
	window.obj6473_onTap_runningActionsCount = obj6473_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6473_onTap_runningActionsCount = window.obj6473_onTap_runningActionsCount - 1;
if (window.obj6473_onTap_runningActionsCount < 0) {
	window.obj6473_onTap_runningActionsCount = 0;
} else if (window.obj6473_onTap_runningActionsCount == 0) {
	obj6473_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6473_onTap_runningActionsCount = window.obj6473_onTap_runningActionsCount - 1;
if (window.obj6473_onTap_runningActionsCount < 0) {
	window.obj6473_onTap_runningActionsCount = 0;
} else if (window.obj6473_onTap_runningActionsCount == 0) {
	obj6473_onTap_actionGroup3();
}
	}
}









};
obj6473_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6473_onTap_activeActionGroupIndex = -1;
		$("#obj6473").trigger("obj6473_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6473) {
				console.warn("de-queueing event obj6473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6473_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57718();
function runjs_57718() {
	window.obj6473_onTap_runningActionsCount = obj6473_onTap_runningActionsCount + 1;

	$("#obj6473").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6473_onTap_runningActionsCount = window.obj6473_onTap_runningActionsCount - 1;
if (window.obj6473_onTap_runningActionsCount < 0) {
	window.obj6473_onTap_runningActionsCount = 0;
} else if (window.obj6473_onTap_runningActionsCount == 0) {
	obj6473_onTap_actionGroup4();
}
	}, 1);
}







};
obj6473_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6473_onTap_activeActionGroupIndex = -1;
		$("#obj6473").trigger("obj6473_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6473) {
				console.warn("de-queueing event obj6473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6473_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57719();
function switchText_57719() {
	window.obj6473_onTap_runningActionsCount = obj6473_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6473_onTap_runningActionsCount = window.obj6473_onTap_runningActionsCount - 1;
if (window.obj6473_onTap_runningActionsCount < 0) {
	window.obj6473_onTap_runningActionsCount = 0;
} else if (window.obj6473_onTap_runningActionsCount == 0) {
	obj6473_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6473_onTap_runningActionsCount = window.obj6473_onTap_runningActionsCount - 1;
if (window.obj6473_onTap_runningActionsCount < 0) {
	window.obj6473_onTap_runningActionsCount = 0;
} else if (window.obj6473_onTap_runningActionsCount == 0) {
	obj6473_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6473_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6473_onTap_activeActionGroupIndex = -1;
		$("#obj6473").trigger("obj6473_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6473) {
				console.warn("de-queueing event obj6473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6473_onTap_activeActionGroupIndex = 5;
	





















};
obj6477_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6477_onTap_activeActionGroupIndex = -1;
		$("#obj6477").trigger("obj6477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6477) {
				console.warn("de-queueing event obj6477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6477_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57585();
function switchText_57585() {
	window.obj6477_onTap_runningActionsCount = obj6477_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6477_onTap_runningActionsCount = window.obj6477_onTap_runningActionsCount - 1;
if (window.obj6477_onTap_runningActionsCount < 0) {
	window.obj6477_onTap_runningActionsCount = 0;
} else if (window.obj6477_onTap_runningActionsCount == 0) {
	obj6477_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6477_onTap_runningActionsCount = window.obj6477_onTap_runningActionsCount - 1;
if (window.obj6477_onTap_runningActionsCount < 0) {
	window.obj6477_onTap_runningActionsCount = 0;
} else if (window.obj6477_onTap_runningActionsCount == 0) {
	obj6477_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6477_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6477_onTap_activeActionGroupIndex = -1;
		$("#obj6477").trigger("obj6477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6477) {
				console.warn("de-queueing event obj6477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6477_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57586();
function runjs_57586() {
	window.obj6477_onTap_runningActionsCount = obj6477_onTap_runningActionsCount + 1;

	$("#obj6477").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6477_onTap_runningActionsCount = window.obj6477_onTap_runningActionsCount - 1;
if (window.obj6477_onTap_runningActionsCount < 0) {
	window.obj6477_onTap_runningActionsCount = 0;
} else if (window.obj6477_onTap_runningActionsCount == 0) {
	obj6477_onTap_actionGroup2();
}
	}, 1);
}







};
obj6477_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6477_onTap_activeActionGroupIndex = -1;
		$("#obj6477").trigger("obj6477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6477) {
				console.warn("de-queueing event obj6477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6477_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57587();
function playAudio_57587() {
	window.obj6477_onTap_runningActionsCount = obj6477_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6477_onTap_runningActionsCount = window.obj6477_onTap_runningActionsCount - 1;
if (window.obj6477_onTap_runningActionsCount < 0) {
	window.obj6477_onTap_runningActionsCount = 0;
} else if (window.obj6477_onTap_runningActionsCount == 0) {
	obj6477_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6477_onTap_runningActionsCount = window.obj6477_onTap_runningActionsCount - 1;
if (window.obj6477_onTap_runningActionsCount < 0) {
	window.obj6477_onTap_runningActionsCount = 0;
} else if (window.obj6477_onTap_runningActionsCount == 0) {
	obj6477_onTap_actionGroup3();
}
	}
}









};
obj6477_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6477_onTap_activeActionGroupIndex = -1;
		$("#obj6477").trigger("obj6477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6477) {
				console.warn("de-queueing event obj6477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6477_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57588();
function runjs_57588() {
	window.obj6477_onTap_runningActionsCount = obj6477_onTap_runningActionsCount + 1;

	$("#obj6477").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6477_onTap_runningActionsCount = window.obj6477_onTap_runningActionsCount - 1;
if (window.obj6477_onTap_runningActionsCount < 0) {
	window.obj6477_onTap_runningActionsCount = 0;
} else if (window.obj6477_onTap_runningActionsCount == 0) {
	obj6477_onTap_actionGroup4();
}
	}, 1);
}







};
obj6477_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6477_onTap_activeActionGroupIndex = -1;
		$("#obj6477").trigger("obj6477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6477) {
				console.warn("de-queueing event obj6477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6477_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57589();
function switchText_57589() {
	window.obj6477_onTap_runningActionsCount = obj6477_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6477_onTap_runningActionsCount = window.obj6477_onTap_runningActionsCount - 1;
if (window.obj6477_onTap_runningActionsCount < 0) {
	window.obj6477_onTap_runningActionsCount = 0;
} else if (window.obj6477_onTap_runningActionsCount == 0) {
	obj6477_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6477_onTap_runningActionsCount = window.obj6477_onTap_runningActionsCount - 1;
if (window.obj6477_onTap_runningActionsCount < 0) {
	window.obj6477_onTap_runningActionsCount = 0;
} else if (window.obj6477_onTap_runningActionsCount == 0) {
	obj6477_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6477_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6477_onTap_activeActionGroupIndex = -1;
		$("#obj6477").trigger("obj6477_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6477) {
				console.warn("de-queueing event obj6477." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6477").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6477_onTap_activeActionGroupIndex = 5;
	





















};
obj6481_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6481_onTap_activeActionGroupIndex = -1;
		$("#obj6481").trigger("obj6481_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6481) {
				console.warn("de-queueing event obj6481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6481_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57735();
function switchText_57735() {
	window.obj6481_onTap_runningActionsCount = obj6481_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6481_onTap_runningActionsCount = window.obj6481_onTap_runningActionsCount - 1;
if (window.obj6481_onTap_runningActionsCount < 0) {
	window.obj6481_onTap_runningActionsCount = 0;
} else if (window.obj6481_onTap_runningActionsCount == 0) {
	obj6481_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6481_onTap_runningActionsCount = window.obj6481_onTap_runningActionsCount - 1;
if (window.obj6481_onTap_runningActionsCount < 0) {
	window.obj6481_onTap_runningActionsCount = 0;
} else if (window.obj6481_onTap_runningActionsCount == 0) {
	obj6481_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6481_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6481_onTap_activeActionGroupIndex = -1;
		$("#obj6481").trigger("obj6481_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6481) {
				console.warn("de-queueing event obj6481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6481_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57736();
function runjs_57736() {
	window.obj6481_onTap_runningActionsCount = obj6481_onTap_runningActionsCount + 1;

	$("#obj6481").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6481_onTap_runningActionsCount = window.obj6481_onTap_runningActionsCount - 1;
if (window.obj6481_onTap_runningActionsCount < 0) {
	window.obj6481_onTap_runningActionsCount = 0;
} else if (window.obj6481_onTap_runningActionsCount == 0) {
	obj6481_onTap_actionGroup2();
}
	}, 1);
}







};
obj6481_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6481_onTap_activeActionGroupIndex = -1;
		$("#obj6481").trigger("obj6481_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6481) {
				console.warn("de-queueing event obj6481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6481_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57737();
function playAudio_57737() {
	window.obj6481_onTap_runningActionsCount = obj6481_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6481_onTap_runningActionsCount = window.obj6481_onTap_runningActionsCount - 1;
if (window.obj6481_onTap_runningActionsCount < 0) {
	window.obj6481_onTap_runningActionsCount = 0;
} else if (window.obj6481_onTap_runningActionsCount == 0) {
	obj6481_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6481_onTap_runningActionsCount = window.obj6481_onTap_runningActionsCount - 1;
if (window.obj6481_onTap_runningActionsCount < 0) {
	window.obj6481_onTap_runningActionsCount = 0;
} else if (window.obj6481_onTap_runningActionsCount == 0) {
	obj6481_onTap_actionGroup3();
}
	}
}









};
obj6481_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6481_onTap_activeActionGroupIndex = -1;
		$("#obj6481").trigger("obj6481_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6481) {
				console.warn("de-queueing event obj6481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6481_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57738();
function runjs_57738() {
	window.obj6481_onTap_runningActionsCount = obj6481_onTap_runningActionsCount + 1;

	$("#obj6481").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6481_onTap_runningActionsCount = window.obj6481_onTap_runningActionsCount - 1;
if (window.obj6481_onTap_runningActionsCount < 0) {
	window.obj6481_onTap_runningActionsCount = 0;
} else if (window.obj6481_onTap_runningActionsCount == 0) {
	obj6481_onTap_actionGroup4();
}
	}, 1);
}







};
obj6481_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6481_onTap_activeActionGroupIndex = -1;
		$("#obj6481").trigger("obj6481_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6481) {
				console.warn("de-queueing event obj6481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6481_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57739();
function switchText_57739() {
	window.obj6481_onTap_runningActionsCount = obj6481_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6481_onTap_runningActionsCount = window.obj6481_onTap_runningActionsCount - 1;
if (window.obj6481_onTap_runningActionsCount < 0) {
	window.obj6481_onTap_runningActionsCount = 0;
} else if (window.obj6481_onTap_runningActionsCount == 0) {
	obj6481_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6481_onTap_runningActionsCount = window.obj6481_onTap_runningActionsCount - 1;
if (window.obj6481_onTap_runningActionsCount < 0) {
	window.obj6481_onTap_runningActionsCount = 0;
} else if (window.obj6481_onTap_runningActionsCount == 0) {
	obj6481_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6481_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6481_onTap_activeActionGroupIndex = -1;
		$("#obj6481").trigger("obj6481_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6481) {
				console.warn("de-queueing event obj6481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6481_onTap_activeActionGroupIndex = 5;
	





















};
obj6483_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6483_onTap_activeActionGroupIndex = -1;
		$("#obj6483").trigger("obj6483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6483) {
				console.warn("de-queueing event obj6483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6483_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57780();
function switchText_57780() {
	window.obj6483_onTap_runningActionsCount = obj6483_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6483_onTap_runningActionsCount = window.obj6483_onTap_runningActionsCount - 1;
if (window.obj6483_onTap_runningActionsCount < 0) {
	window.obj6483_onTap_runningActionsCount = 0;
} else if (window.obj6483_onTap_runningActionsCount == 0) {
	obj6483_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6483_onTap_runningActionsCount = window.obj6483_onTap_runningActionsCount - 1;
if (window.obj6483_onTap_runningActionsCount < 0) {
	window.obj6483_onTap_runningActionsCount = 0;
} else if (window.obj6483_onTap_runningActionsCount == 0) {
	obj6483_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6483_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6483_onTap_activeActionGroupIndex = -1;
		$("#obj6483").trigger("obj6483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6483) {
				console.warn("de-queueing event obj6483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6483_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57781();
function runjs_57781() {
	window.obj6483_onTap_runningActionsCount = obj6483_onTap_runningActionsCount + 1;

	$("#obj6483").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6483_onTap_runningActionsCount = window.obj6483_onTap_runningActionsCount - 1;
if (window.obj6483_onTap_runningActionsCount < 0) {
	window.obj6483_onTap_runningActionsCount = 0;
} else if (window.obj6483_onTap_runningActionsCount == 0) {
	obj6483_onTap_actionGroup2();
}
	}, 1);
}







};
obj6483_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6483_onTap_activeActionGroupIndex = -1;
		$("#obj6483").trigger("obj6483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6483) {
				console.warn("de-queueing event obj6483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6483_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57782();
function playAudio_57782() {
	window.obj6483_onTap_runningActionsCount = obj6483_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6483_onTap_runningActionsCount = window.obj6483_onTap_runningActionsCount - 1;
if (window.obj6483_onTap_runningActionsCount < 0) {
	window.obj6483_onTap_runningActionsCount = 0;
} else if (window.obj6483_onTap_runningActionsCount == 0) {
	obj6483_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6483_onTap_runningActionsCount = window.obj6483_onTap_runningActionsCount - 1;
if (window.obj6483_onTap_runningActionsCount < 0) {
	window.obj6483_onTap_runningActionsCount = 0;
} else if (window.obj6483_onTap_runningActionsCount == 0) {
	obj6483_onTap_actionGroup3();
}
	}
}









};
obj6483_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6483_onTap_activeActionGroupIndex = -1;
		$("#obj6483").trigger("obj6483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6483) {
				console.warn("de-queueing event obj6483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6483_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57783();
function runjs_57783() {
	window.obj6483_onTap_runningActionsCount = obj6483_onTap_runningActionsCount + 1;

	$("#obj6483").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6483_onTap_runningActionsCount = window.obj6483_onTap_runningActionsCount - 1;
if (window.obj6483_onTap_runningActionsCount < 0) {
	window.obj6483_onTap_runningActionsCount = 0;
} else if (window.obj6483_onTap_runningActionsCount == 0) {
	obj6483_onTap_actionGroup4();
}
	}, 1);
}







};
obj6483_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6483_onTap_activeActionGroupIndex = -1;
		$("#obj6483").trigger("obj6483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6483) {
				console.warn("de-queueing event obj6483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6483_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57784();
function switchText_57784() {
	window.obj6483_onTap_runningActionsCount = obj6483_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6483_onTap_runningActionsCount = window.obj6483_onTap_runningActionsCount - 1;
if (window.obj6483_onTap_runningActionsCount < 0) {
	window.obj6483_onTap_runningActionsCount = 0;
} else if (window.obj6483_onTap_runningActionsCount == 0) {
	obj6483_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6483_onTap_runningActionsCount = window.obj6483_onTap_runningActionsCount - 1;
if (window.obj6483_onTap_runningActionsCount < 0) {
	window.obj6483_onTap_runningActionsCount = 0;
} else if (window.obj6483_onTap_runningActionsCount == 0) {
	obj6483_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6483_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6483_onTap_activeActionGroupIndex = -1;
		$("#obj6483").trigger("obj6483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6483) {
				console.warn("de-queueing event obj6483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6483_onTap_activeActionGroupIndex = 5;
	





















};
obj6485_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6485_onTap_activeActionGroupIndex = -1;
		$("#obj6485").trigger("obj6485_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6485) {
				console.warn("de-queueing event obj6485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6485_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57820();
function switchText_57820() {
	window.obj6485_onTap_runningActionsCount = obj6485_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6485_onTap_runningActionsCount = window.obj6485_onTap_runningActionsCount - 1;
if (window.obj6485_onTap_runningActionsCount < 0) {
	window.obj6485_onTap_runningActionsCount = 0;
} else if (window.obj6485_onTap_runningActionsCount == 0) {
	obj6485_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6485_onTap_runningActionsCount = window.obj6485_onTap_runningActionsCount - 1;
if (window.obj6485_onTap_runningActionsCount < 0) {
	window.obj6485_onTap_runningActionsCount = 0;
} else if (window.obj6485_onTap_runningActionsCount == 0) {
	obj6485_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6485_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6485_onTap_activeActionGroupIndex = -1;
		$("#obj6485").trigger("obj6485_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6485) {
				console.warn("de-queueing event obj6485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6485_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57821();
function runjs_57821() {
	window.obj6485_onTap_runningActionsCount = obj6485_onTap_runningActionsCount + 1;

	$("#obj6485").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6485_onTap_runningActionsCount = window.obj6485_onTap_runningActionsCount - 1;
if (window.obj6485_onTap_runningActionsCount < 0) {
	window.obj6485_onTap_runningActionsCount = 0;
} else if (window.obj6485_onTap_runningActionsCount == 0) {
	obj6485_onTap_actionGroup2();
}
	}, 1);
}







};
obj6485_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6485_onTap_activeActionGroupIndex = -1;
		$("#obj6485").trigger("obj6485_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6485) {
				console.warn("de-queueing event obj6485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6485_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57822();
function playAudio_57822() {
	window.obj6485_onTap_runningActionsCount = obj6485_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6485_onTap_runningActionsCount = window.obj6485_onTap_runningActionsCount - 1;
if (window.obj6485_onTap_runningActionsCount < 0) {
	window.obj6485_onTap_runningActionsCount = 0;
} else if (window.obj6485_onTap_runningActionsCount == 0) {
	obj6485_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6485_onTap_runningActionsCount = window.obj6485_onTap_runningActionsCount - 1;
if (window.obj6485_onTap_runningActionsCount < 0) {
	window.obj6485_onTap_runningActionsCount = 0;
} else if (window.obj6485_onTap_runningActionsCount == 0) {
	obj6485_onTap_actionGroup3();
}
	}
}









};
obj6485_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6485_onTap_activeActionGroupIndex = -1;
		$("#obj6485").trigger("obj6485_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6485) {
				console.warn("de-queueing event obj6485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6485_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57823();
function runjs_57823() {
	window.obj6485_onTap_runningActionsCount = obj6485_onTap_runningActionsCount + 1;

	$("#obj6485").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6485_onTap_runningActionsCount = window.obj6485_onTap_runningActionsCount - 1;
if (window.obj6485_onTap_runningActionsCount < 0) {
	window.obj6485_onTap_runningActionsCount = 0;
} else if (window.obj6485_onTap_runningActionsCount == 0) {
	obj6485_onTap_actionGroup4();
}
	}, 1);
}







};
obj6485_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6485_onTap_activeActionGroupIndex = -1;
		$("#obj6485").trigger("obj6485_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6485) {
				console.warn("de-queueing event obj6485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6485_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57824();
function switchText_57824() {
	window.obj6485_onTap_runningActionsCount = obj6485_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6485_onTap_runningActionsCount = window.obj6485_onTap_runningActionsCount - 1;
if (window.obj6485_onTap_runningActionsCount < 0) {
	window.obj6485_onTap_runningActionsCount = 0;
} else if (window.obj6485_onTap_runningActionsCount == 0) {
	obj6485_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6485_onTap_runningActionsCount = window.obj6485_onTap_runningActionsCount - 1;
if (window.obj6485_onTap_runningActionsCount < 0) {
	window.obj6485_onTap_runningActionsCount = 0;
} else if (window.obj6485_onTap_runningActionsCount == 0) {
	obj6485_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6485_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6485_onTap_activeActionGroupIndex = -1;
		$("#obj6485").trigger("obj6485_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6485) {
				console.warn("de-queueing event obj6485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6485_onTap_activeActionGroupIndex = 5;
	





















};
obj6489_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6489_onTap_activeActionGroupIndex = -1;
		$("#obj6489").trigger("obj6489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6489) {
				console.warn("de-queueing event obj6489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6489_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57720();
function switchText_57720() {
	window.obj6489_onTap_runningActionsCount = obj6489_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6489_onTap_runningActionsCount = window.obj6489_onTap_runningActionsCount - 1;
if (window.obj6489_onTap_runningActionsCount < 0) {
	window.obj6489_onTap_runningActionsCount = 0;
} else if (window.obj6489_onTap_runningActionsCount == 0) {
	obj6489_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6489_onTap_runningActionsCount = window.obj6489_onTap_runningActionsCount - 1;
if (window.obj6489_onTap_runningActionsCount < 0) {
	window.obj6489_onTap_runningActionsCount = 0;
} else if (window.obj6489_onTap_runningActionsCount == 0) {
	obj6489_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6489_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6489_onTap_activeActionGroupIndex = -1;
		$("#obj6489").trigger("obj6489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6489) {
				console.warn("de-queueing event obj6489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6489_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57721();
function runjs_57721() {
	window.obj6489_onTap_runningActionsCount = obj6489_onTap_runningActionsCount + 1;

	$("#obj6489").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6489_onTap_runningActionsCount = window.obj6489_onTap_runningActionsCount - 1;
if (window.obj6489_onTap_runningActionsCount < 0) {
	window.obj6489_onTap_runningActionsCount = 0;
} else if (window.obj6489_onTap_runningActionsCount == 0) {
	obj6489_onTap_actionGroup2();
}
	}, 1);
}







};
obj6489_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6489_onTap_activeActionGroupIndex = -1;
		$("#obj6489").trigger("obj6489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6489) {
				console.warn("de-queueing event obj6489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6489_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57722();
function playAudio_57722() {
	window.obj6489_onTap_runningActionsCount = obj6489_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6489_onTap_runningActionsCount = window.obj6489_onTap_runningActionsCount - 1;
if (window.obj6489_onTap_runningActionsCount < 0) {
	window.obj6489_onTap_runningActionsCount = 0;
} else if (window.obj6489_onTap_runningActionsCount == 0) {
	obj6489_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6489_onTap_runningActionsCount = window.obj6489_onTap_runningActionsCount - 1;
if (window.obj6489_onTap_runningActionsCount < 0) {
	window.obj6489_onTap_runningActionsCount = 0;
} else if (window.obj6489_onTap_runningActionsCount == 0) {
	obj6489_onTap_actionGroup3();
}
	}
}









};
obj6489_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6489_onTap_activeActionGroupIndex = -1;
		$("#obj6489").trigger("obj6489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6489) {
				console.warn("de-queueing event obj6489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6489_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57723();
function runjs_57723() {
	window.obj6489_onTap_runningActionsCount = obj6489_onTap_runningActionsCount + 1;

	$("#obj6489").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6489_onTap_runningActionsCount = window.obj6489_onTap_runningActionsCount - 1;
if (window.obj6489_onTap_runningActionsCount < 0) {
	window.obj6489_onTap_runningActionsCount = 0;
} else if (window.obj6489_onTap_runningActionsCount == 0) {
	obj6489_onTap_actionGroup4();
}
	}, 1);
}







};
obj6489_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6489_onTap_activeActionGroupIndex = -1;
		$("#obj6489").trigger("obj6489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6489) {
				console.warn("de-queueing event obj6489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6489_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57724();
function switchText_57724() {
	window.obj6489_onTap_runningActionsCount = obj6489_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6489_onTap_runningActionsCount = window.obj6489_onTap_runningActionsCount - 1;
if (window.obj6489_onTap_runningActionsCount < 0) {
	window.obj6489_onTap_runningActionsCount = 0;
} else if (window.obj6489_onTap_runningActionsCount == 0) {
	obj6489_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6489_onTap_runningActionsCount = window.obj6489_onTap_runningActionsCount - 1;
if (window.obj6489_onTap_runningActionsCount < 0) {
	window.obj6489_onTap_runningActionsCount = 0;
} else if (window.obj6489_onTap_runningActionsCount == 0) {
	obj6489_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6489_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6489_onTap_activeActionGroupIndex = -1;
		$("#obj6489").trigger("obj6489_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6489) {
				console.warn("de-queueing event obj6489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6489_onTap_activeActionGroupIndex = 5;
	





















};
obj6493_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6493_onTap_activeActionGroupIndex = -1;
		$("#obj6493").trigger("obj6493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6493) {
				console.warn("de-queueing event obj6493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6493_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57590();
function switchText_57590() {
	window.obj6493_onTap_runningActionsCount = obj6493_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6493_onTap_runningActionsCount = window.obj6493_onTap_runningActionsCount - 1;
if (window.obj6493_onTap_runningActionsCount < 0) {
	window.obj6493_onTap_runningActionsCount = 0;
} else if (window.obj6493_onTap_runningActionsCount == 0) {
	obj6493_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6493_onTap_runningActionsCount = window.obj6493_onTap_runningActionsCount - 1;
if (window.obj6493_onTap_runningActionsCount < 0) {
	window.obj6493_onTap_runningActionsCount = 0;
} else if (window.obj6493_onTap_runningActionsCount == 0) {
	obj6493_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6493_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6493_onTap_activeActionGroupIndex = -1;
		$("#obj6493").trigger("obj6493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6493) {
				console.warn("de-queueing event obj6493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6493_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57591();
function runjs_57591() {
	window.obj6493_onTap_runningActionsCount = obj6493_onTap_runningActionsCount + 1;

	$("#obj6493").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6493_onTap_runningActionsCount = window.obj6493_onTap_runningActionsCount - 1;
if (window.obj6493_onTap_runningActionsCount < 0) {
	window.obj6493_onTap_runningActionsCount = 0;
} else if (window.obj6493_onTap_runningActionsCount == 0) {
	obj6493_onTap_actionGroup2();
}
	}, 1);
}







};
obj6493_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6493_onTap_activeActionGroupIndex = -1;
		$("#obj6493").trigger("obj6493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6493) {
				console.warn("de-queueing event obj6493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6493_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57592();
function playAudio_57592() {
	window.obj6493_onTap_runningActionsCount = obj6493_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6493_onTap_runningActionsCount = window.obj6493_onTap_runningActionsCount - 1;
if (window.obj6493_onTap_runningActionsCount < 0) {
	window.obj6493_onTap_runningActionsCount = 0;
} else if (window.obj6493_onTap_runningActionsCount == 0) {
	obj6493_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6493_onTap_runningActionsCount = window.obj6493_onTap_runningActionsCount - 1;
if (window.obj6493_onTap_runningActionsCount < 0) {
	window.obj6493_onTap_runningActionsCount = 0;
} else if (window.obj6493_onTap_runningActionsCount == 0) {
	obj6493_onTap_actionGroup3();
}
	}
}









};
obj6493_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6493_onTap_activeActionGroupIndex = -1;
		$("#obj6493").trigger("obj6493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6493) {
				console.warn("de-queueing event obj6493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6493_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57593();
function runjs_57593() {
	window.obj6493_onTap_runningActionsCount = obj6493_onTap_runningActionsCount + 1;

	$("#obj6493").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6493_onTap_runningActionsCount = window.obj6493_onTap_runningActionsCount - 1;
if (window.obj6493_onTap_runningActionsCount < 0) {
	window.obj6493_onTap_runningActionsCount = 0;
} else if (window.obj6493_onTap_runningActionsCount == 0) {
	obj6493_onTap_actionGroup4();
}
	}, 1);
}







};
obj6493_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6493_onTap_activeActionGroupIndex = -1;
		$("#obj6493").trigger("obj6493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6493) {
				console.warn("de-queueing event obj6493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6493_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57594();
function switchText_57594() {
	window.obj6493_onTap_runningActionsCount = obj6493_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6493_onTap_runningActionsCount = window.obj6493_onTap_runningActionsCount - 1;
if (window.obj6493_onTap_runningActionsCount < 0) {
	window.obj6493_onTap_runningActionsCount = 0;
} else if (window.obj6493_onTap_runningActionsCount == 0) {
	obj6493_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6493_onTap_runningActionsCount = window.obj6493_onTap_runningActionsCount - 1;
if (window.obj6493_onTap_runningActionsCount < 0) {
	window.obj6493_onTap_runningActionsCount = 0;
} else if (window.obj6493_onTap_runningActionsCount == 0) {
	obj6493_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6493_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6493_onTap_activeActionGroupIndex = -1;
		$("#obj6493").trigger("obj6493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6493) {
				console.warn("de-queueing event obj6493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6493_onTap_activeActionGroupIndex = 5;
	





















};
obj6497_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6497_onTap_activeActionGroupIndex = -1;
		$("#obj6497").trigger("obj6497_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6497) {
				console.warn("de-queueing event obj6497." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6497").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6497_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57740();
function switchText_57740() {
	window.obj6497_onTap_runningActionsCount = obj6497_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6497_onTap_runningActionsCount = window.obj6497_onTap_runningActionsCount - 1;
if (window.obj6497_onTap_runningActionsCount < 0) {
	window.obj6497_onTap_runningActionsCount = 0;
} else if (window.obj6497_onTap_runningActionsCount == 0) {
	obj6497_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6497_onTap_runningActionsCount = window.obj6497_onTap_runningActionsCount - 1;
if (window.obj6497_onTap_runningActionsCount < 0) {
	window.obj6497_onTap_runningActionsCount = 0;
} else if (window.obj6497_onTap_runningActionsCount == 0) {
	obj6497_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6497_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6497_onTap_activeActionGroupIndex = -1;
		$("#obj6497").trigger("obj6497_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6497) {
				console.warn("de-queueing event obj6497." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6497").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6497_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57741();
function runjs_57741() {
	window.obj6497_onTap_runningActionsCount = obj6497_onTap_runningActionsCount + 1;

	$("#obj6497").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6497_onTap_runningActionsCount = window.obj6497_onTap_runningActionsCount - 1;
if (window.obj6497_onTap_runningActionsCount < 0) {
	window.obj6497_onTap_runningActionsCount = 0;
} else if (window.obj6497_onTap_runningActionsCount == 0) {
	obj6497_onTap_actionGroup2();
}
	}, 1);
}







};
obj6497_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6497_onTap_activeActionGroupIndex = -1;
		$("#obj6497").trigger("obj6497_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6497) {
				console.warn("de-queueing event obj6497." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6497").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6497_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57742();
function playAudio_57742() {
	window.obj6497_onTap_runningActionsCount = obj6497_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6497_onTap_runningActionsCount = window.obj6497_onTap_runningActionsCount - 1;
if (window.obj6497_onTap_runningActionsCount < 0) {
	window.obj6497_onTap_runningActionsCount = 0;
} else if (window.obj6497_onTap_runningActionsCount == 0) {
	obj6497_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6497_onTap_runningActionsCount = window.obj6497_onTap_runningActionsCount - 1;
if (window.obj6497_onTap_runningActionsCount < 0) {
	window.obj6497_onTap_runningActionsCount = 0;
} else if (window.obj6497_onTap_runningActionsCount == 0) {
	obj6497_onTap_actionGroup3();
}
	}
}









};
obj6497_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6497_onTap_activeActionGroupIndex = -1;
		$("#obj6497").trigger("obj6497_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6497) {
				console.warn("de-queueing event obj6497." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6497").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6497_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57743();
function runjs_57743() {
	window.obj6497_onTap_runningActionsCount = obj6497_onTap_runningActionsCount + 1;

	$("#obj6497").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6497_onTap_runningActionsCount = window.obj6497_onTap_runningActionsCount - 1;
if (window.obj6497_onTap_runningActionsCount < 0) {
	window.obj6497_onTap_runningActionsCount = 0;
} else if (window.obj6497_onTap_runningActionsCount == 0) {
	obj6497_onTap_actionGroup4();
}
	}, 1);
}







};
obj6497_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6497_onTap_activeActionGroupIndex = -1;
		$("#obj6497").trigger("obj6497_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6497) {
				console.warn("de-queueing event obj6497." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6497").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6497_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57744();
function switchText_57744() {
	window.obj6497_onTap_runningActionsCount = obj6497_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6497_onTap_runningActionsCount = window.obj6497_onTap_runningActionsCount - 1;
if (window.obj6497_onTap_runningActionsCount < 0) {
	window.obj6497_onTap_runningActionsCount = 0;
} else if (window.obj6497_onTap_runningActionsCount == 0) {
	obj6497_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6497_onTap_runningActionsCount = window.obj6497_onTap_runningActionsCount - 1;
if (window.obj6497_onTap_runningActionsCount < 0) {
	window.obj6497_onTap_runningActionsCount = 0;
} else if (window.obj6497_onTap_runningActionsCount == 0) {
	obj6497_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6497_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6497_onTap_activeActionGroupIndex = -1;
		$("#obj6497").trigger("obj6497_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6497) {
				console.warn("de-queueing event obj6497." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6497").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6497_onTap_activeActionGroupIndex = 5;
	





















};
obj6499_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6499_onTap_activeActionGroupIndex = -1;
		$("#obj6499").trigger("obj6499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6499) {
				console.warn("de-queueing event obj6499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6499_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57785();
function switchText_57785() {
	window.obj6499_onTap_runningActionsCount = obj6499_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6499_onTap_runningActionsCount = window.obj6499_onTap_runningActionsCount - 1;
if (window.obj6499_onTap_runningActionsCount < 0) {
	window.obj6499_onTap_runningActionsCount = 0;
} else if (window.obj6499_onTap_runningActionsCount == 0) {
	obj6499_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6499_onTap_runningActionsCount = window.obj6499_onTap_runningActionsCount - 1;
if (window.obj6499_onTap_runningActionsCount < 0) {
	window.obj6499_onTap_runningActionsCount = 0;
} else if (window.obj6499_onTap_runningActionsCount == 0) {
	obj6499_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6499_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6499_onTap_activeActionGroupIndex = -1;
		$("#obj6499").trigger("obj6499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6499) {
				console.warn("de-queueing event obj6499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6499_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57786();
function runjs_57786() {
	window.obj6499_onTap_runningActionsCount = obj6499_onTap_runningActionsCount + 1;

	$("#obj6499").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6499_onTap_runningActionsCount = window.obj6499_onTap_runningActionsCount - 1;
if (window.obj6499_onTap_runningActionsCount < 0) {
	window.obj6499_onTap_runningActionsCount = 0;
} else if (window.obj6499_onTap_runningActionsCount == 0) {
	obj6499_onTap_actionGroup2();
}
	}, 1);
}







};
obj6499_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6499_onTap_activeActionGroupIndex = -1;
		$("#obj6499").trigger("obj6499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6499) {
				console.warn("de-queueing event obj6499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6499_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57787();
function playAudio_57787() {
	window.obj6499_onTap_runningActionsCount = obj6499_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6499_onTap_runningActionsCount = window.obj6499_onTap_runningActionsCount - 1;
if (window.obj6499_onTap_runningActionsCount < 0) {
	window.obj6499_onTap_runningActionsCount = 0;
} else if (window.obj6499_onTap_runningActionsCount == 0) {
	obj6499_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6499_onTap_runningActionsCount = window.obj6499_onTap_runningActionsCount - 1;
if (window.obj6499_onTap_runningActionsCount < 0) {
	window.obj6499_onTap_runningActionsCount = 0;
} else if (window.obj6499_onTap_runningActionsCount == 0) {
	obj6499_onTap_actionGroup3();
}
	}
}









};
obj6499_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6499_onTap_activeActionGroupIndex = -1;
		$("#obj6499").trigger("obj6499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6499) {
				console.warn("de-queueing event obj6499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6499_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57788();
function runjs_57788() {
	window.obj6499_onTap_runningActionsCount = obj6499_onTap_runningActionsCount + 1;

	$("#obj6499").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6499_onTap_runningActionsCount = window.obj6499_onTap_runningActionsCount - 1;
if (window.obj6499_onTap_runningActionsCount < 0) {
	window.obj6499_onTap_runningActionsCount = 0;
} else if (window.obj6499_onTap_runningActionsCount == 0) {
	obj6499_onTap_actionGroup4();
}
	}, 1);
}







};
obj6499_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6499_onTap_activeActionGroupIndex = -1;
		$("#obj6499").trigger("obj6499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6499) {
				console.warn("de-queueing event obj6499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6499_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57789();
function switchText_57789() {
	window.obj6499_onTap_runningActionsCount = obj6499_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6499_onTap_runningActionsCount = window.obj6499_onTap_runningActionsCount - 1;
if (window.obj6499_onTap_runningActionsCount < 0) {
	window.obj6499_onTap_runningActionsCount = 0;
} else if (window.obj6499_onTap_runningActionsCount == 0) {
	obj6499_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6499_onTap_runningActionsCount = window.obj6499_onTap_runningActionsCount - 1;
if (window.obj6499_onTap_runningActionsCount < 0) {
	window.obj6499_onTap_runningActionsCount = 0;
} else if (window.obj6499_onTap_runningActionsCount == 0) {
	obj6499_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6499_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6499_onTap_activeActionGroupIndex = -1;
		$("#obj6499").trigger("obj6499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6499) {
				console.warn("de-queueing event obj6499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6499_onTap_activeActionGroupIndex = 5;
	





















};
obj6501_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6501_onTap_activeActionGroupIndex = -1;
		$("#obj6501").trigger("obj6501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6501) {
				console.warn("de-queueing event obj6501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6501_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57825();
function switchText_57825() {
	window.obj6501_onTap_runningActionsCount = obj6501_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6501_onTap_runningActionsCount = window.obj6501_onTap_runningActionsCount - 1;
if (window.obj6501_onTap_runningActionsCount < 0) {
	window.obj6501_onTap_runningActionsCount = 0;
} else if (window.obj6501_onTap_runningActionsCount == 0) {
	obj6501_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6501_onTap_runningActionsCount = window.obj6501_onTap_runningActionsCount - 1;
if (window.obj6501_onTap_runningActionsCount < 0) {
	window.obj6501_onTap_runningActionsCount = 0;
} else if (window.obj6501_onTap_runningActionsCount == 0) {
	obj6501_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6501_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6501_onTap_activeActionGroupIndex = -1;
		$("#obj6501").trigger("obj6501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6501) {
				console.warn("de-queueing event obj6501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6501_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57826();
function runjs_57826() {
	window.obj6501_onTap_runningActionsCount = obj6501_onTap_runningActionsCount + 1;

	$("#obj6501").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6501_onTap_runningActionsCount = window.obj6501_onTap_runningActionsCount - 1;
if (window.obj6501_onTap_runningActionsCount < 0) {
	window.obj6501_onTap_runningActionsCount = 0;
} else if (window.obj6501_onTap_runningActionsCount == 0) {
	obj6501_onTap_actionGroup2();
}
	}, 1);
}







};
obj6501_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6501_onTap_activeActionGroupIndex = -1;
		$("#obj6501").trigger("obj6501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6501) {
				console.warn("de-queueing event obj6501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6501_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57827();
function playAudio_57827() {
	window.obj6501_onTap_runningActionsCount = obj6501_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6501_onTap_runningActionsCount = window.obj6501_onTap_runningActionsCount - 1;
if (window.obj6501_onTap_runningActionsCount < 0) {
	window.obj6501_onTap_runningActionsCount = 0;
} else if (window.obj6501_onTap_runningActionsCount == 0) {
	obj6501_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6501_onTap_runningActionsCount = window.obj6501_onTap_runningActionsCount - 1;
if (window.obj6501_onTap_runningActionsCount < 0) {
	window.obj6501_onTap_runningActionsCount = 0;
} else if (window.obj6501_onTap_runningActionsCount == 0) {
	obj6501_onTap_actionGroup3();
}
	}
}









};
obj6501_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6501_onTap_activeActionGroupIndex = -1;
		$("#obj6501").trigger("obj6501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6501) {
				console.warn("de-queueing event obj6501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6501_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57828();
function runjs_57828() {
	window.obj6501_onTap_runningActionsCount = obj6501_onTap_runningActionsCount + 1;

	$("#obj6501").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6501_onTap_runningActionsCount = window.obj6501_onTap_runningActionsCount - 1;
if (window.obj6501_onTap_runningActionsCount < 0) {
	window.obj6501_onTap_runningActionsCount = 0;
} else if (window.obj6501_onTap_runningActionsCount == 0) {
	obj6501_onTap_actionGroup4();
}
	}, 1);
}







};
obj6501_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6501_onTap_activeActionGroupIndex = -1;
		$("#obj6501").trigger("obj6501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6501) {
				console.warn("de-queueing event obj6501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6501_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57829();
function switchText_57829() {
	window.obj6501_onTap_runningActionsCount = obj6501_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6501_onTap_runningActionsCount = window.obj6501_onTap_runningActionsCount - 1;
if (window.obj6501_onTap_runningActionsCount < 0) {
	window.obj6501_onTap_runningActionsCount = 0;
} else if (window.obj6501_onTap_runningActionsCount == 0) {
	obj6501_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6501_onTap_runningActionsCount = window.obj6501_onTap_runningActionsCount - 1;
if (window.obj6501_onTap_runningActionsCount < 0) {
	window.obj6501_onTap_runningActionsCount = 0;
} else if (window.obj6501_onTap_runningActionsCount == 0) {
	obj6501_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6501_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6501_onTap_activeActionGroupIndex = -1;
		$("#obj6501").trigger("obj6501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6501) {
				console.warn("de-queueing event obj6501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6501_onTap_activeActionGroupIndex = 5;
	





















};
obj6503_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6503_onTap_activeActionGroupIndex = -1;
		$("#obj6503").trigger("obj6503_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6503) {
				console.warn("de-queueing event obj6503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6503_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57860();
function switchText_57860() {
	window.obj6503_onTap_runningActionsCount = obj6503_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6503_onTap_runningActionsCount = window.obj6503_onTap_runningActionsCount - 1;
if (window.obj6503_onTap_runningActionsCount < 0) {
	window.obj6503_onTap_runningActionsCount = 0;
} else if (window.obj6503_onTap_runningActionsCount == 0) {
	obj6503_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6503_onTap_runningActionsCount = window.obj6503_onTap_runningActionsCount - 1;
if (window.obj6503_onTap_runningActionsCount < 0) {
	window.obj6503_onTap_runningActionsCount = 0;
} else if (window.obj6503_onTap_runningActionsCount == 0) {
	obj6503_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6503_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6503_onTap_activeActionGroupIndex = -1;
		$("#obj6503").trigger("obj6503_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6503) {
				console.warn("de-queueing event obj6503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6503_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57861();
function runjs_57861() {
	window.obj6503_onTap_runningActionsCount = obj6503_onTap_runningActionsCount + 1;

	$("#obj6503").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6503_onTap_runningActionsCount = window.obj6503_onTap_runningActionsCount - 1;
if (window.obj6503_onTap_runningActionsCount < 0) {
	window.obj6503_onTap_runningActionsCount = 0;
} else if (window.obj6503_onTap_runningActionsCount == 0) {
	obj6503_onTap_actionGroup2();
}
	}, 1);
}







};
obj6503_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6503_onTap_activeActionGroupIndex = -1;
		$("#obj6503").trigger("obj6503_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6503) {
				console.warn("de-queueing event obj6503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6503_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57862();
function playAudio_57862() {
	window.obj6503_onTap_runningActionsCount = obj6503_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6503_onTap_runningActionsCount = window.obj6503_onTap_runningActionsCount - 1;
if (window.obj6503_onTap_runningActionsCount < 0) {
	window.obj6503_onTap_runningActionsCount = 0;
} else if (window.obj6503_onTap_runningActionsCount == 0) {
	obj6503_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6503_onTap_runningActionsCount = window.obj6503_onTap_runningActionsCount - 1;
if (window.obj6503_onTap_runningActionsCount < 0) {
	window.obj6503_onTap_runningActionsCount = 0;
} else if (window.obj6503_onTap_runningActionsCount == 0) {
	obj6503_onTap_actionGroup3();
}
	}
}









};
obj6503_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6503_onTap_activeActionGroupIndex = -1;
		$("#obj6503").trigger("obj6503_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6503) {
				console.warn("de-queueing event obj6503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6503_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57863();
function runjs_57863() {
	window.obj6503_onTap_runningActionsCount = obj6503_onTap_runningActionsCount + 1;

	$("#obj6503").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6503_onTap_runningActionsCount = window.obj6503_onTap_runningActionsCount - 1;
if (window.obj6503_onTap_runningActionsCount < 0) {
	window.obj6503_onTap_runningActionsCount = 0;
} else if (window.obj6503_onTap_runningActionsCount == 0) {
	obj6503_onTap_actionGroup4();
}
	}, 1);
}







};
obj6503_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6503_onTap_activeActionGroupIndex = -1;
		$("#obj6503").trigger("obj6503_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6503) {
				console.warn("de-queueing event obj6503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6503_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57864();
function switchText_57864() {
	window.obj6503_onTap_runningActionsCount = obj6503_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6503_onTap_runningActionsCount = window.obj6503_onTap_runningActionsCount - 1;
if (window.obj6503_onTap_runningActionsCount < 0) {
	window.obj6503_onTap_runningActionsCount = 0;
} else if (window.obj6503_onTap_runningActionsCount == 0) {
	obj6503_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6503_onTap_runningActionsCount = window.obj6503_onTap_runningActionsCount - 1;
if (window.obj6503_onTap_runningActionsCount < 0) {
	window.obj6503_onTap_runningActionsCount = 0;
} else if (window.obj6503_onTap_runningActionsCount == 0) {
	obj6503_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6503_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6503_onTap_activeActionGroupIndex = -1;
		$("#obj6503").trigger("obj6503_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6503) {
				console.warn("de-queueing event obj6503." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6503").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6503_onTap_activeActionGroupIndex = 5;
	





















};
obj6509_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6509_onTap_activeActionGroupIndex = -1;
		$("#obj6509").trigger("obj6509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6509) {
				console.warn("de-queueing event obj6509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6509_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57595();
function switchText_57595() {
	window.obj6509_onTap_runningActionsCount = obj6509_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6509_onTap_runningActionsCount = window.obj6509_onTap_runningActionsCount - 1;
if (window.obj6509_onTap_runningActionsCount < 0) {
	window.obj6509_onTap_runningActionsCount = 0;
} else if (window.obj6509_onTap_runningActionsCount == 0) {
	obj6509_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6509_onTap_runningActionsCount = window.obj6509_onTap_runningActionsCount - 1;
if (window.obj6509_onTap_runningActionsCount < 0) {
	window.obj6509_onTap_runningActionsCount = 0;
} else if (window.obj6509_onTap_runningActionsCount == 0) {
	obj6509_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6509_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6509_onTap_activeActionGroupIndex = -1;
		$("#obj6509").trigger("obj6509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6509) {
				console.warn("de-queueing event obj6509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6509_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57596();
function runjs_57596() {
	window.obj6509_onTap_runningActionsCount = obj6509_onTap_runningActionsCount + 1;

	$("#obj6509").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6509_onTap_runningActionsCount = window.obj6509_onTap_runningActionsCount - 1;
if (window.obj6509_onTap_runningActionsCount < 0) {
	window.obj6509_onTap_runningActionsCount = 0;
} else if (window.obj6509_onTap_runningActionsCount == 0) {
	obj6509_onTap_actionGroup2();
}
	}, 1);
}







};
obj6509_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6509_onTap_activeActionGroupIndex = -1;
		$("#obj6509").trigger("obj6509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6509) {
				console.warn("de-queueing event obj6509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6509_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57597();
function playAudio_57597() {
	window.obj6509_onTap_runningActionsCount = obj6509_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6509_onTap_runningActionsCount = window.obj6509_onTap_runningActionsCount - 1;
if (window.obj6509_onTap_runningActionsCount < 0) {
	window.obj6509_onTap_runningActionsCount = 0;
} else if (window.obj6509_onTap_runningActionsCount == 0) {
	obj6509_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6509_onTap_runningActionsCount = window.obj6509_onTap_runningActionsCount - 1;
if (window.obj6509_onTap_runningActionsCount < 0) {
	window.obj6509_onTap_runningActionsCount = 0;
} else if (window.obj6509_onTap_runningActionsCount == 0) {
	obj6509_onTap_actionGroup3();
}
	}
}









};
obj6509_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6509_onTap_activeActionGroupIndex = -1;
		$("#obj6509").trigger("obj6509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6509) {
				console.warn("de-queueing event obj6509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6509_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57598();
function runjs_57598() {
	window.obj6509_onTap_runningActionsCount = obj6509_onTap_runningActionsCount + 1;

	$("#obj6509").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6509_onTap_runningActionsCount = window.obj6509_onTap_runningActionsCount - 1;
if (window.obj6509_onTap_runningActionsCount < 0) {
	window.obj6509_onTap_runningActionsCount = 0;
} else if (window.obj6509_onTap_runningActionsCount == 0) {
	obj6509_onTap_actionGroup4();
}
	}, 1);
}







};
obj6509_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6509_onTap_activeActionGroupIndex = -1;
		$("#obj6509").trigger("obj6509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6509) {
				console.warn("de-queueing event obj6509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6509_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57599();
function switchText_57599() {
	window.obj6509_onTap_runningActionsCount = obj6509_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6509_onTap_runningActionsCount = window.obj6509_onTap_runningActionsCount - 1;
if (window.obj6509_onTap_runningActionsCount < 0) {
	window.obj6509_onTap_runningActionsCount = 0;
} else if (window.obj6509_onTap_runningActionsCount == 0) {
	obj6509_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6509_onTap_runningActionsCount = window.obj6509_onTap_runningActionsCount - 1;
if (window.obj6509_onTap_runningActionsCount < 0) {
	window.obj6509_onTap_runningActionsCount = 0;
} else if (window.obj6509_onTap_runningActionsCount == 0) {
	obj6509_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6509_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6509_onTap_activeActionGroupIndex = -1;
		$("#obj6509").trigger("obj6509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6509) {
				console.warn("de-queueing event obj6509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6509_onTap_activeActionGroupIndex = 5;
	





















};
obj6513_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6513_onTap_activeActionGroupIndex = -1;
		$("#obj6513").trigger("obj6513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6513) {
				console.warn("de-queueing event obj6513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6513_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57745();
function switchText_57745() {
	window.obj6513_onTap_runningActionsCount = obj6513_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6513_onTap_runningActionsCount = window.obj6513_onTap_runningActionsCount - 1;
if (window.obj6513_onTap_runningActionsCount < 0) {
	window.obj6513_onTap_runningActionsCount = 0;
} else if (window.obj6513_onTap_runningActionsCount == 0) {
	obj6513_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6513_onTap_runningActionsCount = window.obj6513_onTap_runningActionsCount - 1;
if (window.obj6513_onTap_runningActionsCount < 0) {
	window.obj6513_onTap_runningActionsCount = 0;
} else if (window.obj6513_onTap_runningActionsCount == 0) {
	obj6513_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6513_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6513_onTap_activeActionGroupIndex = -1;
		$("#obj6513").trigger("obj6513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6513) {
				console.warn("de-queueing event obj6513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6513_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57746();
function runjs_57746() {
	window.obj6513_onTap_runningActionsCount = obj6513_onTap_runningActionsCount + 1;

	$("#obj6513").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6513_onTap_runningActionsCount = window.obj6513_onTap_runningActionsCount - 1;
if (window.obj6513_onTap_runningActionsCount < 0) {
	window.obj6513_onTap_runningActionsCount = 0;
} else if (window.obj6513_onTap_runningActionsCount == 0) {
	obj6513_onTap_actionGroup2();
}
	}, 1);
}







};
obj6513_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6513_onTap_activeActionGroupIndex = -1;
		$("#obj6513").trigger("obj6513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6513) {
				console.warn("de-queueing event obj6513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6513_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57747();
function playAudio_57747() {
	window.obj6513_onTap_runningActionsCount = obj6513_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6513_onTap_runningActionsCount = window.obj6513_onTap_runningActionsCount - 1;
if (window.obj6513_onTap_runningActionsCount < 0) {
	window.obj6513_onTap_runningActionsCount = 0;
} else if (window.obj6513_onTap_runningActionsCount == 0) {
	obj6513_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6513_onTap_runningActionsCount = window.obj6513_onTap_runningActionsCount - 1;
if (window.obj6513_onTap_runningActionsCount < 0) {
	window.obj6513_onTap_runningActionsCount = 0;
} else if (window.obj6513_onTap_runningActionsCount == 0) {
	obj6513_onTap_actionGroup3();
}
	}
}









};
obj6513_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6513_onTap_activeActionGroupIndex = -1;
		$("#obj6513").trigger("obj6513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6513) {
				console.warn("de-queueing event obj6513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6513_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57748();
function runjs_57748() {
	window.obj6513_onTap_runningActionsCount = obj6513_onTap_runningActionsCount + 1;

	$("#obj6513").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6513_onTap_runningActionsCount = window.obj6513_onTap_runningActionsCount - 1;
if (window.obj6513_onTap_runningActionsCount < 0) {
	window.obj6513_onTap_runningActionsCount = 0;
} else if (window.obj6513_onTap_runningActionsCount == 0) {
	obj6513_onTap_actionGroup4();
}
	}, 1);
}







};
obj6513_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6513_onTap_activeActionGroupIndex = -1;
		$("#obj6513").trigger("obj6513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6513) {
				console.warn("de-queueing event obj6513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6513_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57749();
function switchText_57749() {
	window.obj6513_onTap_runningActionsCount = obj6513_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6513_onTap_runningActionsCount = window.obj6513_onTap_runningActionsCount - 1;
if (window.obj6513_onTap_runningActionsCount < 0) {
	window.obj6513_onTap_runningActionsCount = 0;
} else if (window.obj6513_onTap_runningActionsCount == 0) {
	obj6513_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6513_onTap_runningActionsCount = window.obj6513_onTap_runningActionsCount - 1;
if (window.obj6513_onTap_runningActionsCount < 0) {
	window.obj6513_onTap_runningActionsCount = 0;
} else if (window.obj6513_onTap_runningActionsCount == 0) {
	obj6513_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6513_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6513_onTap_activeActionGroupIndex = -1;
		$("#obj6513").trigger("obj6513_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6513) {
				console.warn("de-queueing event obj6513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6513_onTap_activeActionGroupIndex = 5;
	





















};
obj6515_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6515_onTap_activeActionGroupIndex = -1;
		$("#obj6515").trigger("obj6515_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6515) {
				console.warn("de-queueing event obj6515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6515_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57790();
function switchText_57790() {
	window.obj6515_onTap_runningActionsCount = obj6515_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6515_onTap_runningActionsCount = window.obj6515_onTap_runningActionsCount - 1;
if (window.obj6515_onTap_runningActionsCount < 0) {
	window.obj6515_onTap_runningActionsCount = 0;
} else if (window.obj6515_onTap_runningActionsCount == 0) {
	obj6515_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6515_onTap_runningActionsCount = window.obj6515_onTap_runningActionsCount - 1;
if (window.obj6515_onTap_runningActionsCount < 0) {
	window.obj6515_onTap_runningActionsCount = 0;
} else if (window.obj6515_onTap_runningActionsCount == 0) {
	obj6515_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6515_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6515_onTap_activeActionGroupIndex = -1;
		$("#obj6515").trigger("obj6515_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6515) {
				console.warn("de-queueing event obj6515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6515_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57791();
function runjs_57791() {
	window.obj6515_onTap_runningActionsCount = obj6515_onTap_runningActionsCount + 1;

	$("#obj6515").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6515_onTap_runningActionsCount = window.obj6515_onTap_runningActionsCount - 1;
if (window.obj6515_onTap_runningActionsCount < 0) {
	window.obj6515_onTap_runningActionsCount = 0;
} else if (window.obj6515_onTap_runningActionsCount == 0) {
	obj6515_onTap_actionGroup2();
}
	}, 1);
}







};
obj6515_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6515_onTap_activeActionGroupIndex = -1;
		$("#obj6515").trigger("obj6515_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6515) {
				console.warn("de-queueing event obj6515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6515_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57792();
function playAudio_57792() {
	window.obj6515_onTap_runningActionsCount = obj6515_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6515_onTap_runningActionsCount = window.obj6515_onTap_runningActionsCount - 1;
if (window.obj6515_onTap_runningActionsCount < 0) {
	window.obj6515_onTap_runningActionsCount = 0;
} else if (window.obj6515_onTap_runningActionsCount == 0) {
	obj6515_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6515_onTap_runningActionsCount = window.obj6515_onTap_runningActionsCount - 1;
if (window.obj6515_onTap_runningActionsCount < 0) {
	window.obj6515_onTap_runningActionsCount = 0;
} else if (window.obj6515_onTap_runningActionsCount == 0) {
	obj6515_onTap_actionGroup3();
}
	}
}









};
obj6515_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6515_onTap_activeActionGroupIndex = -1;
		$("#obj6515").trigger("obj6515_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6515) {
				console.warn("de-queueing event obj6515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6515_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57793();
function runjs_57793() {
	window.obj6515_onTap_runningActionsCount = obj6515_onTap_runningActionsCount + 1;

	$("#obj6515").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6515_onTap_runningActionsCount = window.obj6515_onTap_runningActionsCount - 1;
if (window.obj6515_onTap_runningActionsCount < 0) {
	window.obj6515_onTap_runningActionsCount = 0;
} else if (window.obj6515_onTap_runningActionsCount == 0) {
	obj6515_onTap_actionGroup4();
}
	}, 1);
}







};
obj6515_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6515_onTap_activeActionGroupIndex = -1;
		$("#obj6515").trigger("obj6515_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6515) {
				console.warn("de-queueing event obj6515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6515_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57794();
function switchText_57794() {
	window.obj6515_onTap_runningActionsCount = obj6515_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6515_onTap_runningActionsCount = window.obj6515_onTap_runningActionsCount - 1;
if (window.obj6515_onTap_runningActionsCount < 0) {
	window.obj6515_onTap_runningActionsCount = 0;
} else if (window.obj6515_onTap_runningActionsCount == 0) {
	obj6515_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6515_onTap_runningActionsCount = window.obj6515_onTap_runningActionsCount - 1;
if (window.obj6515_onTap_runningActionsCount < 0) {
	window.obj6515_onTap_runningActionsCount = 0;
} else if (window.obj6515_onTap_runningActionsCount == 0) {
	obj6515_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6515_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6515_onTap_activeActionGroupIndex = -1;
		$("#obj6515").trigger("obj6515_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6515) {
				console.warn("de-queueing event obj6515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6515_onTap_activeActionGroupIndex = 5;
	





















};
obj6517_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6517_onTap_activeActionGroupIndex = -1;
		$("#obj6517").trigger("obj6517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6517) {
				console.warn("de-queueing event obj6517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6517_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57830();
function switchText_57830() {
	window.obj6517_onTap_runningActionsCount = obj6517_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6517_onTap_runningActionsCount = window.obj6517_onTap_runningActionsCount - 1;
if (window.obj6517_onTap_runningActionsCount < 0) {
	window.obj6517_onTap_runningActionsCount = 0;
} else if (window.obj6517_onTap_runningActionsCount == 0) {
	obj6517_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6517_onTap_runningActionsCount = window.obj6517_onTap_runningActionsCount - 1;
if (window.obj6517_onTap_runningActionsCount < 0) {
	window.obj6517_onTap_runningActionsCount = 0;
} else if (window.obj6517_onTap_runningActionsCount == 0) {
	obj6517_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6517_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6517_onTap_activeActionGroupIndex = -1;
		$("#obj6517").trigger("obj6517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6517) {
				console.warn("de-queueing event obj6517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6517_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57831();
function runjs_57831() {
	window.obj6517_onTap_runningActionsCount = obj6517_onTap_runningActionsCount + 1;

	$("#obj6517").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6517_onTap_runningActionsCount = window.obj6517_onTap_runningActionsCount - 1;
if (window.obj6517_onTap_runningActionsCount < 0) {
	window.obj6517_onTap_runningActionsCount = 0;
} else if (window.obj6517_onTap_runningActionsCount == 0) {
	obj6517_onTap_actionGroup2();
}
	}, 1);
}







};
obj6517_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6517_onTap_activeActionGroupIndex = -1;
		$("#obj6517").trigger("obj6517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6517) {
				console.warn("de-queueing event obj6517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6517_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57832();
function playAudio_57832() {
	window.obj6517_onTap_runningActionsCount = obj6517_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6517_onTap_runningActionsCount = window.obj6517_onTap_runningActionsCount - 1;
if (window.obj6517_onTap_runningActionsCount < 0) {
	window.obj6517_onTap_runningActionsCount = 0;
} else if (window.obj6517_onTap_runningActionsCount == 0) {
	obj6517_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6517_onTap_runningActionsCount = window.obj6517_onTap_runningActionsCount - 1;
if (window.obj6517_onTap_runningActionsCount < 0) {
	window.obj6517_onTap_runningActionsCount = 0;
} else if (window.obj6517_onTap_runningActionsCount == 0) {
	obj6517_onTap_actionGroup3();
}
	}
}









};
obj6517_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6517_onTap_activeActionGroupIndex = -1;
		$("#obj6517").trigger("obj6517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6517) {
				console.warn("de-queueing event obj6517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6517_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57833();
function runjs_57833() {
	window.obj6517_onTap_runningActionsCount = obj6517_onTap_runningActionsCount + 1;

	$("#obj6517").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6517_onTap_runningActionsCount = window.obj6517_onTap_runningActionsCount - 1;
if (window.obj6517_onTap_runningActionsCount < 0) {
	window.obj6517_onTap_runningActionsCount = 0;
} else if (window.obj6517_onTap_runningActionsCount == 0) {
	obj6517_onTap_actionGroup4();
}
	}, 1);
}







};
obj6517_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6517_onTap_activeActionGroupIndex = -1;
		$("#obj6517").trigger("obj6517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6517) {
				console.warn("de-queueing event obj6517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6517_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57834();
function switchText_57834() {
	window.obj6517_onTap_runningActionsCount = obj6517_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6517_onTap_runningActionsCount = window.obj6517_onTap_runningActionsCount - 1;
if (window.obj6517_onTap_runningActionsCount < 0) {
	window.obj6517_onTap_runningActionsCount = 0;
} else if (window.obj6517_onTap_runningActionsCount == 0) {
	obj6517_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6517_onTap_runningActionsCount = window.obj6517_onTap_runningActionsCount - 1;
if (window.obj6517_onTap_runningActionsCount < 0) {
	window.obj6517_onTap_runningActionsCount = 0;
} else if (window.obj6517_onTap_runningActionsCount == 0) {
	obj6517_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6517_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6517_onTap_activeActionGroupIndex = -1;
		$("#obj6517").trigger("obj6517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6517) {
				console.warn("de-queueing event obj6517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6517_onTap_activeActionGroupIndex = 5;
	





















};
obj6519_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6519_onTap_activeActionGroupIndex = -1;
		$("#obj6519").trigger("obj6519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6519) {
				console.warn("de-queueing event obj6519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6519_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57865();
function switchText_57865() {
	window.obj6519_onTap_runningActionsCount = obj6519_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6519_onTap_runningActionsCount = window.obj6519_onTap_runningActionsCount - 1;
if (window.obj6519_onTap_runningActionsCount < 0) {
	window.obj6519_onTap_runningActionsCount = 0;
} else if (window.obj6519_onTap_runningActionsCount == 0) {
	obj6519_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6519_onTap_runningActionsCount = window.obj6519_onTap_runningActionsCount - 1;
if (window.obj6519_onTap_runningActionsCount < 0) {
	window.obj6519_onTap_runningActionsCount = 0;
} else if (window.obj6519_onTap_runningActionsCount == 0) {
	obj6519_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6519_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6519_onTap_activeActionGroupIndex = -1;
		$("#obj6519").trigger("obj6519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6519) {
				console.warn("de-queueing event obj6519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6519_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57866();
function runjs_57866() {
	window.obj6519_onTap_runningActionsCount = obj6519_onTap_runningActionsCount + 1;

	$("#obj6519").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6519_onTap_runningActionsCount = window.obj6519_onTap_runningActionsCount - 1;
if (window.obj6519_onTap_runningActionsCount < 0) {
	window.obj6519_onTap_runningActionsCount = 0;
} else if (window.obj6519_onTap_runningActionsCount == 0) {
	obj6519_onTap_actionGroup2();
}
	}, 1);
}







};
obj6519_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6519_onTap_activeActionGroupIndex = -1;
		$("#obj6519").trigger("obj6519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6519) {
				console.warn("de-queueing event obj6519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6519_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57867();
function playAudio_57867() {
	window.obj6519_onTap_runningActionsCount = obj6519_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6519_onTap_runningActionsCount = window.obj6519_onTap_runningActionsCount - 1;
if (window.obj6519_onTap_runningActionsCount < 0) {
	window.obj6519_onTap_runningActionsCount = 0;
} else if (window.obj6519_onTap_runningActionsCount == 0) {
	obj6519_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6519_onTap_runningActionsCount = window.obj6519_onTap_runningActionsCount - 1;
if (window.obj6519_onTap_runningActionsCount < 0) {
	window.obj6519_onTap_runningActionsCount = 0;
} else if (window.obj6519_onTap_runningActionsCount == 0) {
	obj6519_onTap_actionGroup3();
}
	}
}









};
obj6519_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6519_onTap_activeActionGroupIndex = -1;
		$("#obj6519").trigger("obj6519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6519) {
				console.warn("de-queueing event obj6519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6519_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57868();
function runjs_57868() {
	window.obj6519_onTap_runningActionsCount = obj6519_onTap_runningActionsCount + 1;

	$("#obj6519").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6519_onTap_runningActionsCount = window.obj6519_onTap_runningActionsCount - 1;
if (window.obj6519_onTap_runningActionsCount < 0) {
	window.obj6519_onTap_runningActionsCount = 0;
} else if (window.obj6519_onTap_runningActionsCount == 0) {
	obj6519_onTap_actionGroup4();
}
	}, 1);
}







};
obj6519_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6519_onTap_activeActionGroupIndex = -1;
		$("#obj6519").trigger("obj6519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6519) {
				console.warn("de-queueing event obj6519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6519_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57869();
function switchText_57869() {
	window.obj6519_onTap_runningActionsCount = obj6519_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6519_onTap_runningActionsCount = window.obj6519_onTap_runningActionsCount - 1;
if (window.obj6519_onTap_runningActionsCount < 0) {
	window.obj6519_onTap_runningActionsCount = 0;
} else if (window.obj6519_onTap_runningActionsCount == 0) {
	obj6519_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6519_onTap_runningActionsCount = window.obj6519_onTap_runningActionsCount - 1;
if (window.obj6519_onTap_runningActionsCount < 0) {
	window.obj6519_onTap_runningActionsCount = 0;
} else if (window.obj6519_onTap_runningActionsCount == 0) {
	obj6519_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6519_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6519_onTap_activeActionGroupIndex = -1;
		$("#obj6519").trigger("obj6519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6519) {
				console.warn("de-queueing event obj6519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6519_onTap_activeActionGroupIndex = 5;
	





















};
obj6521_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6521_onTap_activeActionGroupIndex = -1;
		$("#obj6521").trigger("obj6521_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6521) {
				console.warn("de-queueing event obj6521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6521_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57895();
function switchText_57895() {
	window.obj6521_onTap_runningActionsCount = obj6521_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6521_onTap_runningActionsCount = window.obj6521_onTap_runningActionsCount - 1;
if (window.obj6521_onTap_runningActionsCount < 0) {
	window.obj6521_onTap_runningActionsCount = 0;
} else if (window.obj6521_onTap_runningActionsCount == 0) {
	obj6521_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6521_onTap_runningActionsCount = window.obj6521_onTap_runningActionsCount - 1;
if (window.obj6521_onTap_runningActionsCount < 0) {
	window.obj6521_onTap_runningActionsCount = 0;
} else if (window.obj6521_onTap_runningActionsCount == 0) {
	obj6521_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6521_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6521_onTap_activeActionGroupIndex = -1;
		$("#obj6521").trigger("obj6521_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6521) {
				console.warn("de-queueing event obj6521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6521_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57896();
function runjs_57896() {
	window.obj6521_onTap_runningActionsCount = obj6521_onTap_runningActionsCount + 1;

	$("#obj6521").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6521_onTap_runningActionsCount = window.obj6521_onTap_runningActionsCount - 1;
if (window.obj6521_onTap_runningActionsCount < 0) {
	window.obj6521_onTap_runningActionsCount = 0;
} else if (window.obj6521_onTap_runningActionsCount == 0) {
	obj6521_onTap_actionGroup2();
}
	}, 1);
}







};
obj6521_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6521_onTap_activeActionGroupIndex = -1;
		$("#obj6521").trigger("obj6521_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6521) {
				console.warn("de-queueing event obj6521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6521_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57897();
function playAudio_57897() {
	window.obj6521_onTap_runningActionsCount = obj6521_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6521_onTap_runningActionsCount = window.obj6521_onTap_runningActionsCount - 1;
if (window.obj6521_onTap_runningActionsCount < 0) {
	window.obj6521_onTap_runningActionsCount = 0;
} else if (window.obj6521_onTap_runningActionsCount == 0) {
	obj6521_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6521_onTap_runningActionsCount = window.obj6521_onTap_runningActionsCount - 1;
if (window.obj6521_onTap_runningActionsCount < 0) {
	window.obj6521_onTap_runningActionsCount = 0;
} else if (window.obj6521_onTap_runningActionsCount == 0) {
	obj6521_onTap_actionGroup3();
}
	}
}









};
obj6521_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6521_onTap_activeActionGroupIndex = -1;
		$("#obj6521").trigger("obj6521_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6521) {
				console.warn("de-queueing event obj6521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6521_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57898();
function runjs_57898() {
	window.obj6521_onTap_runningActionsCount = obj6521_onTap_runningActionsCount + 1;

	$("#obj6521").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6521_onTap_runningActionsCount = window.obj6521_onTap_runningActionsCount - 1;
if (window.obj6521_onTap_runningActionsCount < 0) {
	window.obj6521_onTap_runningActionsCount = 0;
} else if (window.obj6521_onTap_runningActionsCount == 0) {
	obj6521_onTap_actionGroup4();
}
	}, 1);
}







};
obj6521_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6521_onTap_activeActionGroupIndex = -1;
		$("#obj6521").trigger("obj6521_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6521) {
				console.warn("de-queueing event obj6521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6521_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57899();
function switchText_57899() {
	window.obj6521_onTap_runningActionsCount = obj6521_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6521_onTap_runningActionsCount = window.obj6521_onTap_runningActionsCount - 1;
if (window.obj6521_onTap_runningActionsCount < 0) {
	window.obj6521_onTap_runningActionsCount = 0;
} else if (window.obj6521_onTap_runningActionsCount == 0) {
	obj6521_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6521_onTap_runningActionsCount = window.obj6521_onTap_runningActionsCount - 1;
if (window.obj6521_onTap_runningActionsCount < 0) {
	window.obj6521_onTap_runningActionsCount = 0;
} else if (window.obj6521_onTap_runningActionsCount == 0) {
	obj6521_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6521_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6521_onTap_activeActionGroupIndex = -1;
		$("#obj6521").trigger("obj6521_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6521) {
				console.warn("de-queueing event obj6521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6521_onTap_activeActionGroupIndex = 5;
	





















};
obj6525_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6525_onTap_activeActionGroupIndex = -1;
		$("#obj6525").trigger("obj6525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6525) {
				console.warn("de-queueing event obj6525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6525_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57600();
function switchText_57600() {
	window.obj6525_onTap_runningActionsCount = obj6525_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6525_onTap_runningActionsCount = window.obj6525_onTap_runningActionsCount - 1;
if (window.obj6525_onTap_runningActionsCount < 0) {
	window.obj6525_onTap_runningActionsCount = 0;
} else if (window.obj6525_onTap_runningActionsCount == 0) {
	obj6525_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6525_onTap_runningActionsCount = window.obj6525_onTap_runningActionsCount - 1;
if (window.obj6525_onTap_runningActionsCount < 0) {
	window.obj6525_onTap_runningActionsCount = 0;
} else if (window.obj6525_onTap_runningActionsCount == 0) {
	obj6525_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6525_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6525_onTap_activeActionGroupIndex = -1;
		$("#obj6525").trigger("obj6525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6525) {
				console.warn("de-queueing event obj6525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6525_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57601();
function runjs_57601() {
	window.obj6525_onTap_runningActionsCount = obj6525_onTap_runningActionsCount + 1;

	$("#obj6525").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6525_onTap_runningActionsCount = window.obj6525_onTap_runningActionsCount - 1;
if (window.obj6525_onTap_runningActionsCount < 0) {
	window.obj6525_onTap_runningActionsCount = 0;
} else if (window.obj6525_onTap_runningActionsCount == 0) {
	obj6525_onTap_actionGroup2();
}
	}, 1);
}







};
obj6525_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6525_onTap_activeActionGroupIndex = -1;
		$("#obj6525").trigger("obj6525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6525) {
				console.warn("de-queueing event obj6525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6525_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57602();
function playAudio_57602() {
	window.obj6525_onTap_runningActionsCount = obj6525_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6525_onTap_runningActionsCount = window.obj6525_onTap_runningActionsCount - 1;
if (window.obj6525_onTap_runningActionsCount < 0) {
	window.obj6525_onTap_runningActionsCount = 0;
} else if (window.obj6525_onTap_runningActionsCount == 0) {
	obj6525_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6525_onTap_runningActionsCount = window.obj6525_onTap_runningActionsCount - 1;
if (window.obj6525_onTap_runningActionsCount < 0) {
	window.obj6525_onTap_runningActionsCount = 0;
} else if (window.obj6525_onTap_runningActionsCount == 0) {
	obj6525_onTap_actionGroup3();
}
	}
}









};
obj6525_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6525_onTap_activeActionGroupIndex = -1;
		$("#obj6525").trigger("obj6525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6525) {
				console.warn("de-queueing event obj6525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6525_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57603();
function runjs_57603() {
	window.obj6525_onTap_runningActionsCount = obj6525_onTap_runningActionsCount + 1;

	$("#obj6525").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6525_onTap_runningActionsCount = window.obj6525_onTap_runningActionsCount - 1;
if (window.obj6525_onTap_runningActionsCount < 0) {
	window.obj6525_onTap_runningActionsCount = 0;
} else if (window.obj6525_onTap_runningActionsCount == 0) {
	obj6525_onTap_actionGroup4();
}
	}, 1);
}







};
obj6525_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6525_onTap_activeActionGroupIndex = -1;
		$("#obj6525").trigger("obj6525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6525) {
				console.warn("de-queueing event obj6525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6525_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57604();
function switchText_57604() {
	window.obj6525_onTap_runningActionsCount = obj6525_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6525_onTap_runningActionsCount = window.obj6525_onTap_runningActionsCount - 1;
if (window.obj6525_onTap_runningActionsCount < 0) {
	window.obj6525_onTap_runningActionsCount = 0;
} else if (window.obj6525_onTap_runningActionsCount == 0) {
	obj6525_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6525_onTap_runningActionsCount = window.obj6525_onTap_runningActionsCount - 1;
if (window.obj6525_onTap_runningActionsCount < 0) {
	window.obj6525_onTap_runningActionsCount = 0;
} else if (window.obj6525_onTap_runningActionsCount == 0) {
	obj6525_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6525_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6525_onTap_activeActionGroupIndex = -1;
		$("#obj6525").trigger("obj6525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6525) {
				console.warn("de-queueing event obj6525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6525_onTap_activeActionGroupIndex = 5;
	





















};
obj6529_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6529_onTap_activeActionGroupIndex = -1;
		$("#obj6529").trigger("obj6529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6529) {
				console.warn("de-queueing event obj6529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6529_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57750();
function switchText_57750() {
	window.obj6529_onTap_runningActionsCount = obj6529_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6529_onTap_runningActionsCount = window.obj6529_onTap_runningActionsCount - 1;
if (window.obj6529_onTap_runningActionsCount < 0) {
	window.obj6529_onTap_runningActionsCount = 0;
} else if (window.obj6529_onTap_runningActionsCount == 0) {
	obj6529_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6529_onTap_runningActionsCount = window.obj6529_onTap_runningActionsCount - 1;
if (window.obj6529_onTap_runningActionsCount < 0) {
	window.obj6529_onTap_runningActionsCount = 0;
} else if (window.obj6529_onTap_runningActionsCount == 0) {
	obj6529_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6529_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6529_onTap_activeActionGroupIndex = -1;
		$("#obj6529").trigger("obj6529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6529) {
				console.warn("de-queueing event obj6529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6529_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57751();
function runjs_57751() {
	window.obj6529_onTap_runningActionsCount = obj6529_onTap_runningActionsCount + 1;

	$("#obj6529").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6529_onTap_runningActionsCount = window.obj6529_onTap_runningActionsCount - 1;
if (window.obj6529_onTap_runningActionsCount < 0) {
	window.obj6529_onTap_runningActionsCount = 0;
} else if (window.obj6529_onTap_runningActionsCount == 0) {
	obj6529_onTap_actionGroup2();
}
	}, 1);
}







};
obj6529_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6529_onTap_activeActionGroupIndex = -1;
		$("#obj6529").trigger("obj6529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6529) {
				console.warn("de-queueing event obj6529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6529_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57752();
function playAudio_57752() {
	window.obj6529_onTap_runningActionsCount = obj6529_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6529_onTap_runningActionsCount = window.obj6529_onTap_runningActionsCount - 1;
if (window.obj6529_onTap_runningActionsCount < 0) {
	window.obj6529_onTap_runningActionsCount = 0;
} else if (window.obj6529_onTap_runningActionsCount == 0) {
	obj6529_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6529_onTap_runningActionsCount = window.obj6529_onTap_runningActionsCount - 1;
if (window.obj6529_onTap_runningActionsCount < 0) {
	window.obj6529_onTap_runningActionsCount = 0;
} else if (window.obj6529_onTap_runningActionsCount == 0) {
	obj6529_onTap_actionGroup3();
}
	}
}









};
obj6529_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6529_onTap_activeActionGroupIndex = -1;
		$("#obj6529").trigger("obj6529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6529) {
				console.warn("de-queueing event obj6529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6529_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57753();
function runjs_57753() {
	window.obj6529_onTap_runningActionsCount = obj6529_onTap_runningActionsCount + 1;

	$("#obj6529").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6529_onTap_runningActionsCount = window.obj6529_onTap_runningActionsCount - 1;
if (window.obj6529_onTap_runningActionsCount < 0) {
	window.obj6529_onTap_runningActionsCount = 0;
} else if (window.obj6529_onTap_runningActionsCount == 0) {
	obj6529_onTap_actionGroup4();
}
	}, 1);
}







};
obj6529_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6529_onTap_activeActionGroupIndex = -1;
		$("#obj6529").trigger("obj6529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6529) {
				console.warn("de-queueing event obj6529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6529_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57754();
function switchText_57754() {
	window.obj6529_onTap_runningActionsCount = obj6529_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6529_onTap_runningActionsCount = window.obj6529_onTap_runningActionsCount - 1;
if (window.obj6529_onTap_runningActionsCount < 0) {
	window.obj6529_onTap_runningActionsCount = 0;
} else if (window.obj6529_onTap_runningActionsCount == 0) {
	obj6529_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6529_onTap_runningActionsCount = window.obj6529_onTap_runningActionsCount - 1;
if (window.obj6529_onTap_runningActionsCount < 0) {
	window.obj6529_onTap_runningActionsCount = 0;
} else if (window.obj6529_onTap_runningActionsCount == 0) {
	obj6529_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6529_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6529_onTap_activeActionGroupIndex = -1;
		$("#obj6529").trigger("obj6529_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6529) {
				console.warn("de-queueing event obj6529." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6529").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6529_onTap_activeActionGroupIndex = 5;
	





















};
obj6531_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6531_onTap_activeActionGroupIndex = -1;
		$("#obj6531").trigger("obj6531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6531) {
				console.warn("de-queueing event obj6531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6531_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57795();
function switchText_57795() {
	window.obj6531_onTap_runningActionsCount = obj6531_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6531_onTap_runningActionsCount = window.obj6531_onTap_runningActionsCount - 1;
if (window.obj6531_onTap_runningActionsCount < 0) {
	window.obj6531_onTap_runningActionsCount = 0;
} else if (window.obj6531_onTap_runningActionsCount == 0) {
	obj6531_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6531_onTap_runningActionsCount = window.obj6531_onTap_runningActionsCount - 1;
if (window.obj6531_onTap_runningActionsCount < 0) {
	window.obj6531_onTap_runningActionsCount = 0;
} else if (window.obj6531_onTap_runningActionsCount == 0) {
	obj6531_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6531_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6531_onTap_activeActionGroupIndex = -1;
		$("#obj6531").trigger("obj6531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6531) {
				console.warn("de-queueing event obj6531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6531_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57796();
function runjs_57796() {
	window.obj6531_onTap_runningActionsCount = obj6531_onTap_runningActionsCount + 1;

	$("#obj6531").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6531_onTap_runningActionsCount = window.obj6531_onTap_runningActionsCount - 1;
if (window.obj6531_onTap_runningActionsCount < 0) {
	window.obj6531_onTap_runningActionsCount = 0;
} else if (window.obj6531_onTap_runningActionsCount == 0) {
	obj6531_onTap_actionGroup2();
}
	}, 1);
}







};
obj6531_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6531_onTap_activeActionGroupIndex = -1;
		$("#obj6531").trigger("obj6531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6531) {
				console.warn("de-queueing event obj6531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6531_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57797();
function playAudio_57797() {
	window.obj6531_onTap_runningActionsCount = obj6531_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6531_onTap_runningActionsCount = window.obj6531_onTap_runningActionsCount - 1;
if (window.obj6531_onTap_runningActionsCount < 0) {
	window.obj6531_onTap_runningActionsCount = 0;
} else if (window.obj6531_onTap_runningActionsCount == 0) {
	obj6531_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6531_onTap_runningActionsCount = window.obj6531_onTap_runningActionsCount - 1;
if (window.obj6531_onTap_runningActionsCount < 0) {
	window.obj6531_onTap_runningActionsCount = 0;
} else if (window.obj6531_onTap_runningActionsCount == 0) {
	obj6531_onTap_actionGroup3();
}
	}
}









};
obj6531_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6531_onTap_activeActionGroupIndex = -1;
		$("#obj6531").trigger("obj6531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6531) {
				console.warn("de-queueing event obj6531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6531_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57798();
function runjs_57798() {
	window.obj6531_onTap_runningActionsCount = obj6531_onTap_runningActionsCount + 1;

	$("#obj6531").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6531_onTap_runningActionsCount = window.obj6531_onTap_runningActionsCount - 1;
if (window.obj6531_onTap_runningActionsCount < 0) {
	window.obj6531_onTap_runningActionsCount = 0;
} else if (window.obj6531_onTap_runningActionsCount == 0) {
	obj6531_onTap_actionGroup4();
}
	}, 1);
}







};
obj6531_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6531_onTap_activeActionGroupIndex = -1;
		$("#obj6531").trigger("obj6531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6531) {
				console.warn("de-queueing event obj6531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6531_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57799();
function switchText_57799() {
	window.obj6531_onTap_runningActionsCount = obj6531_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6531_onTap_runningActionsCount = window.obj6531_onTap_runningActionsCount - 1;
if (window.obj6531_onTap_runningActionsCount < 0) {
	window.obj6531_onTap_runningActionsCount = 0;
} else if (window.obj6531_onTap_runningActionsCount == 0) {
	obj6531_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6531_onTap_runningActionsCount = window.obj6531_onTap_runningActionsCount - 1;
if (window.obj6531_onTap_runningActionsCount < 0) {
	window.obj6531_onTap_runningActionsCount = 0;
} else if (window.obj6531_onTap_runningActionsCount == 0) {
	obj6531_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6531_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6531_onTap_activeActionGroupIndex = -1;
		$("#obj6531").trigger("obj6531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6531) {
				console.warn("de-queueing event obj6531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6531_onTap_activeActionGroupIndex = 5;
	





















};
obj6533_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6533_onTap_activeActionGroupIndex = -1;
		$("#obj6533").trigger("obj6533_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6533) {
				console.warn("de-queueing event obj6533." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6533").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6533_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57835();
function switchText_57835() {
	window.obj6533_onTap_runningActionsCount = obj6533_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6533_onTap_runningActionsCount = window.obj6533_onTap_runningActionsCount - 1;
if (window.obj6533_onTap_runningActionsCount < 0) {
	window.obj6533_onTap_runningActionsCount = 0;
} else if (window.obj6533_onTap_runningActionsCount == 0) {
	obj6533_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6533_onTap_runningActionsCount = window.obj6533_onTap_runningActionsCount - 1;
if (window.obj6533_onTap_runningActionsCount < 0) {
	window.obj6533_onTap_runningActionsCount = 0;
} else if (window.obj6533_onTap_runningActionsCount == 0) {
	obj6533_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6533_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6533_onTap_activeActionGroupIndex = -1;
		$("#obj6533").trigger("obj6533_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6533) {
				console.warn("de-queueing event obj6533." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6533").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6533_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57836();
function runjs_57836() {
	window.obj6533_onTap_runningActionsCount = obj6533_onTap_runningActionsCount + 1;

	$("#obj6533").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6533_onTap_runningActionsCount = window.obj6533_onTap_runningActionsCount - 1;
if (window.obj6533_onTap_runningActionsCount < 0) {
	window.obj6533_onTap_runningActionsCount = 0;
} else if (window.obj6533_onTap_runningActionsCount == 0) {
	obj6533_onTap_actionGroup2();
}
	}, 1);
}







};
obj6533_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6533_onTap_activeActionGroupIndex = -1;
		$("#obj6533").trigger("obj6533_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6533) {
				console.warn("de-queueing event obj6533." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6533").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6533_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57837();
function playAudio_57837() {
	window.obj6533_onTap_runningActionsCount = obj6533_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6533_onTap_runningActionsCount = window.obj6533_onTap_runningActionsCount - 1;
if (window.obj6533_onTap_runningActionsCount < 0) {
	window.obj6533_onTap_runningActionsCount = 0;
} else if (window.obj6533_onTap_runningActionsCount == 0) {
	obj6533_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6533_onTap_runningActionsCount = window.obj6533_onTap_runningActionsCount - 1;
if (window.obj6533_onTap_runningActionsCount < 0) {
	window.obj6533_onTap_runningActionsCount = 0;
} else if (window.obj6533_onTap_runningActionsCount == 0) {
	obj6533_onTap_actionGroup3();
}
	}
}









};
obj6533_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6533_onTap_activeActionGroupIndex = -1;
		$("#obj6533").trigger("obj6533_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6533) {
				console.warn("de-queueing event obj6533." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6533").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6533_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57838();
function runjs_57838() {
	window.obj6533_onTap_runningActionsCount = obj6533_onTap_runningActionsCount + 1;

	$("#obj6533").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6533_onTap_runningActionsCount = window.obj6533_onTap_runningActionsCount - 1;
if (window.obj6533_onTap_runningActionsCount < 0) {
	window.obj6533_onTap_runningActionsCount = 0;
} else if (window.obj6533_onTap_runningActionsCount == 0) {
	obj6533_onTap_actionGroup4();
}
	}, 1);
}







};
obj6533_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6533_onTap_activeActionGroupIndex = -1;
		$("#obj6533").trigger("obj6533_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6533) {
				console.warn("de-queueing event obj6533." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6533").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6533_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57839();
function switchText_57839() {
	window.obj6533_onTap_runningActionsCount = obj6533_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6533_onTap_runningActionsCount = window.obj6533_onTap_runningActionsCount - 1;
if (window.obj6533_onTap_runningActionsCount < 0) {
	window.obj6533_onTap_runningActionsCount = 0;
} else if (window.obj6533_onTap_runningActionsCount == 0) {
	obj6533_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6533_onTap_runningActionsCount = window.obj6533_onTap_runningActionsCount - 1;
if (window.obj6533_onTap_runningActionsCount < 0) {
	window.obj6533_onTap_runningActionsCount = 0;
} else if (window.obj6533_onTap_runningActionsCount == 0) {
	obj6533_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6533_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6533_onTap_activeActionGroupIndex = -1;
		$("#obj6533").trigger("obj6533_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6533) {
				console.warn("de-queueing event obj6533." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6533").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6533_onTap_activeActionGroupIndex = 5;
	





















};
obj6535_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6535_onTap_activeActionGroupIndex = -1;
		$("#obj6535").trigger("obj6535_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6535) {
				console.warn("de-queueing event obj6535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6535_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57870();
function switchText_57870() {
	window.obj6535_onTap_runningActionsCount = obj6535_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6535_onTap_runningActionsCount = window.obj6535_onTap_runningActionsCount - 1;
if (window.obj6535_onTap_runningActionsCount < 0) {
	window.obj6535_onTap_runningActionsCount = 0;
} else if (window.obj6535_onTap_runningActionsCount == 0) {
	obj6535_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6535_onTap_runningActionsCount = window.obj6535_onTap_runningActionsCount - 1;
if (window.obj6535_onTap_runningActionsCount < 0) {
	window.obj6535_onTap_runningActionsCount = 0;
} else if (window.obj6535_onTap_runningActionsCount == 0) {
	obj6535_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6535_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6535_onTap_activeActionGroupIndex = -1;
		$("#obj6535").trigger("obj6535_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6535) {
				console.warn("de-queueing event obj6535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6535_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57871();
function runjs_57871() {
	window.obj6535_onTap_runningActionsCount = obj6535_onTap_runningActionsCount + 1;

	$("#obj6535").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6535_onTap_runningActionsCount = window.obj6535_onTap_runningActionsCount - 1;
if (window.obj6535_onTap_runningActionsCount < 0) {
	window.obj6535_onTap_runningActionsCount = 0;
} else if (window.obj6535_onTap_runningActionsCount == 0) {
	obj6535_onTap_actionGroup2();
}
	}, 1);
}







};
obj6535_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6535_onTap_activeActionGroupIndex = -1;
		$("#obj6535").trigger("obj6535_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6535) {
				console.warn("de-queueing event obj6535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6535_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57872();
function playAudio_57872() {
	window.obj6535_onTap_runningActionsCount = obj6535_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6535_onTap_runningActionsCount = window.obj6535_onTap_runningActionsCount - 1;
if (window.obj6535_onTap_runningActionsCount < 0) {
	window.obj6535_onTap_runningActionsCount = 0;
} else if (window.obj6535_onTap_runningActionsCount == 0) {
	obj6535_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6535_onTap_runningActionsCount = window.obj6535_onTap_runningActionsCount - 1;
if (window.obj6535_onTap_runningActionsCount < 0) {
	window.obj6535_onTap_runningActionsCount = 0;
} else if (window.obj6535_onTap_runningActionsCount == 0) {
	obj6535_onTap_actionGroup3();
}
	}
}









};
obj6535_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6535_onTap_activeActionGroupIndex = -1;
		$("#obj6535").trigger("obj6535_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6535) {
				console.warn("de-queueing event obj6535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6535_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57873();
function runjs_57873() {
	window.obj6535_onTap_runningActionsCount = obj6535_onTap_runningActionsCount + 1;

	$("#obj6535").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6535_onTap_runningActionsCount = window.obj6535_onTap_runningActionsCount - 1;
if (window.obj6535_onTap_runningActionsCount < 0) {
	window.obj6535_onTap_runningActionsCount = 0;
} else if (window.obj6535_onTap_runningActionsCount == 0) {
	obj6535_onTap_actionGroup4();
}
	}, 1);
}







};
obj6535_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6535_onTap_activeActionGroupIndex = -1;
		$("#obj6535").trigger("obj6535_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6535) {
				console.warn("de-queueing event obj6535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6535_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57874();
function switchText_57874() {
	window.obj6535_onTap_runningActionsCount = obj6535_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6535_onTap_runningActionsCount = window.obj6535_onTap_runningActionsCount - 1;
if (window.obj6535_onTap_runningActionsCount < 0) {
	window.obj6535_onTap_runningActionsCount = 0;
} else if (window.obj6535_onTap_runningActionsCount == 0) {
	obj6535_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6535_onTap_runningActionsCount = window.obj6535_onTap_runningActionsCount - 1;
if (window.obj6535_onTap_runningActionsCount < 0) {
	window.obj6535_onTap_runningActionsCount = 0;
} else if (window.obj6535_onTap_runningActionsCount == 0) {
	obj6535_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6535_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6535_onTap_activeActionGroupIndex = -1;
		$("#obj6535").trigger("obj6535_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6535) {
				console.warn("de-queueing event obj6535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6535_onTap_activeActionGroupIndex = 5;
	





















};
obj6537_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6537_onTap_activeActionGroupIndex = -1;
		$("#obj6537").trigger("obj6537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6537) {
				console.warn("de-queueing event obj6537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6537_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57900();
function switchText_57900() {
	window.obj6537_onTap_runningActionsCount = obj6537_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6537_onTap_runningActionsCount = window.obj6537_onTap_runningActionsCount - 1;
if (window.obj6537_onTap_runningActionsCount < 0) {
	window.obj6537_onTap_runningActionsCount = 0;
} else if (window.obj6537_onTap_runningActionsCount == 0) {
	obj6537_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6537_onTap_runningActionsCount = window.obj6537_onTap_runningActionsCount - 1;
if (window.obj6537_onTap_runningActionsCount < 0) {
	window.obj6537_onTap_runningActionsCount = 0;
} else if (window.obj6537_onTap_runningActionsCount == 0) {
	obj6537_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6537_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6537_onTap_activeActionGroupIndex = -1;
		$("#obj6537").trigger("obj6537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6537) {
				console.warn("de-queueing event obj6537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6537_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57901();
function runjs_57901() {
	window.obj6537_onTap_runningActionsCount = obj6537_onTap_runningActionsCount + 1;

	$("#obj6537").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6537_onTap_runningActionsCount = window.obj6537_onTap_runningActionsCount - 1;
if (window.obj6537_onTap_runningActionsCount < 0) {
	window.obj6537_onTap_runningActionsCount = 0;
} else if (window.obj6537_onTap_runningActionsCount == 0) {
	obj6537_onTap_actionGroup2();
}
	}, 1);
}







};
obj6537_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6537_onTap_activeActionGroupIndex = -1;
		$("#obj6537").trigger("obj6537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6537) {
				console.warn("de-queueing event obj6537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6537_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57902();
function playAudio_57902() {
	window.obj6537_onTap_runningActionsCount = obj6537_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6537_onTap_runningActionsCount = window.obj6537_onTap_runningActionsCount - 1;
if (window.obj6537_onTap_runningActionsCount < 0) {
	window.obj6537_onTap_runningActionsCount = 0;
} else if (window.obj6537_onTap_runningActionsCount == 0) {
	obj6537_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6537_onTap_runningActionsCount = window.obj6537_onTap_runningActionsCount - 1;
if (window.obj6537_onTap_runningActionsCount < 0) {
	window.obj6537_onTap_runningActionsCount = 0;
} else if (window.obj6537_onTap_runningActionsCount == 0) {
	obj6537_onTap_actionGroup3();
}
	}
}









};
obj6537_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6537_onTap_activeActionGroupIndex = -1;
		$("#obj6537").trigger("obj6537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6537) {
				console.warn("de-queueing event obj6537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6537_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57903();
function runjs_57903() {
	window.obj6537_onTap_runningActionsCount = obj6537_onTap_runningActionsCount + 1;

	$("#obj6537").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6537_onTap_runningActionsCount = window.obj6537_onTap_runningActionsCount - 1;
if (window.obj6537_onTap_runningActionsCount < 0) {
	window.obj6537_onTap_runningActionsCount = 0;
} else if (window.obj6537_onTap_runningActionsCount == 0) {
	obj6537_onTap_actionGroup4();
}
	}, 1);
}







};
obj6537_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6537_onTap_activeActionGroupIndex = -1;
		$("#obj6537").trigger("obj6537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6537) {
				console.warn("de-queueing event obj6537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6537_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57904();
function switchText_57904() {
	window.obj6537_onTap_runningActionsCount = obj6537_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6537_onTap_runningActionsCount = window.obj6537_onTap_runningActionsCount - 1;
if (window.obj6537_onTap_runningActionsCount < 0) {
	window.obj6537_onTap_runningActionsCount = 0;
} else if (window.obj6537_onTap_runningActionsCount == 0) {
	obj6537_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6537_onTap_runningActionsCount = window.obj6537_onTap_runningActionsCount - 1;
if (window.obj6537_onTap_runningActionsCount < 0) {
	window.obj6537_onTap_runningActionsCount = 0;
} else if (window.obj6537_onTap_runningActionsCount == 0) {
	obj6537_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6537_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6537_onTap_activeActionGroupIndex = -1;
		$("#obj6537").trigger("obj6537_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6537) {
				console.warn("de-queueing event obj6537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6537_onTap_activeActionGroupIndex = 5;
	





















};
obj6545_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6545_onTap_activeActionGroupIndex = -1;
		$("#obj6545").trigger("obj6545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6545) {
				console.warn("de-queueing event obj6545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6545_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57755();
function switchText_57755() {
	window.obj6545_onTap_runningActionsCount = obj6545_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6545_onTap_runningActionsCount = window.obj6545_onTap_runningActionsCount - 1;
if (window.obj6545_onTap_runningActionsCount < 0) {
	window.obj6545_onTap_runningActionsCount = 0;
} else if (window.obj6545_onTap_runningActionsCount == 0) {
	obj6545_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6545_onTap_runningActionsCount = window.obj6545_onTap_runningActionsCount - 1;
if (window.obj6545_onTap_runningActionsCount < 0) {
	window.obj6545_onTap_runningActionsCount = 0;
} else if (window.obj6545_onTap_runningActionsCount == 0) {
	obj6545_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6545_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6545_onTap_activeActionGroupIndex = -1;
		$("#obj6545").trigger("obj6545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6545) {
				console.warn("de-queueing event obj6545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6545_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57756();
function runjs_57756() {
	window.obj6545_onTap_runningActionsCount = obj6545_onTap_runningActionsCount + 1;

	$("#obj6545").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6545_onTap_runningActionsCount = window.obj6545_onTap_runningActionsCount - 1;
if (window.obj6545_onTap_runningActionsCount < 0) {
	window.obj6545_onTap_runningActionsCount = 0;
} else if (window.obj6545_onTap_runningActionsCount == 0) {
	obj6545_onTap_actionGroup2();
}
	}, 1);
}







};
obj6545_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6545_onTap_activeActionGroupIndex = -1;
		$("#obj6545").trigger("obj6545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6545) {
				console.warn("de-queueing event obj6545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6545_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57757();
function playAudio_57757() {
	window.obj6545_onTap_runningActionsCount = obj6545_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6545_onTap_runningActionsCount = window.obj6545_onTap_runningActionsCount - 1;
if (window.obj6545_onTap_runningActionsCount < 0) {
	window.obj6545_onTap_runningActionsCount = 0;
} else if (window.obj6545_onTap_runningActionsCount == 0) {
	obj6545_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6545_onTap_runningActionsCount = window.obj6545_onTap_runningActionsCount - 1;
if (window.obj6545_onTap_runningActionsCount < 0) {
	window.obj6545_onTap_runningActionsCount = 0;
} else if (window.obj6545_onTap_runningActionsCount == 0) {
	obj6545_onTap_actionGroup3();
}
	}
}









};
obj6545_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6545_onTap_activeActionGroupIndex = -1;
		$("#obj6545").trigger("obj6545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6545) {
				console.warn("de-queueing event obj6545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6545_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57758();
function runjs_57758() {
	window.obj6545_onTap_runningActionsCount = obj6545_onTap_runningActionsCount + 1;

	$("#obj6545").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6545_onTap_runningActionsCount = window.obj6545_onTap_runningActionsCount - 1;
if (window.obj6545_onTap_runningActionsCount < 0) {
	window.obj6545_onTap_runningActionsCount = 0;
} else if (window.obj6545_onTap_runningActionsCount == 0) {
	obj6545_onTap_actionGroup4();
}
	}, 1);
}







};
obj6545_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6545_onTap_activeActionGroupIndex = -1;
		$("#obj6545").trigger("obj6545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6545) {
				console.warn("de-queueing event obj6545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6545_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57759();
function switchText_57759() {
	window.obj6545_onTap_runningActionsCount = obj6545_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6545_onTap_runningActionsCount = window.obj6545_onTap_runningActionsCount - 1;
if (window.obj6545_onTap_runningActionsCount < 0) {
	window.obj6545_onTap_runningActionsCount = 0;
} else if (window.obj6545_onTap_runningActionsCount == 0) {
	obj6545_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6545_onTap_runningActionsCount = window.obj6545_onTap_runningActionsCount - 1;
if (window.obj6545_onTap_runningActionsCount < 0) {
	window.obj6545_onTap_runningActionsCount = 0;
} else if (window.obj6545_onTap_runningActionsCount == 0) {
	obj6545_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6545_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6545_onTap_activeActionGroupIndex = -1;
		$("#obj6545").trigger("obj6545_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6545) {
				console.warn("de-queueing event obj6545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6545_onTap_activeActionGroupIndex = 5;
	





















};
obj6547_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6547_onTap_activeActionGroupIndex = -1;
		$("#obj6547").trigger("obj6547_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6547) {
				console.warn("de-queueing event obj6547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6547_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57800();
function switchText_57800() {
	window.obj6547_onTap_runningActionsCount = obj6547_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6547_onTap_runningActionsCount = window.obj6547_onTap_runningActionsCount - 1;
if (window.obj6547_onTap_runningActionsCount < 0) {
	window.obj6547_onTap_runningActionsCount = 0;
} else if (window.obj6547_onTap_runningActionsCount == 0) {
	obj6547_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6547_onTap_runningActionsCount = window.obj6547_onTap_runningActionsCount - 1;
if (window.obj6547_onTap_runningActionsCount < 0) {
	window.obj6547_onTap_runningActionsCount = 0;
} else if (window.obj6547_onTap_runningActionsCount == 0) {
	obj6547_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6547_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6547_onTap_activeActionGroupIndex = -1;
		$("#obj6547").trigger("obj6547_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6547) {
				console.warn("de-queueing event obj6547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6547_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57801();
function runjs_57801() {
	window.obj6547_onTap_runningActionsCount = obj6547_onTap_runningActionsCount + 1;

	$("#obj6547").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6547_onTap_runningActionsCount = window.obj6547_onTap_runningActionsCount - 1;
if (window.obj6547_onTap_runningActionsCount < 0) {
	window.obj6547_onTap_runningActionsCount = 0;
} else if (window.obj6547_onTap_runningActionsCount == 0) {
	obj6547_onTap_actionGroup2();
}
	}, 1);
}







};
obj6547_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6547_onTap_activeActionGroupIndex = -1;
		$("#obj6547").trigger("obj6547_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6547) {
				console.warn("de-queueing event obj6547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6547_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57802();
function playAudio_57802() {
	window.obj6547_onTap_runningActionsCount = obj6547_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6547_onTap_runningActionsCount = window.obj6547_onTap_runningActionsCount - 1;
if (window.obj6547_onTap_runningActionsCount < 0) {
	window.obj6547_onTap_runningActionsCount = 0;
} else if (window.obj6547_onTap_runningActionsCount == 0) {
	obj6547_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6547_onTap_runningActionsCount = window.obj6547_onTap_runningActionsCount - 1;
if (window.obj6547_onTap_runningActionsCount < 0) {
	window.obj6547_onTap_runningActionsCount = 0;
} else if (window.obj6547_onTap_runningActionsCount == 0) {
	obj6547_onTap_actionGroup3();
}
	}
}









};
obj6547_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6547_onTap_activeActionGroupIndex = -1;
		$("#obj6547").trigger("obj6547_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6547) {
				console.warn("de-queueing event obj6547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6547_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57803();
function runjs_57803() {
	window.obj6547_onTap_runningActionsCount = obj6547_onTap_runningActionsCount + 1;

	$("#obj6547").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6547_onTap_runningActionsCount = window.obj6547_onTap_runningActionsCount - 1;
if (window.obj6547_onTap_runningActionsCount < 0) {
	window.obj6547_onTap_runningActionsCount = 0;
} else if (window.obj6547_onTap_runningActionsCount == 0) {
	obj6547_onTap_actionGroup4();
}
	}, 1);
}







};
obj6547_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6547_onTap_activeActionGroupIndex = -1;
		$("#obj6547").trigger("obj6547_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6547) {
				console.warn("de-queueing event obj6547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6547_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57804();
function switchText_57804() {
	window.obj6547_onTap_runningActionsCount = obj6547_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6547_onTap_runningActionsCount = window.obj6547_onTap_runningActionsCount - 1;
if (window.obj6547_onTap_runningActionsCount < 0) {
	window.obj6547_onTap_runningActionsCount = 0;
} else if (window.obj6547_onTap_runningActionsCount == 0) {
	obj6547_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6547_onTap_runningActionsCount = window.obj6547_onTap_runningActionsCount - 1;
if (window.obj6547_onTap_runningActionsCount < 0) {
	window.obj6547_onTap_runningActionsCount = 0;
} else if (window.obj6547_onTap_runningActionsCount == 0) {
	obj6547_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6547_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6547_onTap_activeActionGroupIndex = -1;
		$("#obj6547").trigger("obj6547_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6547) {
				console.warn("de-queueing event obj6547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6547_onTap_activeActionGroupIndex = 5;
	





















};
obj6549_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6549_onTap_activeActionGroupIndex = -1;
		$("#obj6549").trigger("obj6549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6549) {
				console.warn("de-queueing event obj6549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6549_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57840();
function switchText_57840() {
	window.obj6549_onTap_runningActionsCount = obj6549_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6549_onTap_runningActionsCount = window.obj6549_onTap_runningActionsCount - 1;
if (window.obj6549_onTap_runningActionsCount < 0) {
	window.obj6549_onTap_runningActionsCount = 0;
} else if (window.obj6549_onTap_runningActionsCount == 0) {
	obj6549_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6549_onTap_runningActionsCount = window.obj6549_onTap_runningActionsCount - 1;
if (window.obj6549_onTap_runningActionsCount < 0) {
	window.obj6549_onTap_runningActionsCount = 0;
} else if (window.obj6549_onTap_runningActionsCount == 0) {
	obj6549_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6549_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6549_onTap_activeActionGroupIndex = -1;
		$("#obj6549").trigger("obj6549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6549) {
				console.warn("de-queueing event obj6549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6549_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57841();
function runjs_57841() {
	window.obj6549_onTap_runningActionsCount = obj6549_onTap_runningActionsCount + 1;

	$("#obj6549").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6549_onTap_runningActionsCount = window.obj6549_onTap_runningActionsCount - 1;
if (window.obj6549_onTap_runningActionsCount < 0) {
	window.obj6549_onTap_runningActionsCount = 0;
} else if (window.obj6549_onTap_runningActionsCount == 0) {
	obj6549_onTap_actionGroup2();
}
	}, 1);
}







};
obj6549_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6549_onTap_activeActionGroupIndex = -1;
		$("#obj6549").trigger("obj6549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6549) {
				console.warn("de-queueing event obj6549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6549_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57842();
function playAudio_57842() {
	window.obj6549_onTap_runningActionsCount = obj6549_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6549_onTap_runningActionsCount = window.obj6549_onTap_runningActionsCount - 1;
if (window.obj6549_onTap_runningActionsCount < 0) {
	window.obj6549_onTap_runningActionsCount = 0;
} else if (window.obj6549_onTap_runningActionsCount == 0) {
	obj6549_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6549_onTap_runningActionsCount = window.obj6549_onTap_runningActionsCount - 1;
if (window.obj6549_onTap_runningActionsCount < 0) {
	window.obj6549_onTap_runningActionsCount = 0;
} else if (window.obj6549_onTap_runningActionsCount == 0) {
	obj6549_onTap_actionGroup3();
}
	}
}









};
obj6549_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6549_onTap_activeActionGroupIndex = -1;
		$("#obj6549").trigger("obj6549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6549) {
				console.warn("de-queueing event obj6549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6549_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57843();
function runjs_57843() {
	window.obj6549_onTap_runningActionsCount = obj6549_onTap_runningActionsCount + 1;

	$("#obj6549").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6549_onTap_runningActionsCount = window.obj6549_onTap_runningActionsCount - 1;
if (window.obj6549_onTap_runningActionsCount < 0) {
	window.obj6549_onTap_runningActionsCount = 0;
} else if (window.obj6549_onTap_runningActionsCount == 0) {
	obj6549_onTap_actionGroup4();
}
	}, 1);
}







};
obj6549_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6549_onTap_activeActionGroupIndex = -1;
		$("#obj6549").trigger("obj6549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6549) {
				console.warn("de-queueing event obj6549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6549_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57844();
function switchText_57844() {
	window.obj6549_onTap_runningActionsCount = obj6549_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6549_onTap_runningActionsCount = window.obj6549_onTap_runningActionsCount - 1;
if (window.obj6549_onTap_runningActionsCount < 0) {
	window.obj6549_onTap_runningActionsCount = 0;
} else if (window.obj6549_onTap_runningActionsCount == 0) {
	obj6549_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6549_onTap_runningActionsCount = window.obj6549_onTap_runningActionsCount - 1;
if (window.obj6549_onTap_runningActionsCount < 0) {
	window.obj6549_onTap_runningActionsCount = 0;
} else if (window.obj6549_onTap_runningActionsCount == 0) {
	obj6549_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6549_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6549_onTap_activeActionGroupIndex = -1;
		$("#obj6549").trigger("obj6549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6549) {
				console.warn("de-queueing event obj6549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6549_onTap_activeActionGroupIndex = 5;
	





















};
obj6551_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6551_onTap_activeActionGroupIndex = -1;
		$("#obj6551").trigger("obj6551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6551) {
				console.warn("de-queueing event obj6551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6551_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57875();
function switchText_57875() {
	window.obj6551_onTap_runningActionsCount = obj6551_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6551_onTap_runningActionsCount = window.obj6551_onTap_runningActionsCount - 1;
if (window.obj6551_onTap_runningActionsCount < 0) {
	window.obj6551_onTap_runningActionsCount = 0;
} else if (window.obj6551_onTap_runningActionsCount == 0) {
	obj6551_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6551_onTap_runningActionsCount = window.obj6551_onTap_runningActionsCount - 1;
if (window.obj6551_onTap_runningActionsCount < 0) {
	window.obj6551_onTap_runningActionsCount = 0;
} else if (window.obj6551_onTap_runningActionsCount == 0) {
	obj6551_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6551_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6551_onTap_activeActionGroupIndex = -1;
		$("#obj6551").trigger("obj6551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6551) {
				console.warn("de-queueing event obj6551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6551_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57876();
function runjs_57876() {
	window.obj6551_onTap_runningActionsCount = obj6551_onTap_runningActionsCount + 1;

	$("#obj6551").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6551_onTap_runningActionsCount = window.obj6551_onTap_runningActionsCount - 1;
if (window.obj6551_onTap_runningActionsCount < 0) {
	window.obj6551_onTap_runningActionsCount = 0;
} else if (window.obj6551_onTap_runningActionsCount == 0) {
	obj6551_onTap_actionGroup2();
}
	}, 1);
}







};
obj6551_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6551_onTap_activeActionGroupIndex = -1;
		$("#obj6551").trigger("obj6551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6551) {
				console.warn("de-queueing event obj6551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6551_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57877();
function playAudio_57877() {
	window.obj6551_onTap_runningActionsCount = obj6551_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6551_onTap_runningActionsCount = window.obj6551_onTap_runningActionsCount - 1;
if (window.obj6551_onTap_runningActionsCount < 0) {
	window.obj6551_onTap_runningActionsCount = 0;
} else if (window.obj6551_onTap_runningActionsCount == 0) {
	obj6551_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6551_onTap_runningActionsCount = window.obj6551_onTap_runningActionsCount - 1;
if (window.obj6551_onTap_runningActionsCount < 0) {
	window.obj6551_onTap_runningActionsCount = 0;
} else if (window.obj6551_onTap_runningActionsCount == 0) {
	obj6551_onTap_actionGroup3();
}
	}
}









};
obj6551_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6551_onTap_activeActionGroupIndex = -1;
		$("#obj6551").trigger("obj6551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6551) {
				console.warn("de-queueing event obj6551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6551_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57878();
function runjs_57878() {
	window.obj6551_onTap_runningActionsCount = obj6551_onTap_runningActionsCount + 1;

	$("#obj6551").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6551_onTap_runningActionsCount = window.obj6551_onTap_runningActionsCount - 1;
if (window.obj6551_onTap_runningActionsCount < 0) {
	window.obj6551_onTap_runningActionsCount = 0;
} else if (window.obj6551_onTap_runningActionsCount == 0) {
	obj6551_onTap_actionGroup4();
}
	}, 1);
}







};
obj6551_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6551_onTap_activeActionGroupIndex = -1;
		$("#obj6551").trigger("obj6551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6551) {
				console.warn("de-queueing event obj6551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6551_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57879();
function switchText_57879() {
	window.obj6551_onTap_runningActionsCount = obj6551_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6551_onTap_runningActionsCount = window.obj6551_onTap_runningActionsCount - 1;
if (window.obj6551_onTap_runningActionsCount < 0) {
	window.obj6551_onTap_runningActionsCount = 0;
} else if (window.obj6551_onTap_runningActionsCount == 0) {
	obj6551_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6551_onTap_runningActionsCount = window.obj6551_onTap_runningActionsCount - 1;
if (window.obj6551_onTap_runningActionsCount < 0) {
	window.obj6551_onTap_runningActionsCount = 0;
} else if (window.obj6551_onTap_runningActionsCount == 0) {
	obj6551_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6551_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6551_onTap_activeActionGroupIndex = -1;
		$("#obj6551").trigger("obj6551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6551) {
				console.warn("de-queueing event obj6551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6551_onTap_activeActionGroupIndex = 5;
	





















};
obj6553_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6553_onTap_activeActionGroupIndex = -1;
		$("#obj6553").trigger("obj6553_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6553) {
				console.warn("de-queueing event obj6553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6553_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57905();
function switchText_57905() {
	window.obj6553_onTap_runningActionsCount = obj6553_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6553_onTap_runningActionsCount = window.obj6553_onTap_runningActionsCount - 1;
if (window.obj6553_onTap_runningActionsCount < 0) {
	window.obj6553_onTap_runningActionsCount = 0;
} else if (window.obj6553_onTap_runningActionsCount == 0) {
	obj6553_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6553_onTap_runningActionsCount = window.obj6553_onTap_runningActionsCount - 1;
if (window.obj6553_onTap_runningActionsCount < 0) {
	window.obj6553_onTap_runningActionsCount = 0;
} else if (window.obj6553_onTap_runningActionsCount == 0) {
	obj6553_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6553_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6553_onTap_activeActionGroupIndex = -1;
		$("#obj6553").trigger("obj6553_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6553) {
				console.warn("de-queueing event obj6553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6553_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57906();
function runjs_57906() {
	window.obj6553_onTap_runningActionsCount = obj6553_onTap_runningActionsCount + 1;

	$("#obj6553").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6553_onTap_runningActionsCount = window.obj6553_onTap_runningActionsCount - 1;
if (window.obj6553_onTap_runningActionsCount < 0) {
	window.obj6553_onTap_runningActionsCount = 0;
} else if (window.obj6553_onTap_runningActionsCount == 0) {
	obj6553_onTap_actionGroup2();
}
	}, 1);
}







};
obj6553_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6553_onTap_activeActionGroupIndex = -1;
		$("#obj6553").trigger("obj6553_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6553) {
				console.warn("de-queueing event obj6553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6553_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57907();
function playAudio_57907() {
	window.obj6553_onTap_runningActionsCount = obj6553_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6553_onTap_runningActionsCount = window.obj6553_onTap_runningActionsCount - 1;
if (window.obj6553_onTap_runningActionsCount < 0) {
	window.obj6553_onTap_runningActionsCount = 0;
} else if (window.obj6553_onTap_runningActionsCount == 0) {
	obj6553_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6553_onTap_runningActionsCount = window.obj6553_onTap_runningActionsCount - 1;
if (window.obj6553_onTap_runningActionsCount < 0) {
	window.obj6553_onTap_runningActionsCount = 0;
} else if (window.obj6553_onTap_runningActionsCount == 0) {
	obj6553_onTap_actionGroup3();
}
	}
}









};
obj6553_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6553_onTap_activeActionGroupIndex = -1;
		$("#obj6553").trigger("obj6553_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6553) {
				console.warn("de-queueing event obj6553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6553_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57908();
function runjs_57908() {
	window.obj6553_onTap_runningActionsCount = obj6553_onTap_runningActionsCount + 1;

	$("#obj6553").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6553_onTap_runningActionsCount = window.obj6553_onTap_runningActionsCount - 1;
if (window.obj6553_onTap_runningActionsCount < 0) {
	window.obj6553_onTap_runningActionsCount = 0;
} else if (window.obj6553_onTap_runningActionsCount == 0) {
	obj6553_onTap_actionGroup4();
}
	}, 1);
}







};
obj6553_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6553_onTap_activeActionGroupIndex = -1;
		$("#obj6553").trigger("obj6553_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6553) {
				console.warn("de-queueing event obj6553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6553_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57909();
function switchText_57909() {
	window.obj6553_onTap_runningActionsCount = obj6553_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6553_onTap_runningActionsCount = window.obj6553_onTap_runningActionsCount - 1;
if (window.obj6553_onTap_runningActionsCount < 0) {
	window.obj6553_onTap_runningActionsCount = 0;
} else if (window.obj6553_onTap_runningActionsCount == 0) {
	obj6553_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6553_onTap_runningActionsCount = window.obj6553_onTap_runningActionsCount - 1;
if (window.obj6553_onTap_runningActionsCount < 0) {
	window.obj6553_onTap_runningActionsCount = 0;
} else if (window.obj6553_onTap_runningActionsCount == 0) {
	obj6553_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6553_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6553_onTap_activeActionGroupIndex = -1;
		$("#obj6553").trigger("obj6553_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6553) {
				console.warn("de-queueing event obj6553." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6553").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6553_onTap_activeActionGroupIndex = 5;
	





















};
obj6557_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6557_onTap_activeActionGroupIndex = -1;
		$("#obj6557").trigger("obj6557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6557) {
				console.warn("de-queueing event obj6557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6557_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57605();
function switchText_57605() {
	window.obj6557_onTap_runningActionsCount = obj6557_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6557_onTap_runningActionsCount = window.obj6557_onTap_runningActionsCount - 1;
if (window.obj6557_onTap_runningActionsCount < 0) {
	window.obj6557_onTap_runningActionsCount = 0;
} else if (window.obj6557_onTap_runningActionsCount == 0) {
	obj6557_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6557_onTap_runningActionsCount = window.obj6557_onTap_runningActionsCount - 1;
if (window.obj6557_onTap_runningActionsCount < 0) {
	window.obj6557_onTap_runningActionsCount = 0;
} else if (window.obj6557_onTap_runningActionsCount == 0) {
	obj6557_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6557_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6557_onTap_activeActionGroupIndex = -1;
		$("#obj6557").trigger("obj6557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6557) {
				console.warn("de-queueing event obj6557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6557_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57606();
function runjs_57606() {
	window.obj6557_onTap_runningActionsCount = obj6557_onTap_runningActionsCount + 1;

	$("#obj6557").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6557_onTap_runningActionsCount = window.obj6557_onTap_runningActionsCount - 1;
if (window.obj6557_onTap_runningActionsCount < 0) {
	window.obj6557_onTap_runningActionsCount = 0;
} else if (window.obj6557_onTap_runningActionsCount == 0) {
	obj6557_onTap_actionGroup2();
}
	}, 1);
}







};
obj6557_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6557_onTap_activeActionGroupIndex = -1;
		$("#obj6557").trigger("obj6557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6557) {
				console.warn("de-queueing event obj6557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6557_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57607();
function playAudio_57607() {
	window.obj6557_onTap_runningActionsCount = obj6557_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6557_onTap_runningActionsCount = window.obj6557_onTap_runningActionsCount - 1;
if (window.obj6557_onTap_runningActionsCount < 0) {
	window.obj6557_onTap_runningActionsCount = 0;
} else if (window.obj6557_onTap_runningActionsCount == 0) {
	obj6557_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6557_onTap_runningActionsCount = window.obj6557_onTap_runningActionsCount - 1;
if (window.obj6557_onTap_runningActionsCount < 0) {
	window.obj6557_onTap_runningActionsCount = 0;
} else if (window.obj6557_onTap_runningActionsCount == 0) {
	obj6557_onTap_actionGroup3();
}
	}
}









};
obj6557_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6557_onTap_activeActionGroupIndex = -1;
		$("#obj6557").trigger("obj6557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6557) {
				console.warn("de-queueing event obj6557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6557_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57608();
function runjs_57608() {
	window.obj6557_onTap_runningActionsCount = obj6557_onTap_runningActionsCount + 1;

	$("#obj6557").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6557_onTap_runningActionsCount = window.obj6557_onTap_runningActionsCount - 1;
if (window.obj6557_onTap_runningActionsCount < 0) {
	window.obj6557_onTap_runningActionsCount = 0;
} else if (window.obj6557_onTap_runningActionsCount == 0) {
	obj6557_onTap_actionGroup4();
}
	}, 1);
}







};
obj6557_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6557_onTap_activeActionGroupIndex = -1;
		$("#obj6557").trigger("obj6557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6557) {
				console.warn("de-queueing event obj6557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6557_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57609();
function switchText_57609() {
	window.obj6557_onTap_runningActionsCount = obj6557_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6557_onTap_runningActionsCount = window.obj6557_onTap_runningActionsCount - 1;
if (window.obj6557_onTap_runningActionsCount < 0) {
	window.obj6557_onTap_runningActionsCount = 0;
} else if (window.obj6557_onTap_runningActionsCount == 0) {
	obj6557_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6557_onTap_runningActionsCount = window.obj6557_onTap_runningActionsCount - 1;
if (window.obj6557_onTap_runningActionsCount < 0) {
	window.obj6557_onTap_runningActionsCount = 0;
} else if (window.obj6557_onTap_runningActionsCount == 0) {
	obj6557_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6557_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6557_onTap_activeActionGroupIndex = -1;
		$("#obj6557").trigger("obj6557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6557) {
				console.warn("de-queueing event obj6557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6557_onTap_activeActionGroupIndex = 5;
	





















};
obj6561_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6561_onTap_activeActionGroupIndex = -1;
		$("#obj6561").trigger("obj6561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6561) {
				console.warn("de-queueing event obj6561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6561_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57760();
function switchText_57760() {
	window.obj6561_onTap_runningActionsCount = obj6561_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6561_onTap_runningActionsCount = window.obj6561_onTap_runningActionsCount - 1;
if (window.obj6561_onTap_runningActionsCount < 0) {
	window.obj6561_onTap_runningActionsCount = 0;
} else if (window.obj6561_onTap_runningActionsCount == 0) {
	obj6561_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6561_onTap_runningActionsCount = window.obj6561_onTap_runningActionsCount - 1;
if (window.obj6561_onTap_runningActionsCount < 0) {
	window.obj6561_onTap_runningActionsCount = 0;
} else if (window.obj6561_onTap_runningActionsCount == 0) {
	obj6561_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6561_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6561_onTap_activeActionGroupIndex = -1;
		$("#obj6561").trigger("obj6561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6561) {
				console.warn("de-queueing event obj6561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6561_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57761();
function runjs_57761() {
	window.obj6561_onTap_runningActionsCount = obj6561_onTap_runningActionsCount + 1;

	$("#obj6561").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6561_onTap_runningActionsCount = window.obj6561_onTap_runningActionsCount - 1;
if (window.obj6561_onTap_runningActionsCount < 0) {
	window.obj6561_onTap_runningActionsCount = 0;
} else if (window.obj6561_onTap_runningActionsCount == 0) {
	obj6561_onTap_actionGroup2();
}
	}, 1);
}







};
obj6561_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6561_onTap_activeActionGroupIndex = -1;
		$("#obj6561").trigger("obj6561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6561) {
				console.warn("de-queueing event obj6561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6561_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57762();
function playAudio_57762() {
	window.obj6561_onTap_runningActionsCount = obj6561_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6561_onTap_runningActionsCount = window.obj6561_onTap_runningActionsCount - 1;
if (window.obj6561_onTap_runningActionsCount < 0) {
	window.obj6561_onTap_runningActionsCount = 0;
} else if (window.obj6561_onTap_runningActionsCount == 0) {
	obj6561_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6561_onTap_runningActionsCount = window.obj6561_onTap_runningActionsCount - 1;
if (window.obj6561_onTap_runningActionsCount < 0) {
	window.obj6561_onTap_runningActionsCount = 0;
} else if (window.obj6561_onTap_runningActionsCount == 0) {
	obj6561_onTap_actionGroup3();
}
	}
}









};
obj6561_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6561_onTap_activeActionGroupIndex = -1;
		$("#obj6561").trigger("obj6561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6561) {
				console.warn("de-queueing event obj6561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6561_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57763();
function runjs_57763() {
	window.obj6561_onTap_runningActionsCount = obj6561_onTap_runningActionsCount + 1;

	$("#obj6561").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6561_onTap_runningActionsCount = window.obj6561_onTap_runningActionsCount - 1;
if (window.obj6561_onTap_runningActionsCount < 0) {
	window.obj6561_onTap_runningActionsCount = 0;
} else if (window.obj6561_onTap_runningActionsCount == 0) {
	obj6561_onTap_actionGroup4();
}
	}, 1);
}







};
obj6561_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6561_onTap_activeActionGroupIndex = -1;
		$("#obj6561").trigger("obj6561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6561) {
				console.warn("de-queueing event obj6561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6561_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57764();
function switchText_57764() {
	window.obj6561_onTap_runningActionsCount = obj6561_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6561_onTap_runningActionsCount = window.obj6561_onTap_runningActionsCount - 1;
if (window.obj6561_onTap_runningActionsCount < 0) {
	window.obj6561_onTap_runningActionsCount = 0;
} else if (window.obj6561_onTap_runningActionsCount == 0) {
	obj6561_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6561_onTap_runningActionsCount = window.obj6561_onTap_runningActionsCount - 1;
if (window.obj6561_onTap_runningActionsCount < 0) {
	window.obj6561_onTap_runningActionsCount = 0;
} else if (window.obj6561_onTap_runningActionsCount == 0) {
	obj6561_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6561_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6561_onTap_activeActionGroupIndex = -1;
		$("#obj6561").trigger("obj6561_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6561) {
				console.warn("de-queueing event obj6561." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6561").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6561_onTap_activeActionGroupIndex = 5;
	





















};
obj6563_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6563_onTap_activeActionGroupIndex = -1;
		$("#obj6563").trigger("obj6563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6563) {
				console.warn("de-queueing event obj6563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6563_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57805();
function switchText_57805() {
	window.obj6563_onTap_runningActionsCount = obj6563_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6563_onTap_runningActionsCount = window.obj6563_onTap_runningActionsCount - 1;
if (window.obj6563_onTap_runningActionsCount < 0) {
	window.obj6563_onTap_runningActionsCount = 0;
} else if (window.obj6563_onTap_runningActionsCount == 0) {
	obj6563_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6563_onTap_runningActionsCount = window.obj6563_onTap_runningActionsCount - 1;
if (window.obj6563_onTap_runningActionsCount < 0) {
	window.obj6563_onTap_runningActionsCount = 0;
} else if (window.obj6563_onTap_runningActionsCount == 0) {
	obj6563_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6563_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6563_onTap_activeActionGroupIndex = -1;
		$("#obj6563").trigger("obj6563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6563) {
				console.warn("de-queueing event obj6563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6563_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57806();
function runjs_57806() {
	window.obj6563_onTap_runningActionsCount = obj6563_onTap_runningActionsCount + 1;

	$("#obj6563").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6563_onTap_runningActionsCount = window.obj6563_onTap_runningActionsCount - 1;
if (window.obj6563_onTap_runningActionsCount < 0) {
	window.obj6563_onTap_runningActionsCount = 0;
} else if (window.obj6563_onTap_runningActionsCount == 0) {
	obj6563_onTap_actionGroup2();
}
	}, 1);
}







};
obj6563_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6563_onTap_activeActionGroupIndex = -1;
		$("#obj6563").trigger("obj6563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6563) {
				console.warn("de-queueing event obj6563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6563_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57807();
function playAudio_57807() {
	window.obj6563_onTap_runningActionsCount = obj6563_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6563_onTap_runningActionsCount = window.obj6563_onTap_runningActionsCount - 1;
if (window.obj6563_onTap_runningActionsCount < 0) {
	window.obj6563_onTap_runningActionsCount = 0;
} else if (window.obj6563_onTap_runningActionsCount == 0) {
	obj6563_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6563_onTap_runningActionsCount = window.obj6563_onTap_runningActionsCount - 1;
if (window.obj6563_onTap_runningActionsCount < 0) {
	window.obj6563_onTap_runningActionsCount = 0;
} else if (window.obj6563_onTap_runningActionsCount == 0) {
	obj6563_onTap_actionGroup3();
}
	}
}









};
obj6563_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6563_onTap_activeActionGroupIndex = -1;
		$("#obj6563").trigger("obj6563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6563) {
				console.warn("de-queueing event obj6563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6563_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57808();
function runjs_57808() {
	window.obj6563_onTap_runningActionsCount = obj6563_onTap_runningActionsCount + 1;

	$("#obj6563").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6563_onTap_runningActionsCount = window.obj6563_onTap_runningActionsCount - 1;
if (window.obj6563_onTap_runningActionsCount < 0) {
	window.obj6563_onTap_runningActionsCount = 0;
} else if (window.obj6563_onTap_runningActionsCount == 0) {
	obj6563_onTap_actionGroup4();
}
	}, 1);
}







};
obj6563_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6563_onTap_activeActionGroupIndex = -1;
		$("#obj6563").trigger("obj6563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6563) {
				console.warn("de-queueing event obj6563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6563_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57809();
function switchText_57809() {
	window.obj6563_onTap_runningActionsCount = obj6563_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6563_onTap_runningActionsCount = window.obj6563_onTap_runningActionsCount - 1;
if (window.obj6563_onTap_runningActionsCount < 0) {
	window.obj6563_onTap_runningActionsCount = 0;
} else if (window.obj6563_onTap_runningActionsCount == 0) {
	obj6563_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6563_onTap_runningActionsCount = window.obj6563_onTap_runningActionsCount - 1;
if (window.obj6563_onTap_runningActionsCount < 0) {
	window.obj6563_onTap_runningActionsCount = 0;
} else if (window.obj6563_onTap_runningActionsCount == 0) {
	obj6563_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6563_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6563_onTap_activeActionGroupIndex = -1;
		$("#obj6563").trigger("obj6563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6563) {
				console.warn("de-queueing event obj6563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6563_onTap_activeActionGroupIndex = 5;
	





















};
obj6565_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6565_onTap_activeActionGroupIndex = -1;
		$("#obj6565").trigger("obj6565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6565) {
				console.warn("de-queueing event obj6565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6565_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57845();
function switchText_57845() {
	window.obj6565_onTap_runningActionsCount = obj6565_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6565_onTap_runningActionsCount = window.obj6565_onTap_runningActionsCount - 1;
if (window.obj6565_onTap_runningActionsCount < 0) {
	window.obj6565_onTap_runningActionsCount = 0;
} else if (window.obj6565_onTap_runningActionsCount == 0) {
	obj6565_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6565_onTap_runningActionsCount = window.obj6565_onTap_runningActionsCount - 1;
if (window.obj6565_onTap_runningActionsCount < 0) {
	window.obj6565_onTap_runningActionsCount = 0;
} else if (window.obj6565_onTap_runningActionsCount == 0) {
	obj6565_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6565_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6565_onTap_activeActionGroupIndex = -1;
		$("#obj6565").trigger("obj6565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6565) {
				console.warn("de-queueing event obj6565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6565_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57846();
function runjs_57846() {
	window.obj6565_onTap_runningActionsCount = obj6565_onTap_runningActionsCount + 1;

	$("#obj6565").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6565_onTap_runningActionsCount = window.obj6565_onTap_runningActionsCount - 1;
if (window.obj6565_onTap_runningActionsCount < 0) {
	window.obj6565_onTap_runningActionsCount = 0;
} else if (window.obj6565_onTap_runningActionsCount == 0) {
	obj6565_onTap_actionGroup2();
}
	}, 1);
}







};
obj6565_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6565_onTap_activeActionGroupIndex = -1;
		$("#obj6565").trigger("obj6565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6565) {
				console.warn("de-queueing event obj6565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6565_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57847();
function playAudio_57847() {
	window.obj6565_onTap_runningActionsCount = obj6565_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6565_onTap_runningActionsCount = window.obj6565_onTap_runningActionsCount - 1;
if (window.obj6565_onTap_runningActionsCount < 0) {
	window.obj6565_onTap_runningActionsCount = 0;
} else if (window.obj6565_onTap_runningActionsCount == 0) {
	obj6565_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6565_onTap_runningActionsCount = window.obj6565_onTap_runningActionsCount - 1;
if (window.obj6565_onTap_runningActionsCount < 0) {
	window.obj6565_onTap_runningActionsCount = 0;
} else if (window.obj6565_onTap_runningActionsCount == 0) {
	obj6565_onTap_actionGroup3();
}
	}
}









};
obj6565_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6565_onTap_activeActionGroupIndex = -1;
		$("#obj6565").trigger("obj6565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6565) {
				console.warn("de-queueing event obj6565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6565_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57848();
function runjs_57848() {
	window.obj6565_onTap_runningActionsCount = obj6565_onTap_runningActionsCount + 1;

	$("#obj6565").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6565_onTap_runningActionsCount = window.obj6565_onTap_runningActionsCount - 1;
if (window.obj6565_onTap_runningActionsCount < 0) {
	window.obj6565_onTap_runningActionsCount = 0;
} else if (window.obj6565_onTap_runningActionsCount == 0) {
	obj6565_onTap_actionGroup4();
}
	}, 1);
}







};
obj6565_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6565_onTap_activeActionGroupIndex = -1;
		$("#obj6565").trigger("obj6565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6565) {
				console.warn("de-queueing event obj6565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6565_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57849();
function switchText_57849() {
	window.obj6565_onTap_runningActionsCount = obj6565_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6565_onTap_runningActionsCount = window.obj6565_onTap_runningActionsCount - 1;
if (window.obj6565_onTap_runningActionsCount < 0) {
	window.obj6565_onTap_runningActionsCount = 0;
} else if (window.obj6565_onTap_runningActionsCount == 0) {
	obj6565_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6565_onTap_runningActionsCount = window.obj6565_onTap_runningActionsCount - 1;
if (window.obj6565_onTap_runningActionsCount < 0) {
	window.obj6565_onTap_runningActionsCount = 0;
} else if (window.obj6565_onTap_runningActionsCount == 0) {
	obj6565_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6565_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6565_onTap_activeActionGroupIndex = -1;
		$("#obj6565").trigger("obj6565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6565) {
				console.warn("de-queueing event obj6565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6565_onTap_activeActionGroupIndex = 5;
	





















};
obj6567_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6567_onTap_activeActionGroupIndex = -1;
		$("#obj6567").trigger("obj6567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6567) {
				console.warn("de-queueing event obj6567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6567_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57880();
function switchText_57880() {
	window.obj6567_onTap_runningActionsCount = obj6567_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6567_onTap_runningActionsCount = window.obj6567_onTap_runningActionsCount - 1;
if (window.obj6567_onTap_runningActionsCount < 0) {
	window.obj6567_onTap_runningActionsCount = 0;
} else if (window.obj6567_onTap_runningActionsCount == 0) {
	obj6567_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6567_onTap_runningActionsCount = window.obj6567_onTap_runningActionsCount - 1;
if (window.obj6567_onTap_runningActionsCount < 0) {
	window.obj6567_onTap_runningActionsCount = 0;
} else if (window.obj6567_onTap_runningActionsCount == 0) {
	obj6567_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6567_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6567_onTap_activeActionGroupIndex = -1;
		$("#obj6567").trigger("obj6567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6567) {
				console.warn("de-queueing event obj6567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6567_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57881();
function runjs_57881() {
	window.obj6567_onTap_runningActionsCount = obj6567_onTap_runningActionsCount + 1;

	$("#obj6567").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6567_onTap_runningActionsCount = window.obj6567_onTap_runningActionsCount - 1;
if (window.obj6567_onTap_runningActionsCount < 0) {
	window.obj6567_onTap_runningActionsCount = 0;
} else if (window.obj6567_onTap_runningActionsCount == 0) {
	obj6567_onTap_actionGroup2();
}
	}, 1);
}







};
obj6567_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6567_onTap_activeActionGroupIndex = -1;
		$("#obj6567").trigger("obj6567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6567) {
				console.warn("de-queueing event obj6567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6567_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57882();
function playAudio_57882() {
	window.obj6567_onTap_runningActionsCount = obj6567_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6567_onTap_runningActionsCount = window.obj6567_onTap_runningActionsCount - 1;
if (window.obj6567_onTap_runningActionsCount < 0) {
	window.obj6567_onTap_runningActionsCount = 0;
} else if (window.obj6567_onTap_runningActionsCount == 0) {
	obj6567_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6567_onTap_runningActionsCount = window.obj6567_onTap_runningActionsCount - 1;
if (window.obj6567_onTap_runningActionsCount < 0) {
	window.obj6567_onTap_runningActionsCount = 0;
} else if (window.obj6567_onTap_runningActionsCount == 0) {
	obj6567_onTap_actionGroup3();
}
	}
}









};
obj6567_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6567_onTap_activeActionGroupIndex = -1;
		$("#obj6567").trigger("obj6567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6567) {
				console.warn("de-queueing event obj6567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6567_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57883();
function runjs_57883() {
	window.obj6567_onTap_runningActionsCount = obj6567_onTap_runningActionsCount + 1;

	$("#obj6567").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6567_onTap_runningActionsCount = window.obj6567_onTap_runningActionsCount - 1;
if (window.obj6567_onTap_runningActionsCount < 0) {
	window.obj6567_onTap_runningActionsCount = 0;
} else if (window.obj6567_onTap_runningActionsCount == 0) {
	obj6567_onTap_actionGroup4();
}
	}, 1);
}







};
obj6567_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6567_onTap_activeActionGroupIndex = -1;
		$("#obj6567").trigger("obj6567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6567) {
				console.warn("de-queueing event obj6567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6567_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57884();
function switchText_57884() {
	window.obj6567_onTap_runningActionsCount = obj6567_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6567_onTap_runningActionsCount = window.obj6567_onTap_runningActionsCount - 1;
if (window.obj6567_onTap_runningActionsCount < 0) {
	window.obj6567_onTap_runningActionsCount = 0;
} else if (window.obj6567_onTap_runningActionsCount == 0) {
	obj6567_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6567_onTap_runningActionsCount = window.obj6567_onTap_runningActionsCount - 1;
if (window.obj6567_onTap_runningActionsCount < 0) {
	window.obj6567_onTap_runningActionsCount = 0;
} else if (window.obj6567_onTap_runningActionsCount == 0) {
	obj6567_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6567_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6567_onTap_activeActionGroupIndex = -1;
		$("#obj6567").trigger("obj6567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6567) {
				console.warn("de-queueing event obj6567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6567_onTap_activeActionGroupIndex = 5;
	





















};
obj6569_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6569_onTap_activeActionGroupIndex = -1;
		$("#obj6569").trigger("obj6569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6569) {
				console.warn("de-queueing event obj6569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6569_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57910();
function switchText_57910() {
	window.obj6569_onTap_runningActionsCount = obj6569_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6569_onTap_runningActionsCount = window.obj6569_onTap_runningActionsCount - 1;
if (window.obj6569_onTap_runningActionsCount < 0) {
	window.obj6569_onTap_runningActionsCount = 0;
} else if (window.obj6569_onTap_runningActionsCount == 0) {
	obj6569_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6569_onTap_runningActionsCount = window.obj6569_onTap_runningActionsCount - 1;
if (window.obj6569_onTap_runningActionsCount < 0) {
	window.obj6569_onTap_runningActionsCount = 0;
} else if (window.obj6569_onTap_runningActionsCount == 0) {
	obj6569_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6569_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6569_onTap_activeActionGroupIndex = -1;
		$("#obj6569").trigger("obj6569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6569) {
				console.warn("de-queueing event obj6569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6569_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57911();
function runjs_57911() {
	window.obj6569_onTap_runningActionsCount = obj6569_onTap_runningActionsCount + 1;

	$("#obj6569").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6569_onTap_runningActionsCount = window.obj6569_onTap_runningActionsCount - 1;
if (window.obj6569_onTap_runningActionsCount < 0) {
	window.obj6569_onTap_runningActionsCount = 0;
} else if (window.obj6569_onTap_runningActionsCount == 0) {
	obj6569_onTap_actionGroup2();
}
	}, 1);
}







};
obj6569_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6569_onTap_activeActionGroupIndex = -1;
		$("#obj6569").trigger("obj6569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6569) {
				console.warn("de-queueing event obj6569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6569_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57912();
function playAudio_57912() {
	window.obj6569_onTap_runningActionsCount = obj6569_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6569_onTap_runningActionsCount = window.obj6569_onTap_runningActionsCount - 1;
if (window.obj6569_onTap_runningActionsCount < 0) {
	window.obj6569_onTap_runningActionsCount = 0;
} else if (window.obj6569_onTap_runningActionsCount == 0) {
	obj6569_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6569_onTap_runningActionsCount = window.obj6569_onTap_runningActionsCount - 1;
if (window.obj6569_onTap_runningActionsCount < 0) {
	window.obj6569_onTap_runningActionsCount = 0;
} else if (window.obj6569_onTap_runningActionsCount == 0) {
	obj6569_onTap_actionGroup3();
}
	}
}









};
obj6569_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6569_onTap_activeActionGroupIndex = -1;
		$("#obj6569").trigger("obj6569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6569) {
				console.warn("de-queueing event obj6569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6569_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57913();
function runjs_57913() {
	window.obj6569_onTap_runningActionsCount = obj6569_onTap_runningActionsCount + 1;

	$("#obj6569").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6569_onTap_runningActionsCount = window.obj6569_onTap_runningActionsCount - 1;
if (window.obj6569_onTap_runningActionsCount < 0) {
	window.obj6569_onTap_runningActionsCount = 0;
} else if (window.obj6569_onTap_runningActionsCount == 0) {
	obj6569_onTap_actionGroup4();
}
	}, 1);
}







};
obj6569_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6569_onTap_activeActionGroupIndex = -1;
		$("#obj6569").trigger("obj6569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6569) {
				console.warn("de-queueing event obj6569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6569_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57914();
function switchText_57914() {
	window.obj6569_onTap_runningActionsCount = obj6569_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6569_onTap_runningActionsCount = window.obj6569_onTap_runningActionsCount - 1;
if (window.obj6569_onTap_runningActionsCount < 0) {
	window.obj6569_onTap_runningActionsCount = 0;
} else if (window.obj6569_onTap_runningActionsCount == 0) {
	obj6569_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6569_onTap_runningActionsCount = window.obj6569_onTap_runningActionsCount - 1;
if (window.obj6569_onTap_runningActionsCount < 0) {
	window.obj6569_onTap_runningActionsCount = 0;
} else if (window.obj6569_onTap_runningActionsCount == 0) {
	obj6569_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6569_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6569_onTap_activeActionGroupIndex = -1;
		$("#obj6569").trigger("obj6569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6569) {
				console.warn("de-queueing event obj6569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6569_onTap_activeActionGroupIndex = 5;
	





















};
obj6573_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6573_onTap_activeActionGroupIndex = -1;
		$("#obj6573").trigger("obj6573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6573) {
				console.warn("de-queueing event obj6573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6573_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57610();
function switchText_57610() {
	window.obj6573_onTap_runningActionsCount = obj6573_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6573_onTap_runningActionsCount = window.obj6573_onTap_runningActionsCount - 1;
if (window.obj6573_onTap_runningActionsCount < 0) {
	window.obj6573_onTap_runningActionsCount = 0;
} else if (window.obj6573_onTap_runningActionsCount == 0) {
	obj6573_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6573_onTap_runningActionsCount = window.obj6573_onTap_runningActionsCount - 1;
if (window.obj6573_onTap_runningActionsCount < 0) {
	window.obj6573_onTap_runningActionsCount = 0;
} else if (window.obj6573_onTap_runningActionsCount == 0) {
	obj6573_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6573_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6573_onTap_activeActionGroupIndex = -1;
		$("#obj6573").trigger("obj6573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6573) {
				console.warn("de-queueing event obj6573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6573_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57611();
function runjs_57611() {
	window.obj6573_onTap_runningActionsCount = obj6573_onTap_runningActionsCount + 1;

	$("#obj6573").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6573_onTap_runningActionsCount = window.obj6573_onTap_runningActionsCount - 1;
if (window.obj6573_onTap_runningActionsCount < 0) {
	window.obj6573_onTap_runningActionsCount = 0;
} else if (window.obj6573_onTap_runningActionsCount == 0) {
	obj6573_onTap_actionGroup2();
}
	}, 1);
}







};
obj6573_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6573_onTap_activeActionGroupIndex = -1;
		$("#obj6573").trigger("obj6573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6573) {
				console.warn("de-queueing event obj6573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6573_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57612();
function playAudio_57612() {
	window.obj6573_onTap_runningActionsCount = obj6573_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6573_onTap_runningActionsCount = window.obj6573_onTap_runningActionsCount - 1;
if (window.obj6573_onTap_runningActionsCount < 0) {
	window.obj6573_onTap_runningActionsCount = 0;
} else if (window.obj6573_onTap_runningActionsCount == 0) {
	obj6573_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6573_onTap_runningActionsCount = window.obj6573_onTap_runningActionsCount - 1;
if (window.obj6573_onTap_runningActionsCount < 0) {
	window.obj6573_onTap_runningActionsCount = 0;
} else if (window.obj6573_onTap_runningActionsCount == 0) {
	obj6573_onTap_actionGroup3();
}
	}
}









};
obj6573_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6573_onTap_activeActionGroupIndex = -1;
		$("#obj6573").trigger("obj6573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6573) {
				console.warn("de-queueing event obj6573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6573_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57613();
function runjs_57613() {
	window.obj6573_onTap_runningActionsCount = obj6573_onTap_runningActionsCount + 1;

	$("#obj6573").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6573_onTap_runningActionsCount = window.obj6573_onTap_runningActionsCount - 1;
if (window.obj6573_onTap_runningActionsCount < 0) {
	window.obj6573_onTap_runningActionsCount = 0;
} else if (window.obj6573_onTap_runningActionsCount == 0) {
	obj6573_onTap_actionGroup4();
}
	}, 1);
}







};
obj6573_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6573_onTap_activeActionGroupIndex = -1;
		$("#obj6573").trigger("obj6573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6573) {
				console.warn("de-queueing event obj6573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6573_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57614();
function switchText_57614() {
	window.obj6573_onTap_runningActionsCount = obj6573_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6573_onTap_runningActionsCount = window.obj6573_onTap_runningActionsCount - 1;
if (window.obj6573_onTap_runningActionsCount < 0) {
	window.obj6573_onTap_runningActionsCount = 0;
} else if (window.obj6573_onTap_runningActionsCount == 0) {
	obj6573_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6573_onTap_runningActionsCount = window.obj6573_onTap_runningActionsCount - 1;
if (window.obj6573_onTap_runningActionsCount < 0) {
	window.obj6573_onTap_runningActionsCount = 0;
} else if (window.obj6573_onTap_runningActionsCount == 0) {
	obj6573_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6573_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6573_onTap_activeActionGroupIndex = -1;
		$("#obj6573").trigger("obj6573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6573) {
				console.warn("de-queueing event obj6573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6573_onTap_activeActionGroupIndex = 5;
	





















};
obj6577_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6577_onTap_activeActionGroupIndex = -1;
		$("#obj6577").trigger("obj6577_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6577) {
				console.warn("de-queueing event obj6577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6577_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57765();
function switchText_57765() {
	window.obj6577_onTap_runningActionsCount = obj6577_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6577_onTap_runningActionsCount = window.obj6577_onTap_runningActionsCount - 1;
if (window.obj6577_onTap_runningActionsCount < 0) {
	window.obj6577_onTap_runningActionsCount = 0;
} else if (window.obj6577_onTap_runningActionsCount == 0) {
	obj6577_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6577_onTap_runningActionsCount = window.obj6577_onTap_runningActionsCount - 1;
if (window.obj6577_onTap_runningActionsCount < 0) {
	window.obj6577_onTap_runningActionsCount = 0;
} else if (window.obj6577_onTap_runningActionsCount == 0) {
	obj6577_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6577_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6577_onTap_activeActionGroupIndex = -1;
		$("#obj6577").trigger("obj6577_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6577) {
				console.warn("de-queueing event obj6577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6577_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57766();
function runjs_57766() {
	window.obj6577_onTap_runningActionsCount = obj6577_onTap_runningActionsCount + 1;

	$("#obj6577").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6577_onTap_runningActionsCount = window.obj6577_onTap_runningActionsCount - 1;
if (window.obj6577_onTap_runningActionsCount < 0) {
	window.obj6577_onTap_runningActionsCount = 0;
} else if (window.obj6577_onTap_runningActionsCount == 0) {
	obj6577_onTap_actionGroup2();
}
	}, 1);
}







};
obj6577_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6577_onTap_activeActionGroupIndex = -1;
		$("#obj6577").trigger("obj6577_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6577) {
				console.warn("de-queueing event obj6577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6577_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57767();
function playAudio_57767() {
	window.obj6577_onTap_runningActionsCount = obj6577_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6577_onTap_runningActionsCount = window.obj6577_onTap_runningActionsCount - 1;
if (window.obj6577_onTap_runningActionsCount < 0) {
	window.obj6577_onTap_runningActionsCount = 0;
} else if (window.obj6577_onTap_runningActionsCount == 0) {
	obj6577_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6577_onTap_runningActionsCount = window.obj6577_onTap_runningActionsCount - 1;
if (window.obj6577_onTap_runningActionsCount < 0) {
	window.obj6577_onTap_runningActionsCount = 0;
} else if (window.obj6577_onTap_runningActionsCount == 0) {
	obj6577_onTap_actionGroup3();
}
	}
}









};
obj6577_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6577_onTap_activeActionGroupIndex = -1;
		$("#obj6577").trigger("obj6577_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6577) {
				console.warn("de-queueing event obj6577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6577_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57768();
function runjs_57768() {
	window.obj6577_onTap_runningActionsCount = obj6577_onTap_runningActionsCount + 1;

	$("#obj6577").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6577_onTap_runningActionsCount = window.obj6577_onTap_runningActionsCount - 1;
if (window.obj6577_onTap_runningActionsCount < 0) {
	window.obj6577_onTap_runningActionsCount = 0;
} else if (window.obj6577_onTap_runningActionsCount == 0) {
	obj6577_onTap_actionGroup4();
}
	}, 1);
}







};
obj6577_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6577_onTap_activeActionGroupIndex = -1;
		$("#obj6577").trigger("obj6577_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6577) {
				console.warn("de-queueing event obj6577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6577_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57769();
function switchText_57769() {
	window.obj6577_onTap_runningActionsCount = obj6577_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6577_onTap_runningActionsCount = window.obj6577_onTap_runningActionsCount - 1;
if (window.obj6577_onTap_runningActionsCount < 0) {
	window.obj6577_onTap_runningActionsCount = 0;
} else if (window.obj6577_onTap_runningActionsCount == 0) {
	obj6577_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6577_onTap_runningActionsCount = window.obj6577_onTap_runningActionsCount - 1;
if (window.obj6577_onTap_runningActionsCount < 0) {
	window.obj6577_onTap_runningActionsCount = 0;
} else if (window.obj6577_onTap_runningActionsCount == 0) {
	obj6577_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6577_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6577_onTap_activeActionGroupIndex = -1;
		$("#obj6577").trigger("obj6577_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6577) {
				console.warn("de-queueing event obj6577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6577_onTap_activeActionGroupIndex = 5;
	





















};
obj6579_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6579_onTap_activeActionGroupIndex = -1;
		$("#obj6579").trigger("obj6579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6579) {
				console.warn("de-queueing event obj6579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6579_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57810();
function switchText_57810() {
	window.obj6579_onTap_runningActionsCount = obj6579_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6579_onTap_runningActionsCount = window.obj6579_onTap_runningActionsCount - 1;
if (window.obj6579_onTap_runningActionsCount < 0) {
	window.obj6579_onTap_runningActionsCount = 0;
} else if (window.obj6579_onTap_runningActionsCount == 0) {
	obj6579_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6579_onTap_runningActionsCount = window.obj6579_onTap_runningActionsCount - 1;
if (window.obj6579_onTap_runningActionsCount < 0) {
	window.obj6579_onTap_runningActionsCount = 0;
} else if (window.obj6579_onTap_runningActionsCount == 0) {
	obj6579_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6579_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6579_onTap_activeActionGroupIndex = -1;
		$("#obj6579").trigger("obj6579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6579) {
				console.warn("de-queueing event obj6579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6579_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57811();
function runjs_57811() {
	window.obj6579_onTap_runningActionsCount = obj6579_onTap_runningActionsCount + 1;

	$("#obj6579").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6579_onTap_runningActionsCount = window.obj6579_onTap_runningActionsCount - 1;
if (window.obj6579_onTap_runningActionsCount < 0) {
	window.obj6579_onTap_runningActionsCount = 0;
} else if (window.obj6579_onTap_runningActionsCount == 0) {
	obj6579_onTap_actionGroup2();
}
	}, 1);
}







};
obj6579_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6579_onTap_activeActionGroupIndex = -1;
		$("#obj6579").trigger("obj6579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6579) {
				console.warn("de-queueing event obj6579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6579_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57812();
function playAudio_57812() {
	window.obj6579_onTap_runningActionsCount = obj6579_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6579_onTap_runningActionsCount = window.obj6579_onTap_runningActionsCount - 1;
if (window.obj6579_onTap_runningActionsCount < 0) {
	window.obj6579_onTap_runningActionsCount = 0;
} else if (window.obj6579_onTap_runningActionsCount == 0) {
	obj6579_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6579_onTap_runningActionsCount = window.obj6579_onTap_runningActionsCount - 1;
if (window.obj6579_onTap_runningActionsCount < 0) {
	window.obj6579_onTap_runningActionsCount = 0;
} else if (window.obj6579_onTap_runningActionsCount == 0) {
	obj6579_onTap_actionGroup3();
}
	}
}









};
obj6579_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6579_onTap_activeActionGroupIndex = -1;
		$("#obj6579").trigger("obj6579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6579) {
				console.warn("de-queueing event obj6579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6579_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57813();
function runjs_57813() {
	window.obj6579_onTap_runningActionsCount = obj6579_onTap_runningActionsCount + 1;

	$("#obj6579").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6579_onTap_runningActionsCount = window.obj6579_onTap_runningActionsCount - 1;
if (window.obj6579_onTap_runningActionsCount < 0) {
	window.obj6579_onTap_runningActionsCount = 0;
} else if (window.obj6579_onTap_runningActionsCount == 0) {
	obj6579_onTap_actionGroup4();
}
	}, 1);
}







};
obj6579_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6579_onTap_activeActionGroupIndex = -1;
		$("#obj6579").trigger("obj6579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6579) {
				console.warn("de-queueing event obj6579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6579_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57814();
function switchText_57814() {
	window.obj6579_onTap_runningActionsCount = obj6579_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6579_onTap_runningActionsCount = window.obj6579_onTap_runningActionsCount - 1;
if (window.obj6579_onTap_runningActionsCount < 0) {
	window.obj6579_onTap_runningActionsCount = 0;
} else if (window.obj6579_onTap_runningActionsCount == 0) {
	obj6579_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6579_onTap_runningActionsCount = window.obj6579_onTap_runningActionsCount - 1;
if (window.obj6579_onTap_runningActionsCount < 0) {
	window.obj6579_onTap_runningActionsCount = 0;
} else if (window.obj6579_onTap_runningActionsCount == 0) {
	obj6579_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6579_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6579_onTap_activeActionGroupIndex = -1;
		$("#obj6579").trigger("obj6579_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6579) {
				console.warn("de-queueing event obj6579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6579_onTap_activeActionGroupIndex = 5;
	





















};
obj6581_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6581_onTap_activeActionGroupIndex = -1;
		$("#obj6581").trigger("obj6581_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6581) {
				console.warn("de-queueing event obj6581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6581_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57850();
function switchText_57850() {
	window.obj6581_onTap_runningActionsCount = obj6581_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6581_onTap_runningActionsCount = window.obj6581_onTap_runningActionsCount - 1;
if (window.obj6581_onTap_runningActionsCount < 0) {
	window.obj6581_onTap_runningActionsCount = 0;
} else if (window.obj6581_onTap_runningActionsCount == 0) {
	obj6581_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6581_onTap_runningActionsCount = window.obj6581_onTap_runningActionsCount - 1;
if (window.obj6581_onTap_runningActionsCount < 0) {
	window.obj6581_onTap_runningActionsCount = 0;
} else if (window.obj6581_onTap_runningActionsCount == 0) {
	obj6581_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6581_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6581_onTap_activeActionGroupIndex = -1;
		$("#obj6581").trigger("obj6581_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6581) {
				console.warn("de-queueing event obj6581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6581_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57851();
function runjs_57851() {
	window.obj6581_onTap_runningActionsCount = obj6581_onTap_runningActionsCount + 1;

	$("#obj6581").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6581_onTap_runningActionsCount = window.obj6581_onTap_runningActionsCount - 1;
if (window.obj6581_onTap_runningActionsCount < 0) {
	window.obj6581_onTap_runningActionsCount = 0;
} else if (window.obj6581_onTap_runningActionsCount == 0) {
	obj6581_onTap_actionGroup2();
}
	}, 1);
}







};
obj6581_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6581_onTap_activeActionGroupIndex = -1;
		$("#obj6581").trigger("obj6581_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6581) {
				console.warn("de-queueing event obj6581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6581_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57852();
function playAudio_57852() {
	window.obj6581_onTap_runningActionsCount = obj6581_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6581_onTap_runningActionsCount = window.obj6581_onTap_runningActionsCount - 1;
if (window.obj6581_onTap_runningActionsCount < 0) {
	window.obj6581_onTap_runningActionsCount = 0;
} else if (window.obj6581_onTap_runningActionsCount == 0) {
	obj6581_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6581_onTap_runningActionsCount = window.obj6581_onTap_runningActionsCount - 1;
if (window.obj6581_onTap_runningActionsCount < 0) {
	window.obj6581_onTap_runningActionsCount = 0;
} else if (window.obj6581_onTap_runningActionsCount == 0) {
	obj6581_onTap_actionGroup3();
}
	}
}









};
obj6581_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6581_onTap_activeActionGroupIndex = -1;
		$("#obj6581").trigger("obj6581_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6581) {
				console.warn("de-queueing event obj6581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6581_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57853();
function runjs_57853() {
	window.obj6581_onTap_runningActionsCount = obj6581_onTap_runningActionsCount + 1;

	$("#obj6581").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6581_onTap_runningActionsCount = window.obj6581_onTap_runningActionsCount - 1;
if (window.obj6581_onTap_runningActionsCount < 0) {
	window.obj6581_onTap_runningActionsCount = 0;
} else if (window.obj6581_onTap_runningActionsCount == 0) {
	obj6581_onTap_actionGroup4();
}
	}, 1);
}







};
obj6581_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6581_onTap_activeActionGroupIndex = -1;
		$("#obj6581").trigger("obj6581_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6581) {
				console.warn("de-queueing event obj6581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6581_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57854();
function switchText_57854() {
	window.obj6581_onTap_runningActionsCount = obj6581_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6581_onTap_runningActionsCount = window.obj6581_onTap_runningActionsCount - 1;
if (window.obj6581_onTap_runningActionsCount < 0) {
	window.obj6581_onTap_runningActionsCount = 0;
} else if (window.obj6581_onTap_runningActionsCount == 0) {
	obj6581_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6581_onTap_runningActionsCount = window.obj6581_onTap_runningActionsCount - 1;
if (window.obj6581_onTap_runningActionsCount < 0) {
	window.obj6581_onTap_runningActionsCount = 0;
} else if (window.obj6581_onTap_runningActionsCount == 0) {
	obj6581_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6581_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6581_onTap_activeActionGroupIndex = -1;
		$("#obj6581").trigger("obj6581_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6581) {
				console.warn("de-queueing event obj6581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6581_onTap_activeActionGroupIndex = 5;
	





















};
obj6583_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6583_onTap_activeActionGroupIndex = -1;
		$("#obj6583").trigger("obj6583_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6583) {
				console.warn("de-queueing event obj6583." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6583").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6583_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57885();
function switchText_57885() {
	window.obj6583_onTap_runningActionsCount = obj6583_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6583_onTap_runningActionsCount = window.obj6583_onTap_runningActionsCount - 1;
if (window.obj6583_onTap_runningActionsCount < 0) {
	window.obj6583_onTap_runningActionsCount = 0;
} else if (window.obj6583_onTap_runningActionsCount == 0) {
	obj6583_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6583_onTap_runningActionsCount = window.obj6583_onTap_runningActionsCount - 1;
if (window.obj6583_onTap_runningActionsCount < 0) {
	window.obj6583_onTap_runningActionsCount = 0;
} else if (window.obj6583_onTap_runningActionsCount == 0) {
	obj6583_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6583_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6583_onTap_activeActionGroupIndex = -1;
		$("#obj6583").trigger("obj6583_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6583) {
				console.warn("de-queueing event obj6583." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6583").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6583_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57886();
function runjs_57886() {
	window.obj6583_onTap_runningActionsCount = obj6583_onTap_runningActionsCount + 1;

	$("#obj6583").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6583_onTap_runningActionsCount = window.obj6583_onTap_runningActionsCount - 1;
if (window.obj6583_onTap_runningActionsCount < 0) {
	window.obj6583_onTap_runningActionsCount = 0;
} else if (window.obj6583_onTap_runningActionsCount == 0) {
	obj6583_onTap_actionGroup2();
}
	}, 1);
}







};
obj6583_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6583_onTap_activeActionGroupIndex = -1;
		$("#obj6583").trigger("obj6583_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6583) {
				console.warn("de-queueing event obj6583." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6583").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6583_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57887();
function playAudio_57887() {
	window.obj6583_onTap_runningActionsCount = obj6583_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6583_onTap_runningActionsCount = window.obj6583_onTap_runningActionsCount - 1;
if (window.obj6583_onTap_runningActionsCount < 0) {
	window.obj6583_onTap_runningActionsCount = 0;
} else if (window.obj6583_onTap_runningActionsCount == 0) {
	obj6583_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6583_onTap_runningActionsCount = window.obj6583_onTap_runningActionsCount - 1;
if (window.obj6583_onTap_runningActionsCount < 0) {
	window.obj6583_onTap_runningActionsCount = 0;
} else if (window.obj6583_onTap_runningActionsCount == 0) {
	obj6583_onTap_actionGroup3();
}
	}
}









};
obj6583_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6583_onTap_activeActionGroupIndex = -1;
		$("#obj6583").trigger("obj6583_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6583) {
				console.warn("de-queueing event obj6583." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6583").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6583_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57888();
function runjs_57888() {
	window.obj6583_onTap_runningActionsCount = obj6583_onTap_runningActionsCount + 1;

	$("#obj6583").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6583_onTap_runningActionsCount = window.obj6583_onTap_runningActionsCount - 1;
if (window.obj6583_onTap_runningActionsCount < 0) {
	window.obj6583_onTap_runningActionsCount = 0;
} else if (window.obj6583_onTap_runningActionsCount == 0) {
	obj6583_onTap_actionGroup4();
}
	}, 1);
}







};
obj6583_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6583_onTap_activeActionGroupIndex = -1;
		$("#obj6583").trigger("obj6583_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6583) {
				console.warn("de-queueing event obj6583." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6583").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6583_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57889();
function switchText_57889() {
	window.obj6583_onTap_runningActionsCount = obj6583_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6583_onTap_runningActionsCount = window.obj6583_onTap_runningActionsCount - 1;
if (window.obj6583_onTap_runningActionsCount < 0) {
	window.obj6583_onTap_runningActionsCount = 0;
} else if (window.obj6583_onTap_runningActionsCount == 0) {
	obj6583_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6583_onTap_runningActionsCount = window.obj6583_onTap_runningActionsCount - 1;
if (window.obj6583_onTap_runningActionsCount < 0) {
	window.obj6583_onTap_runningActionsCount = 0;
} else if (window.obj6583_onTap_runningActionsCount == 0) {
	obj6583_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6583_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6583_onTap_activeActionGroupIndex = -1;
		$("#obj6583").trigger("obj6583_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6583) {
				console.warn("de-queueing event obj6583." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6583").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6583_onTap_activeActionGroupIndex = 5;
	





















};
obj6585_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6585_onTap_activeActionGroupIndex = -1;
		$("#obj6585").trigger("obj6585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6585) {
				console.warn("de-queueing event obj6585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6585_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57915();
function switchText_57915() {
	window.obj6585_onTap_runningActionsCount = obj6585_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6585_onTap_runningActionsCount = window.obj6585_onTap_runningActionsCount - 1;
if (window.obj6585_onTap_runningActionsCount < 0) {
	window.obj6585_onTap_runningActionsCount = 0;
} else if (window.obj6585_onTap_runningActionsCount == 0) {
	obj6585_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6585_onTap_runningActionsCount = window.obj6585_onTap_runningActionsCount - 1;
if (window.obj6585_onTap_runningActionsCount < 0) {
	window.obj6585_onTap_runningActionsCount = 0;
} else if (window.obj6585_onTap_runningActionsCount == 0) {
	obj6585_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6585_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6585_onTap_activeActionGroupIndex = -1;
		$("#obj6585").trigger("obj6585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6585) {
				console.warn("de-queueing event obj6585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6585_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57916();
function runjs_57916() {
	window.obj6585_onTap_runningActionsCount = obj6585_onTap_runningActionsCount + 1;

	$("#obj6585").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6585_onTap_runningActionsCount = window.obj6585_onTap_runningActionsCount - 1;
if (window.obj6585_onTap_runningActionsCount < 0) {
	window.obj6585_onTap_runningActionsCount = 0;
} else if (window.obj6585_onTap_runningActionsCount == 0) {
	obj6585_onTap_actionGroup2();
}
	}, 1);
}







};
obj6585_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6585_onTap_activeActionGroupIndex = -1;
		$("#obj6585").trigger("obj6585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6585) {
				console.warn("de-queueing event obj6585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6585_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57917();
function playAudio_57917() {
	window.obj6585_onTap_runningActionsCount = obj6585_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6585_onTap_runningActionsCount = window.obj6585_onTap_runningActionsCount - 1;
if (window.obj6585_onTap_runningActionsCount < 0) {
	window.obj6585_onTap_runningActionsCount = 0;
} else if (window.obj6585_onTap_runningActionsCount == 0) {
	obj6585_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6585_onTap_runningActionsCount = window.obj6585_onTap_runningActionsCount - 1;
if (window.obj6585_onTap_runningActionsCount < 0) {
	window.obj6585_onTap_runningActionsCount = 0;
} else if (window.obj6585_onTap_runningActionsCount == 0) {
	obj6585_onTap_actionGroup3();
}
	}
}









};
obj6585_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6585_onTap_activeActionGroupIndex = -1;
		$("#obj6585").trigger("obj6585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6585) {
				console.warn("de-queueing event obj6585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6585_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57918();
function runjs_57918() {
	window.obj6585_onTap_runningActionsCount = obj6585_onTap_runningActionsCount + 1;

	$("#obj6585").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6585_onTap_runningActionsCount = window.obj6585_onTap_runningActionsCount - 1;
if (window.obj6585_onTap_runningActionsCount < 0) {
	window.obj6585_onTap_runningActionsCount = 0;
} else if (window.obj6585_onTap_runningActionsCount == 0) {
	obj6585_onTap_actionGroup4();
}
	}, 1);
}







};
obj6585_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6585_onTap_activeActionGroupIndex = -1;
		$("#obj6585").trigger("obj6585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6585) {
				console.warn("de-queueing event obj6585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6585_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57919();
function switchText_57919() {
	window.obj6585_onTap_runningActionsCount = obj6585_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6585_onTap_runningActionsCount = window.obj6585_onTap_runningActionsCount - 1;
if (window.obj6585_onTap_runningActionsCount < 0) {
	window.obj6585_onTap_runningActionsCount = 0;
} else if (window.obj6585_onTap_runningActionsCount == 0) {
	obj6585_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6585_onTap_runningActionsCount = window.obj6585_onTap_runningActionsCount - 1;
if (window.obj6585_onTap_runningActionsCount < 0) {
	window.obj6585_onTap_runningActionsCount = 0;
} else if (window.obj6585_onTap_runningActionsCount == 0) {
	obj6585_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6585_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6585_onTap_activeActionGroupIndex = -1;
		$("#obj6585").trigger("obj6585_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6585) {
				console.warn("de-queueing event obj6585." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6585").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6585_onTap_activeActionGroupIndex = 5;
	





















};
obj6589_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6589_onTap_activeActionGroupIndex = -1;
		$("#obj6589").trigger("obj6589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6589) {
				console.warn("de-queueing event obj6589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6589_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57615();
function switchText_57615() {
	window.obj6589_onTap_runningActionsCount = obj6589_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6589_onTap_runningActionsCount = window.obj6589_onTap_runningActionsCount - 1;
if (window.obj6589_onTap_runningActionsCount < 0) {
	window.obj6589_onTap_runningActionsCount = 0;
} else if (window.obj6589_onTap_runningActionsCount == 0) {
	obj6589_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6589_onTap_runningActionsCount = window.obj6589_onTap_runningActionsCount - 1;
if (window.obj6589_onTap_runningActionsCount < 0) {
	window.obj6589_onTap_runningActionsCount = 0;
} else if (window.obj6589_onTap_runningActionsCount == 0) {
	obj6589_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6589_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6589_onTap_activeActionGroupIndex = -1;
		$("#obj6589").trigger("obj6589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6589) {
				console.warn("de-queueing event obj6589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6589_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57616();
function runjs_57616() {
	window.obj6589_onTap_runningActionsCount = obj6589_onTap_runningActionsCount + 1;

	$("#obj6589").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6589_onTap_runningActionsCount = window.obj6589_onTap_runningActionsCount - 1;
if (window.obj6589_onTap_runningActionsCount < 0) {
	window.obj6589_onTap_runningActionsCount = 0;
} else if (window.obj6589_onTap_runningActionsCount == 0) {
	obj6589_onTap_actionGroup2();
}
	}, 1);
}







};
obj6589_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6589_onTap_activeActionGroupIndex = -1;
		$("#obj6589").trigger("obj6589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6589) {
				console.warn("de-queueing event obj6589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6589_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57617();
function playAudio_57617() {
	window.obj6589_onTap_runningActionsCount = obj6589_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6589_onTap_runningActionsCount = window.obj6589_onTap_runningActionsCount - 1;
if (window.obj6589_onTap_runningActionsCount < 0) {
	window.obj6589_onTap_runningActionsCount = 0;
} else if (window.obj6589_onTap_runningActionsCount == 0) {
	obj6589_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6589_onTap_runningActionsCount = window.obj6589_onTap_runningActionsCount - 1;
if (window.obj6589_onTap_runningActionsCount < 0) {
	window.obj6589_onTap_runningActionsCount = 0;
} else if (window.obj6589_onTap_runningActionsCount == 0) {
	obj6589_onTap_actionGroup3();
}
	}
}









};
obj6589_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6589_onTap_activeActionGroupIndex = -1;
		$("#obj6589").trigger("obj6589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6589) {
				console.warn("de-queueing event obj6589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6589_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57618();
function runjs_57618() {
	window.obj6589_onTap_runningActionsCount = obj6589_onTap_runningActionsCount + 1;

	$("#obj6589").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6589_onTap_runningActionsCount = window.obj6589_onTap_runningActionsCount - 1;
if (window.obj6589_onTap_runningActionsCount < 0) {
	window.obj6589_onTap_runningActionsCount = 0;
} else if (window.obj6589_onTap_runningActionsCount == 0) {
	obj6589_onTap_actionGroup4();
}
	}, 1);
}







};
obj6589_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6589_onTap_activeActionGroupIndex = -1;
		$("#obj6589").trigger("obj6589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6589) {
				console.warn("de-queueing event obj6589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6589_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57619();
function switchText_57619() {
	window.obj6589_onTap_runningActionsCount = obj6589_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6589_onTap_runningActionsCount = window.obj6589_onTap_runningActionsCount - 1;
if (window.obj6589_onTap_runningActionsCount < 0) {
	window.obj6589_onTap_runningActionsCount = 0;
} else if (window.obj6589_onTap_runningActionsCount == 0) {
	obj6589_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6589_onTap_runningActionsCount = window.obj6589_onTap_runningActionsCount - 1;
if (window.obj6589_onTap_runningActionsCount < 0) {
	window.obj6589_onTap_runningActionsCount = 0;
} else if (window.obj6589_onTap_runningActionsCount == 0) {
	obj6589_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6589_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6589_onTap_activeActionGroupIndex = -1;
		$("#obj6589").trigger("obj6589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6589) {
				console.warn("de-queueing event obj6589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6589_onTap_activeActionGroupIndex = 5;
	





















};
obj6593_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6593_onTap_activeActionGroupIndex = -1;
		$("#obj6593").trigger("obj6593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6593) {
				console.warn("de-queueing event obj6593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6593_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57770();
function switchText_57770() {
	window.obj6593_onTap_runningActionsCount = obj6593_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6593_onTap_runningActionsCount = window.obj6593_onTap_runningActionsCount - 1;
if (window.obj6593_onTap_runningActionsCount < 0) {
	window.obj6593_onTap_runningActionsCount = 0;
} else if (window.obj6593_onTap_runningActionsCount == 0) {
	obj6593_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6593_onTap_runningActionsCount = window.obj6593_onTap_runningActionsCount - 1;
if (window.obj6593_onTap_runningActionsCount < 0) {
	window.obj6593_onTap_runningActionsCount = 0;
} else if (window.obj6593_onTap_runningActionsCount == 0) {
	obj6593_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6593_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6593_onTap_activeActionGroupIndex = -1;
		$("#obj6593").trigger("obj6593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6593) {
				console.warn("de-queueing event obj6593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6593_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57771();
function runjs_57771() {
	window.obj6593_onTap_runningActionsCount = obj6593_onTap_runningActionsCount + 1;

	$("#obj6593").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6593_onTap_runningActionsCount = window.obj6593_onTap_runningActionsCount - 1;
if (window.obj6593_onTap_runningActionsCount < 0) {
	window.obj6593_onTap_runningActionsCount = 0;
} else if (window.obj6593_onTap_runningActionsCount == 0) {
	obj6593_onTap_actionGroup2();
}
	}, 1);
}







};
obj6593_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6593_onTap_activeActionGroupIndex = -1;
		$("#obj6593").trigger("obj6593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6593) {
				console.warn("de-queueing event obj6593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6593_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57772();
function playAudio_57772() {
	window.obj6593_onTap_runningActionsCount = obj6593_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6593_onTap_runningActionsCount = window.obj6593_onTap_runningActionsCount - 1;
if (window.obj6593_onTap_runningActionsCount < 0) {
	window.obj6593_onTap_runningActionsCount = 0;
} else if (window.obj6593_onTap_runningActionsCount == 0) {
	obj6593_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6593_onTap_runningActionsCount = window.obj6593_onTap_runningActionsCount - 1;
if (window.obj6593_onTap_runningActionsCount < 0) {
	window.obj6593_onTap_runningActionsCount = 0;
} else if (window.obj6593_onTap_runningActionsCount == 0) {
	obj6593_onTap_actionGroup3();
}
	}
}









};
obj6593_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6593_onTap_activeActionGroupIndex = -1;
		$("#obj6593").trigger("obj6593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6593) {
				console.warn("de-queueing event obj6593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6593_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57773();
function runjs_57773() {
	window.obj6593_onTap_runningActionsCount = obj6593_onTap_runningActionsCount + 1;

	$("#obj6593").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6593_onTap_runningActionsCount = window.obj6593_onTap_runningActionsCount - 1;
if (window.obj6593_onTap_runningActionsCount < 0) {
	window.obj6593_onTap_runningActionsCount = 0;
} else if (window.obj6593_onTap_runningActionsCount == 0) {
	obj6593_onTap_actionGroup4();
}
	}, 1);
}







};
obj6593_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6593_onTap_activeActionGroupIndex = -1;
		$("#obj6593").trigger("obj6593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6593) {
				console.warn("de-queueing event obj6593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6593_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57774();
function switchText_57774() {
	window.obj6593_onTap_runningActionsCount = obj6593_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6593_onTap_runningActionsCount = window.obj6593_onTap_runningActionsCount - 1;
if (window.obj6593_onTap_runningActionsCount < 0) {
	window.obj6593_onTap_runningActionsCount = 0;
} else if (window.obj6593_onTap_runningActionsCount == 0) {
	obj6593_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6593_onTap_runningActionsCount = window.obj6593_onTap_runningActionsCount - 1;
if (window.obj6593_onTap_runningActionsCount < 0) {
	window.obj6593_onTap_runningActionsCount = 0;
} else if (window.obj6593_onTap_runningActionsCount == 0) {
	obj6593_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6593_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6593_onTap_activeActionGroupIndex = -1;
		$("#obj6593").trigger("obj6593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6593) {
				console.warn("de-queueing event obj6593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6593_onTap_activeActionGroupIndex = 5;
	





















};
obj6595_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6595_onTap_activeActionGroupIndex = -1;
		$("#obj6595").trigger("obj6595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6595) {
				console.warn("de-queueing event obj6595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6595_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57815();
function switchText_57815() {
	window.obj6595_onTap_runningActionsCount = obj6595_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6595_onTap_runningActionsCount = window.obj6595_onTap_runningActionsCount - 1;
if (window.obj6595_onTap_runningActionsCount < 0) {
	window.obj6595_onTap_runningActionsCount = 0;
} else if (window.obj6595_onTap_runningActionsCount == 0) {
	obj6595_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6595_onTap_runningActionsCount = window.obj6595_onTap_runningActionsCount - 1;
if (window.obj6595_onTap_runningActionsCount < 0) {
	window.obj6595_onTap_runningActionsCount = 0;
} else if (window.obj6595_onTap_runningActionsCount == 0) {
	obj6595_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6595_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6595_onTap_activeActionGroupIndex = -1;
		$("#obj6595").trigger("obj6595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6595) {
				console.warn("de-queueing event obj6595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6595_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57816();
function runjs_57816() {
	window.obj6595_onTap_runningActionsCount = obj6595_onTap_runningActionsCount + 1;

	$("#obj6595").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6595_onTap_runningActionsCount = window.obj6595_onTap_runningActionsCount - 1;
if (window.obj6595_onTap_runningActionsCount < 0) {
	window.obj6595_onTap_runningActionsCount = 0;
} else if (window.obj6595_onTap_runningActionsCount == 0) {
	obj6595_onTap_actionGroup2();
}
	}, 1);
}







};
obj6595_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6595_onTap_activeActionGroupIndex = -1;
		$("#obj6595").trigger("obj6595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6595) {
				console.warn("de-queueing event obj6595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6595_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57817();
function playAudio_57817() {
	window.obj6595_onTap_runningActionsCount = obj6595_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6595_onTap_runningActionsCount = window.obj6595_onTap_runningActionsCount - 1;
if (window.obj6595_onTap_runningActionsCount < 0) {
	window.obj6595_onTap_runningActionsCount = 0;
} else if (window.obj6595_onTap_runningActionsCount == 0) {
	obj6595_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6595_onTap_runningActionsCount = window.obj6595_onTap_runningActionsCount - 1;
if (window.obj6595_onTap_runningActionsCount < 0) {
	window.obj6595_onTap_runningActionsCount = 0;
} else if (window.obj6595_onTap_runningActionsCount == 0) {
	obj6595_onTap_actionGroup3();
}
	}
}









};
obj6595_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6595_onTap_activeActionGroupIndex = -1;
		$("#obj6595").trigger("obj6595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6595) {
				console.warn("de-queueing event obj6595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6595_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57818();
function runjs_57818() {
	window.obj6595_onTap_runningActionsCount = obj6595_onTap_runningActionsCount + 1;

	$("#obj6595").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6595_onTap_runningActionsCount = window.obj6595_onTap_runningActionsCount - 1;
if (window.obj6595_onTap_runningActionsCount < 0) {
	window.obj6595_onTap_runningActionsCount = 0;
} else if (window.obj6595_onTap_runningActionsCount == 0) {
	obj6595_onTap_actionGroup4();
}
	}, 1);
}







};
obj6595_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6595_onTap_activeActionGroupIndex = -1;
		$("#obj6595").trigger("obj6595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6595) {
				console.warn("de-queueing event obj6595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6595_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57819();
function switchText_57819() {
	window.obj6595_onTap_runningActionsCount = obj6595_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6595_onTap_runningActionsCount = window.obj6595_onTap_runningActionsCount - 1;
if (window.obj6595_onTap_runningActionsCount < 0) {
	window.obj6595_onTap_runningActionsCount = 0;
} else if (window.obj6595_onTap_runningActionsCount == 0) {
	obj6595_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6595_onTap_runningActionsCount = window.obj6595_onTap_runningActionsCount - 1;
if (window.obj6595_onTap_runningActionsCount < 0) {
	window.obj6595_onTap_runningActionsCount = 0;
} else if (window.obj6595_onTap_runningActionsCount == 0) {
	obj6595_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6595_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6595_onTap_activeActionGroupIndex = -1;
		$("#obj6595").trigger("obj6595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6595) {
				console.warn("de-queueing event obj6595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6595_onTap_activeActionGroupIndex = 5;
	





















};
obj6597_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6597_onTap_activeActionGroupIndex = -1;
		$("#obj6597").trigger("obj6597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6597) {
				console.warn("de-queueing event obj6597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6597_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57855();
function switchText_57855() {
	window.obj6597_onTap_runningActionsCount = obj6597_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6597_onTap_runningActionsCount = window.obj6597_onTap_runningActionsCount - 1;
if (window.obj6597_onTap_runningActionsCount < 0) {
	window.obj6597_onTap_runningActionsCount = 0;
} else if (window.obj6597_onTap_runningActionsCount == 0) {
	obj6597_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6597_onTap_runningActionsCount = window.obj6597_onTap_runningActionsCount - 1;
if (window.obj6597_onTap_runningActionsCount < 0) {
	window.obj6597_onTap_runningActionsCount = 0;
} else if (window.obj6597_onTap_runningActionsCount == 0) {
	obj6597_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6597_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6597_onTap_activeActionGroupIndex = -1;
		$("#obj6597").trigger("obj6597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6597) {
				console.warn("de-queueing event obj6597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6597_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57856();
function runjs_57856() {
	window.obj6597_onTap_runningActionsCount = obj6597_onTap_runningActionsCount + 1;

	$("#obj6597").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6597_onTap_runningActionsCount = window.obj6597_onTap_runningActionsCount - 1;
if (window.obj6597_onTap_runningActionsCount < 0) {
	window.obj6597_onTap_runningActionsCount = 0;
} else if (window.obj6597_onTap_runningActionsCount == 0) {
	obj6597_onTap_actionGroup2();
}
	}, 1);
}







};
obj6597_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6597_onTap_activeActionGroupIndex = -1;
		$("#obj6597").trigger("obj6597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6597) {
				console.warn("de-queueing event obj6597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6597_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57857();
function playAudio_57857() {
	window.obj6597_onTap_runningActionsCount = obj6597_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6597_onTap_runningActionsCount = window.obj6597_onTap_runningActionsCount - 1;
if (window.obj6597_onTap_runningActionsCount < 0) {
	window.obj6597_onTap_runningActionsCount = 0;
} else if (window.obj6597_onTap_runningActionsCount == 0) {
	obj6597_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6597_onTap_runningActionsCount = window.obj6597_onTap_runningActionsCount - 1;
if (window.obj6597_onTap_runningActionsCount < 0) {
	window.obj6597_onTap_runningActionsCount = 0;
} else if (window.obj6597_onTap_runningActionsCount == 0) {
	obj6597_onTap_actionGroup3();
}
	}
}









};
obj6597_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6597_onTap_activeActionGroupIndex = -1;
		$("#obj6597").trigger("obj6597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6597) {
				console.warn("de-queueing event obj6597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6597_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57858();
function runjs_57858() {
	window.obj6597_onTap_runningActionsCount = obj6597_onTap_runningActionsCount + 1;

	$("#obj6597").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6597_onTap_runningActionsCount = window.obj6597_onTap_runningActionsCount - 1;
if (window.obj6597_onTap_runningActionsCount < 0) {
	window.obj6597_onTap_runningActionsCount = 0;
} else if (window.obj6597_onTap_runningActionsCount == 0) {
	obj6597_onTap_actionGroup4();
}
	}, 1);
}







};
obj6597_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6597_onTap_activeActionGroupIndex = -1;
		$("#obj6597").trigger("obj6597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6597) {
				console.warn("de-queueing event obj6597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6597_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57859();
function switchText_57859() {
	window.obj6597_onTap_runningActionsCount = obj6597_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6597_onTap_runningActionsCount = window.obj6597_onTap_runningActionsCount - 1;
if (window.obj6597_onTap_runningActionsCount < 0) {
	window.obj6597_onTap_runningActionsCount = 0;
} else if (window.obj6597_onTap_runningActionsCount == 0) {
	obj6597_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6597_onTap_runningActionsCount = window.obj6597_onTap_runningActionsCount - 1;
if (window.obj6597_onTap_runningActionsCount < 0) {
	window.obj6597_onTap_runningActionsCount = 0;
} else if (window.obj6597_onTap_runningActionsCount == 0) {
	obj6597_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6597_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6597_onTap_activeActionGroupIndex = -1;
		$("#obj6597").trigger("obj6597_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6597) {
				console.warn("de-queueing event obj6597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6597_onTap_activeActionGroupIndex = 5;
	





















};
obj6599_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6599_onTap_activeActionGroupIndex = -1;
		$("#obj6599").trigger("obj6599_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6599) {
				console.warn("de-queueing event obj6599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6599_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57890();
function switchText_57890() {
	window.obj6599_onTap_runningActionsCount = obj6599_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6599_onTap_runningActionsCount = window.obj6599_onTap_runningActionsCount - 1;
if (window.obj6599_onTap_runningActionsCount < 0) {
	window.obj6599_onTap_runningActionsCount = 0;
} else if (window.obj6599_onTap_runningActionsCount == 0) {
	obj6599_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6599_onTap_runningActionsCount = window.obj6599_onTap_runningActionsCount - 1;
if (window.obj6599_onTap_runningActionsCount < 0) {
	window.obj6599_onTap_runningActionsCount = 0;
} else if (window.obj6599_onTap_runningActionsCount == 0) {
	obj6599_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6599_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6599_onTap_activeActionGroupIndex = -1;
		$("#obj6599").trigger("obj6599_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6599) {
				console.warn("de-queueing event obj6599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6599_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57891();
function runjs_57891() {
	window.obj6599_onTap_runningActionsCount = obj6599_onTap_runningActionsCount + 1;

	$("#obj6599").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6599_onTap_runningActionsCount = window.obj6599_onTap_runningActionsCount - 1;
if (window.obj6599_onTap_runningActionsCount < 0) {
	window.obj6599_onTap_runningActionsCount = 0;
} else if (window.obj6599_onTap_runningActionsCount == 0) {
	obj6599_onTap_actionGroup2();
}
	}, 1);
}







};
obj6599_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6599_onTap_activeActionGroupIndex = -1;
		$("#obj6599").trigger("obj6599_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6599) {
				console.warn("de-queueing event obj6599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6599_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57892();
function playAudio_57892() {
	window.obj6599_onTap_runningActionsCount = obj6599_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6599_onTap_runningActionsCount = window.obj6599_onTap_runningActionsCount - 1;
if (window.obj6599_onTap_runningActionsCount < 0) {
	window.obj6599_onTap_runningActionsCount = 0;
} else if (window.obj6599_onTap_runningActionsCount == 0) {
	obj6599_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6599_onTap_runningActionsCount = window.obj6599_onTap_runningActionsCount - 1;
if (window.obj6599_onTap_runningActionsCount < 0) {
	window.obj6599_onTap_runningActionsCount = 0;
} else if (window.obj6599_onTap_runningActionsCount == 0) {
	obj6599_onTap_actionGroup3();
}
	}
}









};
obj6599_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6599_onTap_activeActionGroupIndex = -1;
		$("#obj6599").trigger("obj6599_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6599) {
				console.warn("de-queueing event obj6599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6599_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57893();
function runjs_57893() {
	window.obj6599_onTap_runningActionsCount = obj6599_onTap_runningActionsCount + 1;

	$("#obj6599").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6599_onTap_runningActionsCount = window.obj6599_onTap_runningActionsCount - 1;
if (window.obj6599_onTap_runningActionsCount < 0) {
	window.obj6599_onTap_runningActionsCount = 0;
} else if (window.obj6599_onTap_runningActionsCount == 0) {
	obj6599_onTap_actionGroup4();
}
	}, 1);
}







};
obj6599_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6599_onTap_activeActionGroupIndex = -1;
		$("#obj6599").trigger("obj6599_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6599) {
				console.warn("de-queueing event obj6599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6599_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57894();
function switchText_57894() {
	window.obj6599_onTap_runningActionsCount = obj6599_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6599_onTap_runningActionsCount = window.obj6599_onTap_runningActionsCount - 1;
if (window.obj6599_onTap_runningActionsCount < 0) {
	window.obj6599_onTap_runningActionsCount = 0;
} else if (window.obj6599_onTap_runningActionsCount == 0) {
	obj6599_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6599_onTap_runningActionsCount = window.obj6599_onTap_runningActionsCount - 1;
if (window.obj6599_onTap_runningActionsCount < 0) {
	window.obj6599_onTap_runningActionsCount = 0;
} else if (window.obj6599_onTap_runningActionsCount == 0) {
	obj6599_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6599_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6599_onTap_activeActionGroupIndex = -1;
		$("#obj6599").trigger("obj6599_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6599) {
				console.warn("de-queueing event obj6599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6599_onTap_activeActionGroupIndex = 5;
	





















};
obj6601_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6601_onTap_activeActionGroupIndex = -1;
		$("#obj6601").trigger("obj6601_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6601) {
				console.warn("de-queueing event obj6601." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6601").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6601_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57920();
function switchText_57920() {
	window.obj6601_onTap_runningActionsCount = obj6601_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6601_onTap_runningActionsCount = window.obj6601_onTap_runningActionsCount - 1;
if (window.obj6601_onTap_runningActionsCount < 0) {
	window.obj6601_onTap_runningActionsCount = 0;
} else if (window.obj6601_onTap_runningActionsCount == 0) {
	obj6601_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6601_onTap_runningActionsCount = window.obj6601_onTap_runningActionsCount - 1;
if (window.obj6601_onTap_runningActionsCount < 0) {
	window.obj6601_onTap_runningActionsCount = 0;
} else if (window.obj6601_onTap_runningActionsCount == 0) {
	obj6601_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6601_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6601_onTap_activeActionGroupIndex = -1;
		$("#obj6601").trigger("obj6601_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6601) {
				console.warn("de-queueing event obj6601." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6601").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6601_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57921();
function runjs_57921() {
	window.obj6601_onTap_runningActionsCount = obj6601_onTap_runningActionsCount + 1;

	$("#obj6601").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6601_onTap_runningActionsCount = window.obj6601_onTap_runningActionsCount - 1;
if (window.obj6601_onTap_runningActionsCount < 0) {
	window.obj6601_onTap_runningActionsCount = 0;
} else if (window.obj6601_onTap_runningActionsCount == 0) {
	obj6601_onTap_actionGroup2();
}
	}, 1);
}







};
obj6601_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6601_onTap_activeActionGroupIndex = -1;
		$("#obj6601").trigger("obj6601_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6601) {
				console.warn("de-queueing event obj6601." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6601").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6601_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57922();
function playAudio_57922() {
	window.obj6601_onTap_runningActionsCount = obj6601_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6601_onTap_runningActionsCount = window.obj6601_onTap_runningActionsCount - 1;
if (window.obj6601_onTap_runningActionsCount < 0) {
	window.obj6601_onTap_runningActionsCount = 0;
} else if (window.obj6601_onTap_runningActionsCount == 0) {
	obj6601_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6601_onTap_runningActionsCount = window.obj6601_onTap_runningActionsCount - 1;
if (window.obj6601_onTap_runningActionsCount < 0) {
	window.obj6601_onTap_runningActionsCount = 0;
} else if (window.obj6601_onTap_runningActionsCount == 0) {
	obj6601_onTap_actionGroup3();
}
	}
}









};
obj6601_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6601_onTap_activeActionGroupIndex = -1;
		$("#obj6601").trigger("obj6601_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6601) {
				console.warn("de-queueing event obj6601." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6601").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6601_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57923();
function runjs_57923() {
	window.obj6601_onTap_runningActionsCount = obj6601_onTap_runningActionsCount + 1;

	$("#obj6601").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6601_onTap_runningActionsCount = window.obj6601_onTap_runningActionsCount - 1;
if (window.obj6601_onTap_runningActionsCount < 0) {
	window.obj6601_onTap_runningActionsCount = 0;
} else if (window.obj6601_onTap_runningActionsCount == 0) {
	obj6601_onTap_actionGroup4();
}
	}, 1);
}







};
obj6601_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6601_onTap_activeActionGroupIndex = -1;
		$("#obj6601").trigger("obj6601_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6601) {
				console.warn("de-queueing event obj6601." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6601").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6601_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57924();
function switchText_57924() {
	window.obj6601_onTap_runningActionsCount = obj6601_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6601_onTap_runningActionsCount = window.obj6601_onTap_runningActionsCount - 1;
if (window.obj6601_onTap_runningActionsCount < 0) {
	window.obj6601_onTap_runningActionsCount = 0;
} else if (window.obj6601_onTap_runningActionsCount == 0) {
	obj6601_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6601_onTap_runningActionsCount = window.obj6601_onTap_runningActionsCount - 1;
if (window.obj6601_onTap_runningActionsCount < 0) {
	window.obj6601_onTap_runningActionsCount = 0;
} else if (window.obj6601_onTap_runningActionsCount == 0) {
	obj6601_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6601_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6601_onTap_activeActionGroupIndex = -1;
		$("#obj6601").trigger("obj6601_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6601) {
				console.warn("de-queueing event obj6601." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6601").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6601_onTap_activeActionGroupIndex = 5;
	





















};
obj6605_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6605_onTap_activeActionGroupIndex = -1;
		$("#obj6605").trigger("obj6605_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6605) {
				console.warn("de-queueing event obj6605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6605_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6694();
function runjs_6694() {
	window.obj6605_onTap_runningActionsCount = obj6605_onTap_runningActionsCount + 1;

	$("#obj6605").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6605_onTap_runningActionsCount = window.obj6605_onTap_runningActionsCount - 1;
if (window.obj6605_onTap_runningActionsCount < 0) {
	window.obj6605_onTap_runningActionsCount = 0;
} else if (window.obj6605_onTap_runningActionsCount == 0) {
	obj6605_onTap_actionGroup1();
}
	}, 1);
}







};
obj6605_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6605_onTap_activeActionGroupIndex = -1;
		$("#obj6605").trigger("obj6605_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6605) {
				console.warn("de-queueing event obj6605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6605_onTap_activeActionGroupIndex = 1;
	





















};
obj6607_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6695();
function runjs_6695() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;

	$("#obj6607").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup1();
}
	}, 1);
}







};
obj6607_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_6716();
function switchText_6716() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj6607_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_6696();
function runjs_6696() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;

	$("#obj6609").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup3();
}
	}, 1);
}







};
obj6607_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6697();
function runjs_6697() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;

	$("#obj6611").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup4();
}
	}, 1);
}







};
obj6607_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_6698();
function runjs_6698() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;

	$("#obj6613").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup5();
}
	}, 1);
}







};
obj6607_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_6699();
function runjs_6699() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;

	$("#obj6615").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup6();
}
	}, 1);
}







};
obj6607_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6700();
function runjs_6700() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;

	$("#obj6617").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup7();
}
	}, 1);
}







};
obj6607_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6701();
function runjs_6701() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;

	$("#obj6643").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup8();
}
	}, 1);
}







};
obj6607_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj6662 
playAudio_6702();
function playAudio_6702() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6662")[0];
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
		    window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup9();
}
	}
}









};
obj6607_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_90055();
function switchText_90055() {
	window.obj6607_onTap_runningActionsCount = obj6607_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6607_onTap_runningActionsCount = window.obj6607_onTap_runningActionsCount - 1;
if (window.obj6607_onTap_runningActionsCount < 0) {
	window.obj6607_onTap_runningActionsCount = 0;
} else if (window.obj6607_onTap_runningActionsCount == 0) {
	obj6607_onTap_actionGroup10();
}
		}, 1);
	}
}






};
obj6607_onTap_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6607_onTap_activeActionGroupIndex = -1;
		$("#obj6607").trigger("obj6607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6607) {
				console.warn("de-queueing event obj6607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6607_onTap_activeActionGroupIndex = 10;
	





















};
obj6619_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6619_onTap_activeActionGroupIndex = -1;
		$("#obj6619").trigger("obj6619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6619) {
				console.warn("de-queueing event obj6619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6619_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_57925();
function switchText_57925() {
	window.obj6619_onTap_runningActionsCount = obj6619_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6619_onTap_runningActionsCount = window.obj6619_onTap_runningActionsCount - 1;
if (window.obj6619_onTap_runningActionsCount < 0) {
	window.obj6619_onTap_runningActionsCount = 0;
} else if (window.obj6619_onTap_runningActionsCount == 0) {
	obj6619_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6619_onTap_runningActionsCount = window.obj6619_onTap_runningActionsCount - 1;
if (window.obj6619_onTap_runningActionsCount < 0) {
	window.obj6619_onTap_runningActionsCount = 0;
} else if (window.obj6619_onTap_runningActionsCount == 0) {
	obj6619_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj6619_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6619_onTap_activeActionGroupIndex = -1;
		$("#obj6619").trigger("obj6619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6619) {
				console.warn("de-queueing event obj6619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6619_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_57926();
function runjs_57926() {
	window.obj6619_onTap_runningActionsCount = obj6619_onTap_runningActionsCount + 1;

	$("#obj6619").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj6619_onTap_runningActionsCount = window.obj6619_onTap_runningActionsCount - 1;
if (window.obj6619_onTap_runningActionsCount < 0) {
	window.obj6619_onTap_runningActionsCount = 0;
} else if (window.obj6619_onTap_runningActionsCount == 0) {
	obj6619_onTap_actionGroup2();
}
	}, 1);
}







};
obj6619_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6619_onTap_activeActionGroupIndex = -1;
		$("#obj6619").trigger("obj6619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6619) {
				console.warn("de-queueing event obj6619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6619_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj6661 
playAudio_57927();
function playAudio_57927() {
	window.obj6619_onTap_runningActionsCount = obj6619_onTap_runningActionsCount + 1;
	var myAudio = $("#obj6661")[0];
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
		    window.obj6619_onTap_runningActionsCount = window.obj6619_onTap_runningActionsCount - 1;
if (window.obj6619_onTap_runningActionsCount < 0) {
	window.obj6619_onTap_runningActionsCount = 0;
} else if (window.obj6619_onTap_runningActionsCount == 0) {
	obj6619_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6619_onTap_runningActionsCount = window.obj6619_onTap_runningActionsCount - 1;
if (window.obj6619_onTap_runningActionsCount < 0) {
	window.obj6619_onTap_runningActionsCount = 0;
} else if (window.obj6619_onTap_runningActionsCount == 0) {
	obj6619_onTap_actionGroup3();
}
	}
}









};
obj6619_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6619_onTap_activeActionGroupIndex = -1;
		$("#obj6619").trigger("obj6619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6619) {
				console.warn("de-queueing event obj6619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6619_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_57928();
function runjs_57928() {
	window.obj6619_onTap_runningActionsCount = obj6619_onTap_runningActionsCount + 1;

	$("#obj6619").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj6619_onTap_runningActionsCount = window.obj6619_onTap_runningActionsCount - 1;
if (window.obj6619_onTap_runningActionsCount < 0) {
	window.obj6619_onTap_runningActionsCount = 0;
} else if (window.obj6619_onTap_runningActionsCount == 0) {
	obj6619_onTap_actionGroup4();
}
	}, 1);
}







};
obj6619_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6619_onTap_activeActionGroupIndex = -1;
		$("#obj6619").trigger("obj6619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6619) {
				console.warn("de-queueing event obj6619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6619_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_57929();
function switchText_57929() {
	window.obj6619_onTap_runningActionsCount = obj6619_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj718").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj718_content");
			setTimeout(function () {
				window.obj6619_onTap_runningActionsCount = window.obj6619_onTap_runningActionsCount - 1;
if (window.obj6619_onTap_runningActionsCount < 0) {
	window.obj6619_onTap_runningActionsCount = 0;
} else if (window.obj6619_onTap_runningActionsCount == 0) {
	obj6619_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6619_onTap_runningActionsCount = window.obj6619_onTap_runningActionsCount - 1;
if (window.obj6619_onTap_runningActionsCount < 0) {
	window.obj6619_onTap_runningActionsCount = 0;
} else if (window.obj6619_onTap_runningActionsCount == 0) {
	obj6619_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj6619_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6619_onTap_activeActionGroupIndex = -1;
		$("#obj6619").trigger("obj6619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6619) {
				console.warn("de-queueing event obj6619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6619_onTap_activeActionGroupIndex = 5;
	





















};
obj65070_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65070_onTap_activeActionGroupIndex = -1;
		$("#obj65070").trigger("obj65070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65070) {
				console.warn("de-queueing event obj65070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65070_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65070 
hide_65073();
function hide_65073() {
	var selector = "#obj65070";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65070_onTap_runningActionsCount = obj65070_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65070_onTap_runningActionsCount = window.obj65070_onTap_runningActionsCount - 1;
if (window.obj65070_onTap_runningActionsCount < 0) {
	window.obj65070_onTap_runningActionsCount = 0;
} else if (window.obj65070_onTap_runningActionsCount == 0) {
	obj65070_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65073(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65070_onTap_runningActionsCount = window.obj65070_onTap_runningActionsCount - 1;
if (window.obj65070_onTap_runningActionsCount < 0) {
	window.obj65070_onTap_runningActionsCount = 0;
} else if (window.obj65070_onTap_runningActionsCount == 0) {
	obj65070_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65076 
stopMovie_65072();
function stopMovie_65072() {
	window.obj65070_onTap_runningActionsCount = obj65070_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65076")[0];
	myVideo.pause();
	window.obj65070_onTap_runningActionsCount = window.obj65070_onTap_runningActionsCount - 1;
if (window.obj65070_onTap_runningActionsCount < 0) {
	window.obj65070_onTap_runningActionsCount = 0;
} else if (window.obj65070_onTap_runningActionsCount == 0) {
	obj65070_onTap_actionGroup1();
}
}
















};
obj65070_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65070_onTap_activeActionGroupIndex = -1;
		$("#obj65070").trigger("obj65070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65070) {
				console.warn("de-queueing event obj65070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65070_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65062
(function(){
	window.obj65070_onTap_runningActionsCount = obj65070_onTap_runningActionsCount + 1;

	var selector = "#obj65062";
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
					window.obj65070_onTap_runningActionsCount = window.obj65070_onTap_runningActionsCount - 1;
if (window.obj65070_onTap_runningActionsCount < 0) {
	window.obj65070_onTap_runningActionsCount = 0;
} else if (window.obj65070_onTap_runningActionsCount == 0) {
	obj65070_onTap_actionGroup2();
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
				window.obj65070_onTap_runningActionsCount = window.obj65070_onTap_runningActionsCount - 1;
if (window.obj65070_onTap_runningActionsCount < 0) {
	window.obj65070_onTap_runningActionsCount = 0;
} else if (window.obj65070_onTap_runningActionsCount == 0) {
	obj65070_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65070_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65070_onTap_activeActionGroupIndex = -1;
		$("#obj65070").trigger("obj65070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65070) {
				console.warn("de-queueing event obj65070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65070_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65076 
move_65075();
function move_65075() {
	window.obj65070_onTap_runningActionsCount = obj65070_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65076");
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
			window.obj65070_onTap_runningActionsCount = window.obj65070_onTap_runningActionsCount - 1;
if (window.obj65070_onTap_runningActionsCount < 0) {
	window.obj65070_onTap_runningActionsCount = 0;
} else if (window.obj65070_onTap_runningActionsCount == 0) {
	obj65070_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65070_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65070_onTap_activeActionGroupIndex = -1;
		$("#obj65070").trigger("obj65070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65070) {
				console.warn("de-queueing event obj65070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65070_onTap_activeActionGroupIndex = 3;
	





















};
obj65062_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65062_onTap_activeActionGroupIndex = -1;
		$("#obj65062").trigger("obj65062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65062) {
				console.warn("de-queueing event obj65062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65062_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65062 
hide_65065();
function hide_65065() {
	var selector = "#obj65062";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65062_onTap_runningActionsCount = obj65062_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65062_onTap_runningActionsCount = window.obj65062_onTap_runningActionsCount - 1;
if (window.obj65062_onTap_runningActionsCount < 0) {
	window.obj65062_onTap_runningActionsCount = 0;
} else if (window.obj65062_onTap_runningActionsCount == 0) {
	obj65062_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65065(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65062_onTap_runningActionsCount = window.obj65062_onTap_runningActionsCount - 1;
if (window.obj65062_onTap_runningActionsCount < 0) {
	window.obj65062_onTap_runningActionsCount = 0;
} else if (window.obj65062_onTap_runningActionsCount == 0) {
	obj65062_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65076 
playPauseMovie_65064();
function playPauseMovie_65064() {
	window.obj65062_onTap_runningActionsCount = obj65062_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65076")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65062_onTap_runningActionsCount = window.obj65062_onTap_runningActionsCount - 1;
if (window.obj65062_onTap_runningActionsCount < 0) {
	window.obj65062_onTap_runningActionsCount = 0;
} else if (window.obj65062_onTap_runningActionsCount == 0) {
	obj65062_onTap_actionGroup1();
}
}

















};
obj65062_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65062_onTap_activeActionGroupIndex = -1;
		$("#obj65062").trigger("obj65062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65062) {
				console.warn("de-queueing event obj65062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65062_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65070
(function(){
	window.obj65062_onTap_runningActionsCount = obj65062_onTap_runningActionsCount + 1;

	var selector = "#obj65070";
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
					window.obj65062_onTap_runningActionsCount = window.obj65062_onTap_runningActionsCount - 1;
if (window.obj65062_onTap_runningActionsCount < 0) {
	window.obj65062_onTap_runningActionsCount = 0;
} else if (window.obj65062_onTap_runningActionsCount == 0) {
	obj65062_onTap_actionGroup2();
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
				window.obj65062_onTap_runningActionsCount = window.obj65062_onTap_runningActionsCount - 1;
if (window.obj65062_onTap_runningActionsCount < 0) {
	window.obj65062_onTap_runningActionsCount = 0;
} else if (window.obj65062_onTap_runningActionsCount == 0) {
	obj65062_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65062_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65062_onTap_activeActionGroupIndex = -1;
		$("#obj65062").trigger("obj65062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65062) {
				console.warn("de-queueing event obj65062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65062_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65076 
move_65067();
function move_65067() {
	window.obj65062_onTap_runningActionsCount = obj65062_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65076");
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
			window.obj65062_onTap_runningActionsCount = window.obj65062_onTap_runningActionsCount - 1;
if (window.obj65062_onTap_runningActionsCount < 0) {
	window.obj65062_onTap_runningActionsCount = 0;
} else if (window.obj65062_onTap_runningActionsCount == 0) {
	obj65062_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65062_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65062_onTap_activeActionGroupIndex = -1;
		$("#obj65062").trigger("obj65062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65062) {
				console.warn("de-queueing event obj65062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65062_onTap_activeActionGroupIndex = 3;
	





















};
obj86865_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86865_onTap_activeActionGroupIndex = -1;
		$("#obj86865").trigger("obj86865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86865) {
				console.warn("de-queueing event obj86865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86865_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86870 
stopAudio_86867();
function stopAudio_86867() {
	window.obj86865_onTap_runningActionsCount = obj86865_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86870")[0];
	myAudio.pause();
	window.obj86865_onTap_runningActionsCount = window.obj86865_onTap_runningActionsCount - 1;
if (window.obj86865_onTap_runningActionsCount < 0) {
	window.obj86865_onTap_runningActionsCount = 0;
} else if (window.obj86865_onTap_runningActionsCount == 0) {
	obj86865_onTap_actionGroup1();
}
}








};
obj86865_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86865_onTap_activeActionGroupIndex = -1;
		$("#obj86865").trigger("obj86865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86865) {
				console.warn("de-queueing event obj86865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86865_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86865 
hide_86868();
function hide_86868() {
	var selector = "#obj86865";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86865_onTap_runningActionsCount = obj86865_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86865_onTap_runningActionsCount = window.obj86865_onTap_runningActionsCount - 1;
if (window.obj86865_onTap_runningActionsCount < 0) {
	window.obj86865_onTap_runningActionsCount = 0;
} else if (window.obj86865_onTap_runningActionsCount == 0) {
	obj86865_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86868(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86865_onTap_runningActionsCount = window.obj86865_onTap_runningActionsCount - 1;
if (window.obj86865_onTap_runningActionsCount < 0) {
	window.obj86865_onTap_runningActionsCount = 0;
} else if (window.obj86865_onTap_runningActionsCount == 0) {
	obj86865_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86865_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86865_onTap_activeActionGroupIndex = -1;
		$("#obj86865").trigger("obj86865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86865) {
				console.warn("de-queueing event obj86865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86865_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86860
(function(){
	window.obj86865_onTap_runningActionsCount = obj86865_onTap_runningActionsCount + 1;

	var selector = "#obj86860";
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
					window.obj86865_onTap_runningActionsCount = window.obj86865_onTap_runningActionsCount - 1;
if (window.obj86865_onTap_runningActionsCount < 0) {
	window.obj86865_onTap_runningActionsCount = 0;
} else if (window.obj86865_onTap_runningActionsCount == 0) {
	obj86865_onTap_actionGroup3();
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
				window.obj86865_onTap_runningActionsCount = window.obj86865_onTap_runningActionsCount - 1;
if (window.obj86865_onTap_runningActionsCount < 0) {
	window.obj86865_onTap_runningActionsCount = 0;
} else if (window.obj86865_onTap_runningActionsCount == 0) {
	obj86865_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86865_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86865_onTap_activeActionGroupIndex = -1;
		$("#obj86865").trigger("obj86865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86865) {
				console.warn("de-queueing event obj86865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86865_onTap_activeActionGroupIndex = 3;
	





















};
obj86860_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86860_onTap_activeActionGroupIndex = -1;
		$("#obj86860").trigger("obj86860_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86860) {
				console.warn("de-queueing event obj86860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86860_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86860 
hide_86862();
function hide_86862() {
	var selector = "#obj86860";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86860_onTap_runningActionsCount = obj86860_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86860_onTap_runningActionsCount = window.obj86860_onTap_runningActionsCount - 1;
if (window.obj86860_onTap_runningActionsCount < 0) {
	window.obj86860_onTap_runningActionsCount = 0;
} else if (window.obj86860_onTap_runningActionsCount == 0) {
	obj86860_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86862(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86860_onTap_runningActionsCount = window.obj86860_onTap_runningActionsCount - 1;
if (window.obj86860_onTap_runningActionsCount < 0) {
	window.obj86860_onTap_runningActionsCount = 0;
} else if (window.obj86860_onTap_runningActionsCount == 0) {
	obj86860_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86860_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86860_onTap_activeActionGroupIndex = -1;
		$("#obj86860").trigger("obj86860_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86860) {
				console.warn("de-queueing event obj86860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86860_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86865
(function(){
	window.obj86860_onTap_runningActionsCount = obj86860_onTap_runningActionsCount + 1;

	var selector = "#obj86865";
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
					window.obj86860_onTap_runningActionsCount = window.obj86860_onTap_runningActionsCount - 1;
if (window.obj86860_onTap_runningActionsCount < 0) {
	window.obj86860_onTap_runningActionsCount = 0;
} else if (window.obj86860_onTap_runningActionsCount == 0) {
	obj86860_onTap_actionGroup2();
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
				window.obj86860_onTap_runningActionsCount = window.obj86860_onTap_runningActionsCount - 1;
if (window.obj86860_onTap_runningActionsCount < 0) {
	window.obj86860_onTap_runningActionsCount = 0;
} else if (window.obj86860_onTap_runningActionsCount == 0) {
	obj86860_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86860_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86860_onTap_activeActionGroupIndex = -1;
		$("#obj86860").trigger("obj86860_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86860) {
				console.warn("de-queueing event obj86860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86860_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86870 
playAudio_86864();
function playAudio_86864() {
	window.obj86860_onTap_runningActionsCount = obj86860_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86870")[0];
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
		    window.obj86860_onTap_runningActionsCount = window.obj86860_onTap_runningActionsCount - 1;
if (window.obj86860_onTap_runningActionsCount < 0) {
	window.obj86860_onTap_runningActionsCount = 0;
} else if (window.obj86860_onTap_runningActionsCount == 0) {
	obj86860_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86860_onTap_runningActionsCount = window.obj86860_onTap_runningActionsCount - 1;
if (window.obj86860_onTap_runningActionsCount < 0) {
	window.obj86860_onTap_runningActionsCount = 0;
} else if (window.obj86860_onTap_runningActionsCount == 0) {
	obj86860_onTap_actionGroup3();
}
	}
}









};
obj86860_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86860_onTap_activeActionGroupIndex = -1;
		$("#obj86860").trigger("obj86860_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86860) {
				console.warn("de-queueing event obj86860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86860_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj140: Event Touch Down
 *
 */
$("#obj140").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj140_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj140_onTap is still running");
	return;
}
var obj140_onTap_runningActionsCount = 0;
var obj140_onTap_loopCount = 0;
obj140_onTap_actionGroup0();
});










/*
 *
 *   obj143: Event Touch Down
 *
 */
$("#obj143").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj143_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj143_onTap is still running");
	return;
}
var obj143_onTap_runningActionsCount = 0;
var obj143_onTap_loopCount = 0;
obj143_onTap_actionGroup0();
});










/*
 *
 *   obj136: Event Touch Down
 *
 */
$("#obj136").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj136_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj136_onTap is still running");
	return;
}
var obj136_onTap_runningActionsCount = 0;
var obj136_onTap_loopCount = 0;
obj136_onTap_actionGroup0();
});




























































/*
 *
 *   obj6397: Event Touch Down
 *
 */
$("#obj6397").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6397_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6397_onTap is still running");
	return;
}
var obj6397_onTap_runningActionsCount = 0;
var obj6397_onTap_loopCount = 0;
obj6397_onTap_actionGroup0();
});










/*
 *
 *   obj6399: Event Touch Down
 *
 */
$("#obj6399").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6399_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6399_onTap is still running");
	return;
}
var obj6399_onTap_runningActionsCount = 0;
var obj6399_onTap_loopCount = 0;
obj6399_onTap_actionGroup0();
});










/*
 *
 *   obj6401: Event Touch Down
 *
 */
$("#obj6401").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6401_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6401_onTap is still running");
	return;
}
var obj6401_onTap_runningActionsCount = 0;
var obj6401_onTap_loopCount = 0;
obj6401_onTap_actionGroup0();
});










/*
 *
 *   obj6403: Event Touch Down
 *
 */
$("#obj6403").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6403_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6403_onTap is still running");
	return;
}
var obj6403_onTap_runningActionsCount = 0;
var obj6403_onTap_loopCount = 0;
obj6403_onTap_actionGroup0();
});










/*
 *
 *   obj6405: Event Touch Down
 *
 */
$("#obj6405").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6405_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6405_onTap is still running");
	return;
}
var obj6405_onTap_runningActionsCount = 0;
var obj6405_onTap_loopCount = 0;
obj6405_onTap_actionGroup0();
});










/*
 *
 *   obj6407: Event Touch Down
 *
 */
$("#obj6407").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6407_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6407_onTap is still running");
	return;
}
var obj6407_onTap_runningActionsCount = 0;
var obj6407_onTap_loopCount = 0;
obj6407_onTap_actionGroup0();
});










/*
 *
 *   obj6409: Event Touch Down
 *
 */
$("#obj6409").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6409_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6409_onTap is still running");
	return;
}
var obj6409_onTap_runningActionsCount = 0;
var obj6409_onTap_loopCount = 0;
obj6409_onTap_actionGroup0();
});










/*
 *
 *   obj6411: Event Touch Down
 *
 */
$("#obj6411").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6411_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6411_onTap is still running");
	return;
}
var obj6411_onTap_runningActionsCount = 0;
var obj6411_onTap_loopCount = 0;
obj6411_onTap_actionGroup0();
});










/*
 *
 *   obj6413: Event Touch Down
 *
 */
$("#obj6413").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6413_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6413_onTap is still running");
	return;
}
var obj6413_onTap_runningActionsCount = 0;
var obj6413_onTap_loopCount = 0;
obj6413_onTap_actionGroup0();
});










/*
 *
 *   obj6415: Event Touch Down
 *
 */
$("#obj6415").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6415_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6415_onTap is still running");
	return;
}
var obj6415_onTap_runningActionsCount = 0;
var obj6415_onTap_loopCount = 0;
obj6415_onTap_actionGroup0();
});










/*
 *
 *   obj6417: Event Touch Down
 *
 */
$("#obj6417").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6417_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6417_onTap is still running");
	return;
}
var obj6417_onTap_runningActionsCount = 0;
var obj6417_onTap_loopCount = 0;
obj6417_onTap_actionGroup0();
});










/*
 *
 *   obj6419: Event Touch Down
 *
 */
$("#obj6419").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6419_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6419_onTap is still running");
	return;
}
var obj6419_onTap_runningActionsCount = 0;
var obj6419_onTap_loopCount = 0;
obj6419_onTap_actionGroup0();
});










/*
 *
 *   obj6421: Event Touch Down
 *
 */
$("#obj6421").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6421_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6421_onTap is still running");
	return;
}
var obj6421_onTap_runningActionsCount = 0;
var obj6421_onTap_loopCount = 0;
obj6421_onTap_actionGroup0();
});










/*
 *
 *   obj6423: Event Touch Down
 *
 */
$("#obj6423").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6423_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6423_onTap is still running");
	return;
}
var obj6423_onTap_runningActionsCount = 0;
var obj6423_onTap_loopCount = 0;
obj6423_onTap_actionGroup0();
});










/*
 *
 *   obj6425: Event Touch Down
 *
 */
$("#obj6425").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6425_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6425_onTap is still running");
	return;
}
var obj6425_onTap_runningActionsCount = 0;
var obj6425_onTap_loopCount = 0;
obj6425_onTap_actionGroup0();
});










/*
 *
 *   obj6427: Event Touch Down
 *
 */
$("#obj6427").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6427_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6427_onTap is still running");
	return;
}
var obj6427_onTap_runningActionsCount = 0;
var obj6427_onTap_loopCount = 0;
obj6427_onTap_actionGroup0();
});










/*
 *
 *   obj6429: Event Touch Down
 *
 */
$("#obj6429").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6429_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6429_onTap is still running");
	return;
}
var obj6429_onTap_runningActionsCount = 0;
var obj6429_onTap_loopCount = 0;
obj6429_onTap_actionGroup0();
});










/*
 *
 *   obj6431: Event Touch Down
 *
 */
$("#obj6431").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6431_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6431_onTap is still running");
	return;
}
var obj6431_onTap_runningActionsCount = 0;
var obj6431_onTap_loopCount = 0;
obj6431_onTap_actionGroup0();
});




















/*
 *
 *   obj6435: Event Touch Down
 *
 */
$("#obj6435").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6435_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6435_onTap is still running");
	return;
}
var obj6435_onTap_runningActionsCount = 0;
var obj6435_onTap_loopCount = 0;
obj6435_onTap_actionGroup0();
});










/*
 *
 *   obj6437: Event Touch Down
 *
 */
$("#obj6437").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6437_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6437_onTap is still running");
	return;
}
var obj6437_onTap_runningActionsCount = 0;
var obj6437_onTap_loopCount = 0;
obj6437_onTap_actionGroup0();
});










/*
 *
 *   obj6439: Event Touch Down
 *
 */
$("#obj6439").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6439_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6439_onTap is still running");
	return;
}
var obj6439_onTap_runningActionsCount = 0;
var obj6439_onTap_loopCount = 0;
obj6439_onTap_actionGroup0();
});










/*
 *
 *   obj6441: Event Touch Down
 *
 */
$("#obj6441").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6441_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6441_onTap is still running");
	return;
}
var obj6441_onTap_runningActionsCount = 0;
var obj6441_onTap_loopCount = 0;
obj6441_onTap_actionGroup0();
});




















/*
 *
 *   obj6445: Event Touch Down
 *
 */
$("#obj6445").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6445_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6445_onTap is still running");
	return;
}
var obj6445_onTap_runningActionsCount = 0;
var obj6445_onTap_loopCount = 0;
obj6445_onTap_actionGroup0();
});










/*
 *
 *   obj6447: Event Touch Down
 *
 */
$("#obj6447").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6447_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6447_onTap is still running");
	return;
}
var obj6447_onTap_runningActionsCount = 0;
var obj6447_onTap_loopCount = 0;
obj6447_onTap_actionGroup0();
});










/*
 *
 *   obj6449: Event Touch Down
 *
 */
$("#obj6449").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6449_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6449_onTap is still running");
	return;
}
var obj6449_onTap_runningActionsCount = 0;
var obj6449_onTap_loopCount = 0;
obj6449_onTap_actionGroup0();
});




















/*
 *
 *   obj6453: Event Touch Down
 *
 */
$("#obj6453").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6453_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6453_onTap is still running");
	return;
}
var obj6453_onTap_runningActionsCount = 0;
var obj6453_onTap_loopCount = 0;
obj6453_onTap_actionGroup0();
});










/*
 *
 *   obj6455: Event Touch Down
 *
 */
$("#obj6455").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6455_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6455_onTap is still running");
	return;
}
var obj6455_onTap_runningActionsCount = 0;
var obj6455_onTap_loopCount = 0;
obj6455_onTap_actionGroup0();
});










/*
 *
 *   obj6457: Event Touch Down
 *
 */
$("#obj6457").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6457_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6457_onTap is still running");
	return;
}
var obj6457_onTap_runningActionsCount = 0;
var obj6457_onTap_loopCount = 0;
obj6457_onTap_actionGroup0();
});




















/*
 *
 *   obj6461: Event Touch Down
 *
 */
$("#obj6461").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6461_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6461_onTap is still running");
	return;
}
var obj6461_onTap_runningActionsCount = 0;
var obj6461_onTap_loopCount = 0;
obj6461_onTap_actionGroup0();
});




















/*
 *
 *   obj6465: Event Touch Down
 *
 */
$("#obj6465").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6465_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6465_onTap is still running");
	return;
}
var obj6465_onTap_runningActionsCount = 0;
var obj6465_onTap_loopCount = 0;
obj6465_onTap_actionGroup0();
});










/*
 *
 *   obj6467: Event Touch Down
 *
 */
$("#obj6467").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6467_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6467_onTap is still running");
	return;
}
var obj6467_onTap_runningActionsCount = 0;
var obj6467_onTap_loopCount = 0;
obj6467_onTap_actionGroup0();
});




















/*
 *
 *   obj6471: Event Touch Down
 *
 */
$("#obj6471").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6471_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6471_onTap is still running");
	return;
}
var obj6471_onTap_runningActionsCount = 0;
var obj6471_onTap_loopCount = 0;
obj6471_onTap_actionGroup0();
});










/*
 *
 *   obj6473: Event Touch Down
 *
 */
$("#obj6473").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6473_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6473_onTap is still running");
	return;
}
var obj6473_onTap_runningActionsCount = 0;
var obj6473_onTap_loopCount = 0;
obj6473_onTap_actionGroup0();
});




















/*
 *
 *   obj6477: Event Touch Down
 *
 */
$("#obj6477").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6477_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6477_onTap is still running");
	return;
}
var obj6477_onTap_runningActionsCount = 0;
var obj6477_onTap_loopCount = 0;
obj6477_onTap_actionGroup0();
});




















/*
 *
 *   obj6481: Event Touch Down
 *
 */
$("#obj6481").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6481_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6481_onTap is still running");
	return;
}
var obj6481_onTap_runningActionsCount = 0;
var obj6481_onTap_loopCount = 0;
obj6481_onTap_actionGroup0();
});










/*
 *
 *   obj6483: Event Touch Down
 *
 */
$("#obj6483").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6483_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6483_onTap is still running");
	return;
}
var obj6483_onTap_runningActionsCount = 0;
var obj6483_onTap_loopCount = 0;
obj6483_onTap_actionGroup0();
});










/*
 *
 *   obj6485: Event Touch Down
 *
 */
$("#obj6485").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6485_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6485_onTap is still running");
	return;
}
var obj6485_onTap_runningActionsCount = 0;
var obj6485_onTap_loopCount = 0;
obj6485_onTap_actionGroup0();
});




















/*
 *
 *   obj6489: Event Touch Down
 *
 */
$("#obj6489").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6489_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6489_onTap is still running");
	return;
}
var obj6489_onTap_runningActionsCount = 0;
var obj6489_onTap_loopCount = 0;
obj6489_onTap_actionGroup0();
});




















/*
 *
 *   obj6493: Event Touch Down
 *
 */
$("#obj6493").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6493_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6493_onTap is still running");
	return;
}
var obj6493_onTap_runningActionsCount = 0;
var obj6493_onTap_loopCount = 0;
obj6493_onTap_actionGroup0();
});




















/*
 *
 *   obj6497: Event Touch Down
 *
 */
$("#obj6497").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6497_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6497_onTap is still running");
	return;
}
var obj6497_onTap_runningActionsCount = 0;
var obj6497_onTap_loopCount = 0;
obj6497_onTap_actionGroup0();
});










/*
 *
 *   obj6499: Event Touch Down
 *
 */
$("#obj6499").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6499_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6499_onTap is still running");
	return;
}
var obj6499_onTap_runningActionsCount = 0;
var obj6499_onTap_loopCount = 0;
obj6499_onTap_actionGroup0();
});










/*
 *
 *   obj6501: Event Touch Down
 *
 */
$("#obj6501").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6501_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6501_onTap is still running");
	return;
}
var obj6501_onTap_runningActionsCount = 0;
var obj6501_onTap_loopCount = 0;
obj6501_onTap_actionGroup0();
});










/*
 *
 *   obj6503: Event Touch Down
 *
 */
$("#obj6503").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6503_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6503_onTap is still running");
	return;
}
var obj6503_onTap_runningActionsCount = 0;
var obj6503_onTap_loopCount = 0;
obj6503_onTap_actionGroup0();
});






























/*
 *
 *   obj6509: Event Touch Down
 *
 */
$("#obj6509").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6509_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6509_onTap is still running");
	return;
}
var obj6509_onTap_runningActionsCount = 0;
var obj6509_onTap_loopCount = 0;
obj6509_onTap_actionGroup0();
});




















/*
 *
 *   obj6513: Event Touch Down
 *
 */
$("#obj6513").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6513_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6513_onTap is still running");
	return;
}
var obj6513_onTap_runningActionsCount = 0;
var obj6513_onTap_loopCount = 0;
obj6513_onTap_actionGroup0();
});










/*
 *
 *   obj6515: Event Touch Down
 *
 */
$("#obj6515").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6515_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6515_onTap is still running");
	return;
}
var obj6515_onTap_runningActionsCount = 0;
var obj6515_onTap_loopCount = 0;
obj6515_onTap_actionGroup0();
});










/*
 *
 *   obj6517: Event Touch Down
 *
 */
$("#obj6517").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6517_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6517_onTap is still running");
	return;
}
var obj6517_onTap_runningActionsCount = 0;
var obj6517_onTap_loopCount = 0;
obj6517_onTap_actionGroup0();
});










/*
 *
 *   obj6519: Event Touch Down
 *
 */
$("#obj6519").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6519_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6519_onTap is still running");
	return;
}
var obj6519_onTap_runningActionsCount = 0;
var obj6519_onTap_loopCount = 0;
obj6519_onTap_actionGroup0();
});










/*
 *
 *   obj6521: Event Touch Down
 *
 */
$("#obj6521").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6521_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6521_onTap is still running");
	return;
}
var obj6521_onTap_runningActionsCount = 0;
var obj6521_onTap_loopCount = 0;
obj6521_onTap_actionGroup0();
});




















/*
 *
 *   obj6525: Event Touch Down
 *
 */
$("#obj6525").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6525_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6525_onTap is still running");
	return;
}
var obj6525_onTap_runningActionsCount = 0;
var obj6525_onTap_loopCount = 0;
obj6525_onTap_actionGroup0();
});




















/*
 *
 *   obj6529: Event Touch Down
 *
 */
$("#obj6529").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6529_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6529_onTap is still running");
	return;
}
var obj6529_onTap_runningActionsCount = 0;
var obj6529_onTap_loopCount = 0;
obj6529_onTap_actionGroup0();
});










/*
 *
 *   obj6531: Event Touch Down
 *
 */
$("#obj6531").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6531_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6531_onTap is still running");
	return;
}
var obj6531_onTap_runningActionsCount = 0;
var obj6531_onTap_loopCount = 0;
obj6531_onTap_actionGroup0();
});










/*
 *
 *   obj6533: Event Touch Down
 *
 */
$("#obj6533").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6533_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6533_onTap is still running");
	return;
}
var obj6533_onTap_runningActionsCount = 0;
var obj6533_onTap_loopCount = 0;
obj6533_onTap_actionGroup0();
});










/*
 *
 *   obj6535: Event Touch Down
 *
 */
$("#obj6535").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6535_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6535_onTap is still running");
	return;
}
var obj6535_onTap_runningActionsCount = 0;
var obj6535_onTap_loopCount = 0;
obj6535_onTap_actionGroup0();
});










/*
 *
 *   obj6537: Event Touch Down
 *
 */
$("#obj6537").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6537_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6537_onTap is still running");
	return;
}
var obj6537_onTap_runningActionsCount = 0;
var obj6537_onTap_loopCount = 0;
obj6537_onTap_actionGroup0();
});








































/*
 *
 *   obj6545: Event Touch Down
 *
 */
$("#obj6545").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6545_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6545_onTap is still running");
	return;
}
var obj6545_onTap_runningActionsCount = 0;
var obj6545_onTap_loopCount = 0;
obj6545_onTap_actionGroup0();
});










/*
 *
 *   obj6547: Event Touch Down
 *
 */
$("#obj6547").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6547_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6547_onTap is still running");
	return;
}
var obj6547_onTap_runningActionsCount = 0;
var obj6547_onTap_loopCount = 0;
obj6547_onTap_actionGroup0();
});










/*
 *
 *   obj6549: Event Touch Down
 *
 */
$("#obj6549").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6549_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6549_onTap is still running");
	return;
}
var obj6549_onTap_runningActionsCount = 0;
var obj6549_onTap_loopCount = 0;
obj6549_onTap_actionGroup0();
});










/*
 *
 *   obj6551: Event Touch Down
 *
 */
$("#obj6551").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6551_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6551_onTap is still running");
	return;
}
var obj6551_onTap_runningActionsCount = 0;
var obj6551_onTap_loopCount = 0;
obj6551_onTap_actionGroup0();
});










/*
 *
 *   obj6553: Event Touch Down
 *
 */
$("#obj6553").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6553_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6553_onTap is still running");
	return;
}
var obj6553_onTap_runningActionsCount = 0;
var obj6553_onTap_loopCount = 0;
obj6553_onTap_actionGroup0();
});




















/*
 *
 *   obj6557: Event Touch Down
 *
 */
$("#obj6557").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6557_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6557_onTap is still running");
	return;
}
var obj6557_onTap_runningActionsCount = 0;
var obj6557_onTap_loopCount = 0;
obj6557_onTap_actionGroup0();
});




















/*
 *
 *   obj6561: Event Touch Down
 *
 */
$("#obj6561").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6561_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6561_onTap is still running");
	return;
}
var obj6561_onTap_runningActionsCount = 0;
var obj6561_onTap_loopCount = 0;
obj6561_onTap_actionGroup0();
});










/*
 *
 *   obj6563: Event Touch Down
 *
 */
$("#obj6563").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6563_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6563_onTap is still running");
	return;
}
var obj6563_onTap_runningActionsCount = 0;
var obj6563_onTap_loopCount = 0;
obj6563_onTap_actionGroup0();
});










/*
 *
 *   obj6565: Event Touch Down
 *
 */
$("#obj6565").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6565_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6565_onTap is still running");
	return;
}
var obj6565_onTap_runningActionsCount = 0;
var obj6565_onTap_loopCount = 0;
obj6565_onTap_actionGroup0();
});










/*
 *
 *   obj6567: Event Touch Down
 *
 */
$("#obj6567").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6567_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6567_onTap is still running");
	return;
}
var obj6567_onTap_runningActionsCount = 0;
var obj6567_onTap_loopCount = 0;
obj6567_onTap_actionGroup0();
});










/*
 *
 *   obj6569: Event Touch Down
 *
 */
$("#obj6569").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6569_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6569_onTap is still running");
	return;
}
var obj6569_onTap_runningActionsCount = 0;
var obj6569_onTap_loopCount = 0;
obj6569_onTap_actionGroup0();
});




















/*
 *
 *   obj6573: Event Touch Down
 *
 */
$("#obj6573").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6573_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6573_onTap is still running");
	return;
}
var obj6573_onTap_runningActionsCount = 0;
var obj6573_onTap_loopCount = 0;
obj6573_onTap_actionGroup0();
});




















/*
 *
 *   obj6577: Event Touch Down
 *
 */
$("#obj6577").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6577_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6577_onTap is still running");
	return;
}
var obj6577_onTap_runningActionsCount = 0;
var obj6577_onTap_loopCount = 0;
obj6577_onTap_actionGroup0();
});










/*
 *
 *   obj6579: Event Touch Down
 *
 */
$("#obj6579").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6579_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6579_onTap is still running");
	return;
}
var obj6579_onTap_runningActionsCount = 0;
var obj6579_onTap_loopCount = 0;
obj6579_onTap_actionGroup0();
});










/*
 *
 *   obj6581: Event Touch Down
 *
 */
$("#obj6581").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6581_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6581_onTap is still running");
	return;
}
var obj6581_onTap_runningActionsCount = 0;
var obj6581_onTap_loopCount = 0;
obj6581_onTap_actionGroup0();
});










/*
 *
 *   obj6583: Event Touch Down
 *
 */
$("#obj6583").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6583_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6583_onTap is still running");
	return;
}
var obj6583_onTap_runningActionsCount = 0;
var obj6583_onTap_loopCount = 0;
obj6583_onTap_actionGroup0();
});










/*
 *
 *   obj6585: Event Touch Down
 *
 */
$("#obj6585").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6585_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6585_onTap is still running");
	return;
}
var obj6585_onTap_runningActionsCount = 0;
var obj6585_onTap_loopCount = 0;
obj6585_onTap_actionGroup0();
});




















/*
 *
 *   obj6589: Event Touch Down
 *
 */
$("#obj6589").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6589_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6589_onTap is still running");
	return;
}
var obj6589_onTap_runningActionsCount = 0;
var obj6589_onTap_loopCount = 0;
obj6589_onTap_actionGroup0();
});




















/*
 *
 *   obj6593: Event Touch Down
 *
 */
$("#obj6593").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6593_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6593_onTap is still running");
	return;
}
var obj6593_onTap_runningActionsCount = 0;
var obj6593_onTap_loopCount = 0;
obj6593_onTap_actionGroup0();
});










/*
 *
 *   obj6595: Event Touch Down
 *
 */
$("#obj6595").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6595_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6595_onTap is still running");
	return;
}
var obj6595_onTap_runningActionsCount = 0;
var obj6595_onTap_loopCount = 0;
obj6595_onTap_actionGroup0();
});










/*
 *
 *   obj6597: Event Touch Down
 *
 */
$("#obj6597").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6597_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6597_onTap is still running");
	return;
}
var obj6597_onTap_runningActionsCount = 0;
var obj6597_onTap_loopCount = 0;
obj6597_onTap_actionGroup0();
});










/*
 *
 *   obj6599: Event Touch Down
 *
 */
$("#obj6599").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6599_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6599_onTap is still running");
	return;
}
var obj6599_onTap_runningActionsCount = 0;
var obj6599_onTap_loopCount = 0;
obj6599_onTap_actionGroup0();
});










/*
 *
 *   obj6601: Event Touch Down
 *
 */
$("#obj6601").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6601_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6601_onTap is still running");
	return;
}
var obj6601_onTap_runningActionsCount = 0;
var obj6601_onTap_loopCount = 0;
obj6601_onTap_actionGroup0();
});




















/*
 *
 *   obj6605: Event Touch Down
 *
 */
$("#obj6605").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6605_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6605_onTap is still running");
	return;
}
var obj6605_onTap_runningActionsCount = 0;
var obj6605_onTap_loopCount = 0;
obj6605_onTap_actionGroup0();
});










/*
 *
 *   obj6607: Event Touch Down
 *
 */
$("#obj6607").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6607_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6607_onTap is still running");
	return;
}
var obj6607_onTap_runningActionsCount = 0;
var obj6607_onTap_loopCount = 0;
obj6607_onTap_actionGroup0();
});




























































/*
 *
 *   obj6619: Event Touch Down
 *
 */
$("#obj6619").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6619_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6619_onTap is still running");
	return;
}
var obj6619_onTap_runningActionsCount = 0;
var obj6619_onTap_loopCount = 0;
obj6619_onTap_actionGroup0();
});














































































































/*
 *
 *   obj65070: Event Touch Down
 *
 */
$("#obj65070").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65070_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65070_onTap is still running");
	return;
}
var obj65070_onTap_runningActionsCount = 0;
var obj65070_onTap_loopCount = 0;
obj65070_onTap_actionGroup0();
});










/*
 *
 *   obj65062: Event Touch Down
 *
 */
$("#obj65062").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65062_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65062_onTap is still running");
	return;
}
var obj65062_onTap_runningActionsCount = 0;
var obj65062_onTap_loopCount = 0;
obj65062_onTap_actionGroup0();
});










/*
 *
 *   obj86865: Event Touch Down
 *
 */
$("#obj86865").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86865_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86865_onTap is still running");
	return;
}
var obj86865_onTap_runningActionsCount = 0;
var obj86865_onTap_loopCount = 0;
obj86865_onTap_actionGroup0();
});










/*
 *
 *   obj86860: Event Touch Down
 *
 */
$("#obj86860").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86860_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86860_onTap is still running");
	return;
}
var obj86860_onTap_runningActionsCount = 0;
var obj86860_onTap_loopCount = 0;
obj86860_onTap_actionGroup0();
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
	
$("#obj121").trigger('SCEventShow');
$("#obj140").trigger('SCEventShow');
$("#obj143").trigger('SCEventShow');
$("#obj136").trigger('SCEventShow');
$("#obj152").trigger('SCEventShow');
$("#obj165").trigger('SCEventShow');
$("#obj158").trigger('SCEventShow');
$("#obj169").trigger('SCEventShow');
$("#obj718").trigger('SCEventShow');
$("#obj6397").trigger('SCEventShow');
$("#obj6399").trigger('SCEventShow');
$("#obj6401").trigger('SCEventShow');
$("#obj6403").trigger('SCEventShow');
$("#obj6405").trigger('SCEventShow');
$("#obj6407").trigger('SCEventShow');
$("#obj6409").trigger('SCEventShow');
$("#obj6411").trigger('SCEventShow');
$("#obj6413").trigger('SCEventShow');
$("#obj6415").trigger('SCEventShow');
$("#obj6417").trigger('SCEventShow');
$("#obj6419").trigger('SCEventShow');
$("#obj6421").trigger('SCEventShow');
$("#obj6423").trigger('SCEventShow');
$("#obj6425").trigger('SCEventShow');
$("#obj6427").trigger('SCEventShow');
$("#obj6429").trigger('SCEventShow');
$("#obj6431").trigger('SCEventShow');
$("#obj6433").trigger('SCEventShow');
$("#obj6435").trigger('SCEventShow');
$("#obj6437").trigger('SCEventShow');
$("#obj6439").trigger('SCEventShow');
$("#obj6441").trigger('SCEventShow');
$("#obj6443").trigger('SCEventShow');
$("#obj6445").trigger('SCEventShow');
$("#obj6447").trigger('SCEventShow');
$("#obj6449").trigger('SCEventShow');
$("#obj6451").trigger('SCEventShow');
$("#obj6453").trigger('SCEventShow');
$("#obj6455").trigger('SCEventShow');
$("#obj6457").trigger('SCEventShow');
$("#obj6459").trigger('SCEventShow');
$("#obj6461").trigger('SCEventShow');
$("#obj6463").trigger('SCEventShow');
$("#obj6465").trigger('SCEventShow');
$("#obj6467").trigger('SCEventShow');
$("#obj6469").trigger('SCEventShow');
$("#obj6471").trigger('SCEventShow');
$("#obj6473").trigger('SCEventShow');
$("#obj6475").trigger('SCEventShow');
$("#obj6477").trigger('SCEventShow');
$("#obj6479").trigger('SCEventShow');
$("#obj6481").trigger('SCEventShow');
$("#obj6483").trigger('SCEventShow');
$("#obj6485").trigger('SCEventShow');
$("#obj6487").trigger('SCEventShow');
$("#obj6489").trigger('SCEventShow');
$("#obj6491").trigger('SCEventShow');
$("#obj6493").trigger('SCEventShow');
$("#obj6495").trigger('SCEventShow');
$("#obj6497").trigger('SCEventShow');
$("#obj6499").trigger('SCEventShow');
$("#obj6501").trigger('SCEventShow');
$("#obj6503").trigger('SCEventShow');
$("#obj6505").trigger('SCEventShow');
$("#obj6507").trigger('SCEventShow');
$("#obj6509").trigger('SCEventShow');
$("#obj6511").trigger('SCEventShow');
$("#obj6513").trigger('SCEventShow');
$("#obj6515").trigger('SCEventShow');
$("#obj6517").trigger('SCEventShow');
$("#obj6519").trigger('SCEventShow');
$("#obj6521").trigger('SCEventShow');
$("#obj6523").trigger('SCEventShow');
$("#obj6525").trigger('SCEventShow');
$("#obj6527").trigger('SCEventShow');
$("#obj6529").trigger('SCEventShow');
$("#obj6531").trigger('SCEventShow');
$("#obj6533").trigger('SCEventShow');
$("#obj6535").trigger('SCEventShow');
$("#obj6537").trigger('SCEventShow');
$("#obj6539").trigger('SCEventShow');
$("#obj6541").trigger('SCEventShow');
$("#obj6543").trigger('SCEventShow');
$("#obj6545").trigger('SCEventShow');
$("#obj6547").trigger('SCEventShow');
$("#obj6549").trigger('SCEventShow');
$("#obj6551").trigger('SCEventShow');
$("#obj6553").trigger('SCEventShow');
$("#obj6555").trigger('SCEventShow');
$("#obj6557").trigger('SCEventShow');
$("#obj6559").trigger('SCEventShow');
$("#obj6561").trigger('SCEventShow');
$("#obj6563").trigger('SCEventShow');
$("#obj6565").trigger('SCEventShow');
$("#obj6567").trigger('SCEventShow');
$("#obj6569").trigger('SCEventShow');
$("#obj6571").trigger('SCEventShow');
$("#obj6573").trigger('SCEventShow');
$("#obj6575").trigger('SCEventShow');
$("#obj6577").trigger('SCEventShow');
$("#obj6579").trigger('SCEventShow');
$("#obj6581").trigger('SCEventShow');
$("#obj6583").trigger('SCEventShow');
$("#obj6585").trigger('SCEventShow');
$("#obj6587").trigger('SCEventShow');
$("#obj6589").trigger('SCEventShow');
$("#obj6591").trigger('SCEventShow');
$("#obj6593").trigger('SCEventShow');
$("#obj6595").trigger('SCEventShow');
$("#obj6597").trigger('SCEventShow');
$("#obj6599").trigger('SCEventShow');
$("#obj6601").trigger('SCEventShow');
$("#obj6603").trigger('SCEventShow');
$("#obj6605").trigger('SCEventShow');
$("#obj6607").trigger('SCEventShow');
$("#obj6609").trigger('SCEventShow');
$("#obj6611").trigger('SCEventShow');
$("#obj6613").trigger('SCEventShow');
$("#obj6615").trigger('SCEventShow');
$("#obj6617").trigger('SCEventShow');
$("#obj6619").trigger('SCEventShow');
$("#obj6637").trigger('SCEventShow');
$("#obj6639").trigger('SCEventShow');
$("#obj6643").trigger('SCEventShow');
$("#obj6641").trigger('SCEventShow');
$("#obj6645").trigger('SCEventShow');
$("#obj6647").trigger('SCEventShow');
$("#obj6649").trigger('SCEventShow');
$("#obj6651").trigger('SCEventShow');
$("#obj6661").trigger('SCEventShow');
$("#obj6662").trigger('SCEventShow');
$("#obj65070").trigger('SCEventShow');
$("#obj65062").trigger('SCEventShow');
$("#obj86865").trigger('SCEventShow');
$("#obj86860").trigger('SCEventShow');
$("#obj86870").trigger('SCEventShow');
$("#obj92074").trigger('SCEventShow');
$("#obj94643").trigger('SCEventShow');
$("#obj65076").trigger('SCEventShow');
	
});