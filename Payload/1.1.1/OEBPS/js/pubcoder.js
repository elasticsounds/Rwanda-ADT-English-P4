var pubcoder = {
	project: {
		id : "",
		title : "",
        assessments : {"count":0,"items":[],"pagesCount":209,"questions":0,"signature":"n7ExRARX5Z5y0Fc11LOklc5OFDQH4sS1YJC5y3MyFQ4=","version":1},
        pixelsDensity: 2
	},
	page: {
		id : "",
		title : "",
		alias : ""
	},
	objects: {},
	controllers: {
		get: function(ref) {
			if (ref instanceof Node) {
				return pubcoder.controllers.all[$(ref).attr("id")];
			} else {
				return pubcoder.controllers.all[ref];
			}
		},
		getAll: function() {
			return _(pubcoder.controllers.all).values();
		},
		all: {}
	},
	
	pages: {
		
"page3": "../1/page.xhtml", 
"page96053": "../2/page.xhtml", 
"page96054": "../3/page.xhtml", 
"page93319": "../4/page.xhtml", 
"page59": "../5/page.xhtml", 
"page86": "../6/page.xhtml", 
"page120": "../7/page.xhtml", 
"page720": "../8/page.xhtml", 
"page760": "../9/page.xhtml", 
"page1107": "../10/page.xhtml", 
"page1143": "../11/page.xhtml", 
"page1734": "../12/page.xhtml", 
"page1863": "../13/page.xhtml", 
"page2127": "../14/page.xhtml", 
"page2161": "../15/page.xhtml", 
"page2463": "../16/page.xhtml", 
"page2490": "../17/page.xhtml", 
"page2774": "../18/page.xhtml", 
"page2829": "../19/page.xhtml", 
"page2890": "../20/page.xhtml", 
"page3389": "../21/page.xhtml", 
"page3454": "../22/page.xhtml", 
"page4089": "../23/page.xhtml", 
"page4132": "../24/page.xhtml", 
"page4158": "../25/page.xhtml", 
"page4633": "../26/page.xhtml", 
"page4664": "../27/page.xhtml", 
"page5159": "../28/page.xhtml", 
"page5347": "../29/page.xhtml", 
"page5375": "../30/page.xhtml", 
"page5813": "../31/page.xhtml", 
"page6071": "../32/page.xhtml", 
"page6875": "../33/page.xhtml", 
"page6919": "../34/page.xhtml", 
"page7441": "../35/page.xhtml", 
"page7472": "../36/page.xhtml", 
"page7610": "../37/page.xhtml", 
"page8009": "../38/page.xhtml", 
"page8050": "../39/page.xhtml", 
"page8078": "../40/page.xhtml", 
"page8441": "../41/page.xhtml", 
"page8473": "../42/page.xhtml", 
"page8973": "../43/page.xhtml", 
"page9017": "../44/page.xhtml", 
"page9497": "../45/page.xhtml", 
"page10038": "../46/page.xhtml", 
"page10145": "../47/page.xhtml", 
"page10633": "../48/page.xhtml", 
"page11027": "../49/page.xhtml", 
"page11112": "../50/page.xhtml", 
"page11161": "../51/page.xhtml", 
"page11200": "../52/page.xhtml", 
"page12117": "../53/page.xhtml", 
"page12156": "../54/page.xhtml", 
"page12182": "../55/page.xhtml", 
"page14581": "../56/page.xhtml", 
"page14630": "../57/page.xhtml", 
"page14681": "../58/page.xhtml", 
"page15197": "../59/page.xhtml", 
"page15277": "../60/page.xhtml", 
"page15307": "../61/page.xhtml", 
"page15341": "../62/page.xhtml", 
"page15374": "../63/page.xhtml", 
"page15416": "../64/page.xhtml", 
"page17543": "../65/page.xhtml", 
"page17572": "../66/page.xhtml", 
"page17728": "../67/page.xhtml", 
"page17873": "../68/page.xhtml", 
"page17922": "../69/page.xhtml", 
"page17949": "../70/page.xhtml", 
"page17977": "../71/page.xhtml", 
"page18242": "../72/page.xhtml", 
"page18322": "../73/page.xhtml", 
"page18366": "../74/page.xhtml", 
"page18546": "../75/page.xhtml", 
"page18547": "../76/page.xhtml", 
"page20091": "../77/page.xhtml", 
"page20128": "../78/page.xhtml", 
"page20246": "../79/page.xhtml", 
"page21673": "../80/page.xhtml", 
"page21736": "../81/page.xhtml", 
"page21764": "../82/page.xhtml", 
"page21944": "../83/page.xhtml", 
"page22024": "../84/page.xhtml", 
"page22054": "../85/page.xhtml", 
"page22615": "../86/page.xhtml", 
"page22649": "../87/page.xhtml", 
"page22683": "../88/page.xhtml", 
"page23041": "../89/page.xhtml", 
"page23511": "../90/page.xhtml", 
"page23887": "../91/page.xhtml", 
"page23968": "../92/page.xhtml", 
"page24000": "../93/page.xhtml", 
"page24032": "../94/page.xhtml", 
"page24731": "../95/page.xhtml", 
"page24911": "../96/page.xhtml", 
"page24990": "../97/page.xhtml", 
"page25281": "../98/page.xhtml", 
"page25362": "../99/page.xhtml", 
"page25423": "../100/page.xhtml", 
"page25669": "../101/page.xhtml", 
"page25849": "../102/page.xhtml", 
"page25930": "../103/page.xhtml", 
"page28632": "../104/page.xhtml", 
"page29125": "../105/page.xhtml", 
"page29169": "../106/page.xhtml", 
"page29206": "../107/page.xhtml", 
"page29545": "../108/page.xhtml", 
"page29589": "../109/page.xhtml", 
"page31645": "../110/page.xhtml", 
"page31678": "../111/page.xhtml", 
"page31870": "../112/page.xhtml", 
"page32330": "../113/page.xhtml", 
"page33101": "../114/page.xhtml", 
"page33182": "../115/page.xhtml", 
"page33214": "../116/page.xhtml", 
"page33480": "../117/page.xhtml", 
"page33530": "../118/page.xhtml", 
"page34114": "../119/page.xhtml", 
"page34146": "../120/page.xhtml", 
"page35498": "../121/page.xhtml", 
"page35682": "../122/page.xhtml", 
"page35711": "../123/page.xhtml", 
"page35903": "../124/page.xhtml", 
"page37755": "../125/page.xhtml", 
"page37836": "../126/page.xhtml", 
"page37878": "../127/page.xhtml", 
"page37911": "../128/page.xhtml", 
"page38281": "../129/page.xhtml", 
"page38842": "../130/page.xhtml", 
"page38923": "../131/page.xhtml", 
"page38968": "../132/page.xhtml", 
"page39641": "../133/page.xhtml", 
"page39675": "../134/page.xhtml", 
"page39709": "../135/page.xhtml", 
"page40749": "../136/page.xhtml", 
"page40780": "../137/page.xhtml", 
"page40811": "../138/page.xhtml", 
"page41534": "../139/page.xhtml", 
"page41565": "../140/page.xhtml", 
"page41748": "../141/page.xhtml", 
"page41776": "../142/page.xhtml", 
"page41985": "../143/page.xhtml", 
"page42018": "../144/page.xhtml", 
"page42095": "../145/page.xhtml", 
"page42808": "../146/page.xhtml", 
"page43506": "../147/page.xhtml", 
"page43541": "../148/page.xhtml", 
"page43565": "../149/page.xhtml", 
"page43745": "../150/page.xhtml", 
"page43779": "../151/page.xhtml", 
"page44268": "../152/page.xhtml", 
"page45245": "../153/page.xhtml", 
"page45597": "../154/page.xhtml", 
"page45678": "../155/page.xhtml", 
"page45712": "../156/page.xhtml", 
"page45994": "../157/page.xhtml", 
"page46077": "../158/page.xhtml", 
"page46110": "../159/page.xhtml", 
"page46149": "../160/page.xhtml", 
"page46183": "../161/page.xhtml", 
"page46209": "../162/page.xhtml", 
"page46478": "../163/page.xhtml", 
"page46562": "../164/page.xhtml", 
"page46639": "../165/page.xhtml", 
"page47220": "../166/page.xhtml", 
"page47257": "../167/page.xhtml", 
"page47282": "../168/page.xhtml", 
"page47548": "../169/page.xhtml", 
"page47652": "../170/page.xhtml", 
"page47851": "../171/page.xhtml", 
"page48723": "../172/page.xhtml", 
"page48759": "../173/page.xhtml", 
"page48788": "../174/page.xhtml", 
"page48920": "../175/page.xhtml", 
"page49109": "../176/page.xhtml", 
"page49151": "../177/page.xhtml", 
"page49337": "../178/page.xhtml", 
"page49460": "../179/page.xhtml", 
"page49493": "../180/page.xhtml", 
"page49526": "../181/page.xhtml", 
"page49608": "../182/page.xhtml", 
"page51600": "../183/page.xhtml", 
"page51639": "../184/page.xhtml", 
"page51664": "../185/page.xhtml", 
"page52087": "../186/page.xhtml", 
"page52215": "../187/page.xhtml", 
"page53069": "../188/page.xhtml", 
"page53396": "../189/page.xhtml", 
"page53433": "../190/page.xhtml", 
"page53461": "../191/page.xhtml", 
"page53489": "../192/page.xhtml", 
"page53559": "../193/page.xhtml", 
"page53973": "../194/page.xhtml", 
"page54015": "../195/page.xhtml", 
"page54409": "../196/page.xhtml", 
"page54912": "../197/page.xhtml", 
"page54941": "../198/page.xhtml", 
"page54975": "../199/page.xhtml", 
"page55241": "../200/page.xhtml", 
"page55427": "../201/page.xhtml", 
"page55461": "../202/page.xhtml", 
"page55743": "../203/page.xhtml", 
"page55824": "../204/page.xhtml", 
"page55858": "../205/page.xhtml", 
"page55886": "../206/page.xhtml", 
"page56069": "../207/page.xhtml", 
"page56150": "../208/page.xhtml", 
"page96127": "../209/page.xhtml", 
	},
	getPageCount: function() {
		return Object.keys(pubcoder.pages).length;
	},
	
	events: {
		Run: 'SCEventRun', run: 'SCEventRun',
		Shake: 'SCEventShake', shake: 'SCEventShake',
		Show: 'SCEventShow', show: 'SCEventShow',
		Appear: 'SCEventAppear', appear: 'SCEventAppear',
		Disappear: 'SCEventDisappear', disappear: 'SCEventDisappear',
		SwipeDown: 'SCswipedown', swipeDown: 'SCswipedown',
		SwipeLeft: 'SCswipeleft', swipeLeft: 'SCswipeleft',
		SwipeRight: 'SCswiperight', swipeRight: 'SCswiperight',
		SwipeUp: 'SCswipeup', swipeUp: 'SCswipeup',
		PinchClose: "pinchin", pinchClose: "pinchin",
		PinchOpen: "pinchout", pinchOpen: "pinchout",
		Tap: 'click', tap: 'click',
		DoubleTap: "doubletap", doubleTap: "doubletap",
		Press: "press", press: "press",
		TouchDown: "mousedown", touchDown: "mousedown",
		TouchUp: "mouseup", touchUp: "mouseup",
		PageLoad: 'SCEventPageLoad', pageLoad: 'SCEventPageLoad',
		PagePlay: 'SCEventPagePlay', pagePlay: 'SCEventPagePlay',
		PageReady: 'SCEventPageReady', pageReady: 'SCEventPageReady'
	},
	queuedEvents: [],
	isActionListRunning: function(targetObjectId, actionListHandler) {
		var activeActionGroupIndexVarName = "obj" + targetObjectId + "_" + actionListHandler + "_activeActionGroupIndex";
		// console.warn(activeActionGroupIndexVarName, window[activeActionGroupIndexVarName]);
		return (window[activeActionGroupIndexVarName] != undefined && window[activeActionGroupIndexVarName] != -1);
	},
	isAndroidReader: false, // legacy reader, was: (typeof(Android) !== "undefined" || navigator.userAgent.indexOf("pubcoderReaderAndroidUA") > -1),
	isAndroid: (navigator.userAgent.toLowerCase().indexOf("android") > -1),
	isQuickPreview: false,
	isInteractionObserverSupported: ('IntersectionObserver' in window),
	
	Accelerometer: {
		Enabled: true,
		X: 0,
		Y: 0
	},
	call: function (methodName, methodParameters) {
		pubcoder.callID++;
		document.title = JSON.stringify ({"method" : methodName, "params" : methodParameters, "id" : pubcoder.callID} );
		setTimeout(function() { document.title = ' '; }, 1);
	},
	callID: 0,
	alert: function (alertTitle, alertText) {
		if (typeof(alertText) == "undefined") {
			$("#SCDefaultAlertTitle").hide();
			alertText = alertTitle;
			alertTitle = "";
		} else {
			$("#SCDefaultAlertTitle").show();
		}
		$("#SCDefaultAlertTitle").html(alertTitle);
		$("#SCDefaultAlertMsg").html(alertText);
		try {
			$('[data-remodal-id=SCDefaultAlert]').remodal().open();
		} catch (e) {
			// for modals opened too early, wait and retry
			setTimeout(function() { pubcoder.alert(alertTitle, alertText) }, 1000);
		}
	},
	confirm: function (title, text, confirmLabel, cancelLabel, callback) {
		if (typeof(text) == null) {
			$("#SCDefaultConfirmDialogTitle").hide();
			text = title;
			title = "";
		} else {
			$("#SCDefaultConfirmDialogTitle").show();
		}
		$("#SCDefaultConfirmDialogTitle").html(title);
		$("#SCDefaultConfirmDialogMsg").html(text);
		$("#SCDefaultConfirmDialogTitleConfirmBtn").html(confirmLabel);
		$("#SCDefaultConfirmDialogTitleCancelBtn").html(cancelLabel);
		try {
			$(document).on('confirmation', '.remodal', function () {
				$(document).off('confirmation', '.remodal');
				$(document).off('cancellation', '.remodal');
				callback(true);
			});
			$(document).on('cancellation', '.remodal', function () {
				$(document).off('confirmation', '.remodal');
				$(document).off('cancellation', '.remodal');
				callback(false);
			});
			$('[data-remodal-id=SCDefaultConfirmDialog]').remodal().open();
		} catch (e) {
			// for modals opened too early, wait and retry
			setTimeout(function() { PubCoder.confirm(title, text, confirmLabel, cancelLabel, callback) }, 1000);
		}
	},
	getCurrentPageNumber: function () {
		var locPieces = window.location.href.split("/");
		return (locPieces[locPieces.length-2]);
	},
	getObjectWithId: function (objID) {
		// this returns the JQuery object, regardless of the objID parameter being "obj4" or "#obj4" or $("#obj4")
		if (typeof objID == "string" && objID.indexOf("#") != 0) objID = "#" + objID;
		return $("#" + $(objID).attr("id"));
	},
	getObjectsWithClass: function (className) {
		return $("." + className);
	},
	getPageObjectsWithClass: function (className) {
		return $(".SCContent ." + className);
	},
	getOverlayObjectsWithClass: function (className) {
		return $(".SCOverlay ." + className);
	},
	getLayers: function(containerName) {
		var layers = $("." + containerName + ">.SCPageObject");
		layers.sort(function(a, b) {
		    a = parseInt($(a).css("z-index"));
		    b = parseInt($(b).css("z-index"));
		    if (a == b) { return 0; }
		    if (a > b) {
		        return 1;
		    } else {
		        return -1;
		    }
		});
		return layers;
	},
	moveLayer: function(containerName, sourceIndex, destIndex) {
		var layers = this.getLayers(containerName);
		var layersNew = layers.slice(0);
		var objToMove = layersNew[sourceIndex];
		layersNew.splice(sourceIndex, 1);
		layersNew.splice(destIndex, 0, objToMove);
		for (var i = layers.length - 1; i >= 0; i--) {
			var attr = $(layers[i]).attr("data-SCPageObject-InitialLayer")
			if (typeof attr == typeof undefined) $(layers[i]).attr("data-SCPageObject-InitialLayer", i.toString())
			layers[i] = $(layers[i]).css("z-index");
		};
		for (var i = layers.length - 1; i >= 0; i--) {
			$(layersNew[i]).css("z-index", layers[i]);
		};
	},
	getPageObjectContainerName: function(obj) {
		var objParent = obj.parent();
		var knownContainers = ["SCContent", "SCOverlay", "SCContentOverlay", "SCContentUnderlay"];
		for (var i = knownContainers.length - 1; i >= 0; i--) {
			if (objParent.hasClass(knownContainers[i])) return knownContainers[i];
		};
		return null;
	},
	bringPageObjectToFront: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i < 0) return;
		if (i >= layers.length-1) return;
		this.moveLayer(containerName, i, layers.length-1);
	},
	bringPageObjectForward: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i < 0) return;
		if (i >= layers.length-1) return;
		this.moveLayer(containerName, i, i+1);
	},
	sendPageObjectBackward: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i <= 0) return;
		this.moveLayer(containerName, i, i-1);
	},
	sendPageObjectToBack: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		if (i <= 0) return;
		this.moveLayer(containerName, i, 0);
	},
	bringPageObjectToInitialLayer: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		var containerName = this.getPageObjectContainerName(obj);
		var layers = this.getLayers(containerName);
		var i = layers.index(obj);
		var attr = $(layers[i]).attr("data-SCPageObject-InitialLayer");
		if (typeof attr == typeof undefined) return
		this.moveLayer(containerName, i, parseInt(attr));
	},
	getCounterValue: function(obj) {
		obj = pubcoder.getObjectWithId(obj);
		return eval("window." + $(obj).attr("id") + "_counterValue");
	},
	switchText: function(obj, newText) {
		obj = pubcoder.getObjectWithId(obj);
		if (newText.indexOf("<") < 0) newText = "<p>" + newText + "</p>";
		var objContent = $("#" + obj.attr("id") + "_content");
		$(objContent).html(newText);
	},
	goToPage: function(pageNumber) {
		pubcoder.openUrl("../" + pageNumber + "/page.xhtml", false);
	},
	openUrl: function (url, openInBrowser) {
		if (window.XPUB != undefined) {
			window.XPUB.openUrl(url, openInBrowser);
		} else if (openInBrowser) {
			window.open(url);
		} else {
			window.location = url;
		}
	},
	setObjectOpacityWhileScrolling: function (obj, initialOpacityValue, finalOpacityValue, startY, endY, container) {
		targetObject = pubcoder.getObjectWithId(obj);
		if (typeof(container) === "undefined" || container == "") {
			container = $(".SCContent")[0];
		} else {
			container = pubcoder.getObjectWithId(container)[0];
		}
		var opacity = initialOpacityValue;
		var y = container.scrollTop;
		if (y <= startY) {
			opacity = initialOpacityValue;
		} else if (endY > 0 && y >= endY) {
			opacity = finalOpacityValue;
		} else {
			if (endY <= 0) {
				endY = container.scrollHeight - parseInt(window.getComputedStyle(container).height);
			}
			var delta = finalOpacityValue - initialOpacityValue;
			opacity = initialOpacityValue + delta * (y-startY)/(endY-startY);
		}
		targetObject.css("opacity", opacity);
	},
	moveObjectWhileScrolling: function (obj, initialPosition, finalPosition, startY, endY, container) {
		targetObject = pubcoder.getObjectWithId(obj);
		if (typeof(container) === "undefined" || container == "") {
			container = $(".SCContent")[0];
		} else {
			container = pubcoder.getObjectWithId(container)[0];
		}
		// console.warn(container);
		var position = initialPosition;
		var y = container.scrollTop;
		if (y <= startY) {
			position = initialPosition;
		} else if (endY > 0 && y >= endY) {
			position = finalPosition;
		} else {
			if (endY <= 0) {
				endY = container.scrollHeight - parseInt(window.getComputedStyle(container).height);
			}
			var delta = {
				left: finalPosition.left - initialPosition.left,
				top: finalPosition.top - initialPosition.top,
			}
			position = {
				left: initialPosition.left + delta.left * (y-startY)/(endY-startY),
				top: initialPosition.top + delta.top * (y-startY)/(endY-startY)
			}
		}
		targetObject.css("left", position.left + "px");
		targetObject.css("top", position.top + "px");
	},
	scaleObjectWhileScrolling: function (obj, initialScale, finalScale, startY, endY, container) {
		targetObject = pubcoder.getObjectWithId(obj);
		if (typeof(container) === "undefined" || container == "") {
			container = $(".SCContent")[0];
		} else {
			container = pubcoder.getObjectWithId(container)[0];
		}
		const t = pubcoder.getObjectTransform(targetObject[0]);
		var scale = initialScale;
		var y = container.scrollTop;
		if (y <= startY) {
			scale = initialScale;
		} else if (endY > 0 && y >= endY) {
			scale = finalScale;
		} else {
			if (endY <= 0) {
				endY = container.scrollHeight - parseInt(window.getComputedStyle(container).height);
			}
			var delta = {
				x: finalScale.x - initialScale.x,
				y: finalScale.y - initialScale.y
			}
			scale = {
				x: initialScale.x + delta.x * (y-startY)/(endY-startY),
				y: initialScale.y + delta.y * (y-startY)/(endY-startY)
			}
		}
		pubcoder.setObjectTransform(targetObject[0], t.rotation, scale.x, scale.y);
	},
	rotateObjectWhileScrolling: function (obj, initialRotation, finalRotation, startY, endY, container) {
		targetObject = pubcoder.getObjectWithId(obj);
		if (typeof(container) === "undefined" || container == "") {
			container = $(".SCContent")[0];
		} else {
			container = pubcoder.getObjectWithId(container)[0];
		}
		const t = pubcoder.getObjectTransform(targetObject[0]);
		var rotation = initialRotation;
		var y = container.scrollTop;
		if (y <= startY) {
			rotation = initialRotation;
		} else if (endY > 0 && y >= endY) {
			rotation = finalScale;
		} else {
			if (endY <= 0) {
				endY = container.scrollHeight - parseInt(window.getComputedStyle(container).height);
			}
			var delta = finalRotation - initialRotation;
			rotation = initialRotation + delta * (y-startY)/(endY-startY);
		}
		pubcoder.setObjectTransform(targetObject[0], rotation, t.scaleX, t.scaleY);
	},
	getObjectTransform: function (element) {
		function extractRotation(matrix) {
			// Extract the rotation value from the matrix
			const radianToDegree = 180 / Math.PI;
			const rotationRad = Math.atan2(matrix.b, matrix.a);
			const rotationDeg = rotationRad * radianToDegree;
			return rotationDeg;
		}
		
		function extractScaleX(matrix) {
			// Extract the horizontal scaling value from the matrix
			const scaleX = Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
			return scaleX;
		}
		function extractScaleY(matrix) {
			// Extract the vertical scaling value from the matrix
			const scaleY = Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d);
			return scaleY;
		}
		// Retrieve the current transform matrix
		const transformMatrix = getComputedStyle(element).transform;
		// Create a DOMMatrix object from the transform matrix
		const matrix = new DOMMatrix(transformMatrix);
	  
		// Extract rotation, scaleX, and scaleY from the matrix
		const rotationDeg = extractRotation(matrix);
		const scaleX = extractScaleX(matrix);
		const scaleY = extractScaleY(matrix);
	  
		// Return an object with the transform values
		return {
		  "rotation": rotationDeg,
		  "scaleX": scaleX,
		  "scaleY": scaleY,
		};
	},
	setObjectTransform: function (element, rotation, scaleX, scaleY) {
		element.style.transform = "rotate(" + rotation +"deg) scale(" + scaleX + ", " + scaleY +")";
	},
	startAnnotationMode: function () {
		if (window.XPUB != undefined) {
			window.XPUB.startAnnotationMode();
		} else {
			$(".SCAnnotationControl").css("display", "block");
			$(".SCAnnotationControl").trigger("SCEventShow");
		}
	},
	stopAnnotationMode: function () {
		if (window.XPUB != undefined) {
			window.XPUB.stopAnnotationMode();
		} else {
			$(".SCAnnotationControl").css("display", "none");
		}
	}
};
pubcoder.Events = pubcoder.events;
var PubCoder = pubcoder;