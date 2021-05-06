$(document).ready(function() {
	var $window = $(window);
	var gridWidth = 200;
	var gridHeight = 100;
	var isDragging = 0;
	var horSector = 0;
	var vertSector = 0;
	var myScroll;
	var layer1speed = 1;
	var layer2speed = .5;
	var trayTracker = 0;
	var trayHeight = 200;
	var layer1Tracker = new Array();
	var activeVideoArray = new Array();
	var photoActive = 0;
	var soundReady = 0;
	var widget1;
	var widget2;
	var widget4;
	var widget3;
	var infoHidden = 1;
	var soundOn = 1;
	var videoCoordinates = [
		[1024, 0, "4y9nq"],
		[1792, 1280, "4y9nq"],
		[0, 3328, "3qy7r"],
		[3072, 2048, "4z4dr"],
		[1024, 2560, "4y9nq"],
		[256, 768, "4y9nq"],
		[2816, 2816, "4y9nq"],
		[2816, 512, "4zm93"],
		[512, 1792, "4yacy"],
		[2304, 3584, "4y9nq"]
	];
	var imageCoordinates = [
		[500, 750, "http://41.media.tumblr.com/9fa84996fd864fc4557f4869f961a932/tumblr_nj6glqMMhX1qa49m9o1_400.jpg"],
		[2092, 780, "http://40.media.tumblr.com/2f0706010d352343a76b14b9696aa298/tumblr_nc39voWvhe1tm8py3o1_400.jpg"],
		[200, 1028, "http://40.media.tumblr.com/5068ac14a7739d5e7c31366cded829dd/tumblr_nc39ujHPFt1tm8py3o1_400.jpg"],
		[2072, 1048, "http://41.media.tumblr.com/c1df410c1986bbc68aeb89ab5c881b02/tumblr_nc39whdFEc1tm8py3o1_400.jpg"],
		[524, 1560, "http://40.media.tumblr.com/2f0706010d352343a76b14b9696aa298/tumblr_nc39voWvhe1tm8py3o1_400.jpg"],
		[956, 2068, "http://40.media.tumblr.com/5068ac14a7739d5e7c31366cded829dd/tumblr_nc39ujHPFt1tm8py3o1_400.jpg"],
		[1816, 1816, "http://41.media.tumblr.com/c1df410c1986bbc68aeb89ab5c881b02/tumblr_nc39whdFEc1tm8py3o1_400.jpg"],
		[816, 1512, "http://40.media.tumblr.com/5068ac14a7739d5e7c31366cded829dd/tumblr_nc39ujHPFt1tm8py3o1_400.jpg"],
		[512, 792, "http://41.media.tumblr.com/c1df410c1986bbc68aeb89ab5c881b02/tumblr_nc39whdFEc1tm8py3o1_400.jpg"],
		[304, 3584, "http://40.media.tumblr.com/2f0706010d352343a76b14b9696aa298/tumblr_nc39voWvhe1tm8py3o1_400.jpg"]
	];
	var loadFirst = [
		[15, 2],
		[0, 2],
		[2, 2],
		[3, 2],
		[4, 2],
		[5, 2],
		[6, 2],
		[7, 2],
		[15, 3],
		[0, 3],
		[1, 3],
		[2, 3],
		[3, 3],
		[4, 3],
		[5, 3],
		[6, 3],
		[7, 3],
		[15, 4],
		[0, 4],
		[1, 4],
		[2, 4],
		[5, 4],
		[6, 4],
		[7, 4],
		[0, 5],
		[1, 5],
		[2, 5],
		[3, 5],
		[4, 5],
		[5, 5],
		[6, 5],
		[7, 5],
		[15, 6],
		[1, 6],
		[3, 6],
		[4, 6],
		[5, 6],
		[6, 6],
		[7, 6]
	];
	var loadFirst2 = [
		[1, 2],
		[2, 2],
		[3, 2],
		[4, 2],
		[5, 2],
		[6, 2],
		[7, 2],
		[3, 3],
		[4, 3],
		[5, 3],
		[6, 3],
		[7, 3],
		[0, 4],
		[1, 4],
		[5, 4],
		[6, 4],
		[7, 4],
		[0, 5],
		[1, 5],
		[2, 5],
		[3, 5],
		[4, 5],
		[5, 5],
		[6, 5],
		[7, 5],
		[0, 6],
		[1, 6],
		[2, 6],
		[3, 6],
		[4, 6],
		[6, 6],
		[7, 6]
	];

	function ScrollFunction(layer) {
		if (soundReady == 4) {
			SetSound();
		}
		var theLayerSpeed = layer1speed;
		for (var i = 1; i < 3; i++) {
			if (i == 2) {
				var theLayerSpeed = layer2speed;
			}
			var horCheck = Math.floor((((myScroll.x / (1 / theLayerSpeed)) * -1) - 500) / 4096);
			var vertCheck = Math.floor((((myScroll.y / (1 / theLayerSpeed)) * -1) - 500) / 4096);
			if (horSector != horCheck) {
				if (horCheck % 2) {
					$("#layer" + i + "x0y0").css({
						"left": 4096 * horCheck
					});
					$("#layer" + i + "x0y1").css({
						"left": 4096 * horCheck
					});
					$("#layer" + i + "x1y0").css({
						"left": 4096 * (horCheck + 1)
					});
					$("#layer" + i + "x1y1").css({
						"left": 4096 * (horCheck + 1)
					});
				} else {
					$("#layer" + i + "x1y0").css({
						"left": 4096 * horCheck
					});
					$("#layer" + i + "x1y1").css({
						"left": 4096 * horCheck
					});
					$("#layer" + i + "x0y0").css({
						"left": 4096 * (horCheck + 1)
					});
					$("#layer" + i + "x0y1").css({
						"left": 4096 * (horCheck + 1)
					});
				}
				horSector = horCheck;
			}
			if (vertSector != vertCheck) {
				if (vertCheck % 2) {
					$("#layer" + i + "x0y0").css({
						"top": 4096 * vertCheck
					});
					$("#layer" + i + "x1y0").css({
						"top": 4096 * vertCheck
					});
					$("#layer" + i + "x0y1").css({
						"top": 4096 * (vertCheck + 1)
					});
					$("#layer" + i + "x1y1").css({
						"top": 4096 * (vertCheck + 1)
					});
				} else {
					$("#layer" + i + "x0y1").css({
						"top": 4096 * vertCheck
					});
					$("#layer" + i + "x1y1").css({
						"top": 4096 * vertCheck
					});
					$("#layer" + i + "x0y0").css({
						"top": 4096 * (vertCheck + 1)
					});
					$("#layer" + i + "x1y0").css({
						"top": 4096 * (vertCheck + 1)
					});
				}
				vertSector = vertCheck;
			}
		};
	}

	function SetSound() {
		var sound1 = 0;
		var sound2 = 0;
		var sound3 = 0;
		var sound4 = 0;
		var soundXIn = parseInt(((myScroll.x + (Math.floor(((myScroll.x * -1)) / 4096) * 4096)) / 4096) * -100) / 50;
		var soundXOut = 2 - ((parseInt(((myScroll.x + (Math.floor(((myScroll.x * -1)) / 4096) * 4096)) / 4096) * -100) / 50));
		var soundYIn = parseInt(((myScroll.y + (Math.floor(((myScroll.y * -1)) / 4096) * 4096)) / 4096) * -100) / 50;
		var soundYOut = 2 - ((parseInt(((myScroll.y + (Math.floor(((myScroll.y * -1)) / 4096) * 4096)) / 4096) * -100) / 50));
		if (myScroll.x + (Math.floor(((myScroll.x * -1)) / 4096) * 4096) > -2048) {
			sound1 = soundXIn;
			sound2 = 1 - soundXIn;
			sound3 = soundXIn;
			sound4 = 1 - soundXIn;
		} else {
			sound1 = soundXOut;
			sound2 = 1 - soundXOut;
			sound3 = soundXOut;
			sound4 = 1 - soundXOut;
		}
		if (myScroll.y + (Math.floor(((myScroll.y * -1)) / 4096) * 4096) > -2048) {
			sound1 += -soundYIn;
			sound2 += -soundYIn;
			sound3 -= 1 - soundYIn;
			sound4 -= 1 - soundYIn;
		} else {
			sound1 += -soundYOut;
			sound2 += -soundYOut;
			sound3 -= 1 - soundYOut;
			sound4 -= 1 - soundYOut;
		}
		widget1.setVolume(sound1);
		widget2.setVolume(sound2);
		widget3.setVolume(sound3);
		widget4.setVolume(sound4);
	}

	function onDragStart() {
		isDragging = 1;
	}

	function onDragEnd() {
		isDragging = 0;
		ScrollFunction();
	}

	function resize() {
		$("#tray").css({
			"visibility": "hidden"
		});
		setTimeout(function() {
			var thumbSize = ($window.width() - (11 * 25)) / 10;
			trayHeight = thumbSize + 50;
			$("#tray").css({
				bottom: (1 - trayTracker) * -trayHeight
			});
			$("#trayButton").css({
				top: -30 + ((1 - trayTracker) * -25)
			});
			$(".thumb").css({
				"width": thumbSize,
				"height": thumbSize
			});
			$("#tray").css({
				"height": thumbSize + 50
			});
			$("#tray").css({
				"height": trayHeight
			});
			$('.thumb').each(function(i, obj) {
				$(obj).css({
					"left": i * thumbSize + (25 * (i + 1))
				});
			});
			$("#tray").css({
				"visibility": "visible"
			});
		}, 100);
	}

	function returnX(xVal) {
		var theX;
		var leftEdge = Math.ceil(myScroll.x / 4096) * 4096;
		var targetRelativeToEdge = leftEdge - xVal;
		if (Math.abs(myScroll.x - targetRelativeToEdge) < (4096 / 2)) {
			theX = leftEdge - xVal;
		} else {
			if (myScroll.x < targetRelativeToEdge) {
				theX = leftEdge - 4096 - xVal;
			} else {
				theX = leftEdge + 4096 - xVal;
			}
		}
		return theX;
	}

	function returnY(yVal) {
		var theY;
		var leftEdge = Math.ceil(myScroll.y / 4096) * 4096;
		var targetRelativeToEdge = leftEdge - yVal;
		if (Math.abs(myScroll.y - targetRelativeToEdge) < (4096 / 2)) {
			theY = leftEdge - yVal;
		} else {
			if (myScroll.y < targetRelativeToEdge) {
				theY = leftEdge - 4096 - yVal;
			} else {
				theY = leftEdge + 4096 - yVal;
			}
		}
		return theY;
	}

	function offsetX(contentWidth) {
		var offsetX = ($window.width() - contentWidth) / 2;
		return offsetX
	}

	function offsetY(contentHeight) {
		var offsetY = (($window.height() - (trayTracker * 165)) - contentHeight) / 2;
		return offsetY
	}

	function SwitchTray() {
		console.log("Tray Switch");
		$("#tray").stop();
		$("#tray").animate({
			bottom: trayTracker * -trayHeight
		}, 200);
		$("#trayButton").animate({
			top: -30 + (trayTracker * -25)
		}, 200);
		trayTracker = 1 - trayTracker;
	}

	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	function initialise() {
		for (var i = 0; i < 16; i++) {
			var arr = new Array();
			for (var j = 0; j < 16; j++) {
				arr.push(1);
			}
			layer1Tracker.push(arr);
		}
		for (var k = 0; k < 4; k++) {
			var theX = 0;
			var theY = 0;
			if (k == 0) {}
			if (k == 1) {
				theX = 1;
			}
			if (k == 2) {
				theY = 1;
			}
			if (k == 3) {
				theX = 1;
				theY = 1;
			}
			$("#layer1").append("<div id='layer1x" + theX + "y" + theY + "' style='position:absolute;left:" + 4096 * theX + "px;top:" + 4096 * theY + "px;width:4096px;height:4096px;'></div>");
			$("#layer2").append("<div id='layer2x" + theX + "y" + theY + "' style='position:absolute;left:" + 4096 * theX + "px;top:" + 4096 * theY + "px;width:4096px;height:4096px;'></div>");
			for (var i = 0; i < loadFirst.length; i++) {
				var imageX = loadFirst[i][0];
				var imageY = loadFirst[i][1];
				$("#layer1x" + theX + "y" + theY).append("<img src='img/map_layer1/4/" + imageX + "/" + imageY + ".png' height='256' width='256' style='position:absolute;top:" + imageY * 256 + "px;left:" + imageX * 256 + "px;height:256px;width:256px;' />");
			}
			for (var i = 0; i < loadFirst2.length; i++) {
				var imageX = loadFirst2[i][0];
				var imageY = loadFirst2[i][1];
				$("#layer2x" + theX + "y" + theY).append("<img src='img/map_layer2/4/" + imageX + "/" + imageY + ".jpg'  height='256' width='256' style='position:absolute;top:" + imageY * 256 + "px;left:" + imageX * 256 + "px;height:256px;width:256px;'/>");
			}
		};
		var imageURLs = [];
		var loadedImages = 0;
		for (var ii = 0; ii < loadFirst.length; ii++) {
			imageURLs[imageURLs.length] = "img/map_layer1/4/" + loadFirst[ii][0] + "/" + loadFirst[ii][1] + ".png";
		}
		for (var ii = 0; ii < loadFirst2.length; ii++) {
			imageURLs[imageURLs.length] = "img/map_layer2/4/" + loadFirst[ii][0] + "/" + loadFirst[ii][1] + ".jpg";
		}

		function loaderLoop() {
			for (var j = 0; j < imageURLs.length; j++) {
				var temp = new Image();
				temp.onload = function() {
					theCounter()
				};
				temp.src = imageURLs[0];
			}
		}

		function theCounter() {
			loadedImages++;
			if (loadedImages == imageURLs.length) {
				loadRemaining();
			}
		}
		loaderLoop();
		myScroll = new IScroll('#wrapper', {
			probeType: 3,
			mouseWheel: true,
			scrollX: true,
			freeScroll: true,
			startX: -499500,
			startY: -500500,
			tap: true,
			indicators: [{
				el: document.getElementById('layerContainer1'),
				ignoreBoundaries: true,
				speedRatioY: layer1speed,
				speedRatioX: layer1speed,
			}, {
				el: document.getElementById('layerContainer2'),
				ignoreBoundaries: true,
				speedRatioY: layer2speed,
				speedRatioX: layer2speed,
			}]
		});
		myScroll.on('scroll', ScrollFunction);
		ScrollFunction();
	}

	function loadRemaining() {
		var imageURLs = [];
		var loadedImages = 0;
		for (var k = 0; k < 4; k++) {
			var theX = 0;
			var theY = 0;
			if (k == 0) {}
			if (k == 1) {
				theX = 1;
			}
			if (k == 2) {
				theY = 1;
			}
			if (k == 3) {
				theX = 1;
				theY = 1;
			}
			var theArray = [];
			for (var yPos = 0; yPos < 16; yPos++) {
				for (var xPos = 0; xPos < 16; xPos++) {
					theArray.push([xPos, yPos]);
				}
			}
			var theShuffle = shuffle(theArray);
			for (var yPos = 0; yPos < 16; yPos++) {
				for (var xPos = 0; xPos < 16; xPos++) {
					var skip = 0;
					var skip2 = 0;
					for (var skipCheck = 0; skipCheck < loadFirst.length; skipCheck++) {
						if (loadFirst[skipCheck][0] == theShuffle[0][0] && loadFirst[skipCheck][1] == theShuffle[0][1]) {
							skip = 1;
						}
					}
					for (var skipCheck2 = 0; skipCheck2 < loadFirst2.length; skipCheck2++) {
						if (loadFirst2[skipCheck2][0] == theShuffle[0][0] && loadFirst2[skipCheck2][1] == theShuffle[0][1]) {
							skip2 = 1;
						}
					}
					if (skip == 0) {
						$("#layer1x" + theX + "y" + theY).append("<img src='img/map_layer1/4/" + theShuffle[0][0] + "/" + theShuffle[0][1] + ".png' height='256' width='256' style='position:absolute;top:" + theShuffle[0][1] * 256 + "px;left:" + theShuffle[0][0] * 256 + "px;height:256px;width:256px;'/>");
						imageURLs[imageURLs.length] = "img/map_layer1/4/" + theShuffle[0][0] + "/" + theShuffle[0][1] + ".png";
						console.log(theShuffle[0][0] + "/" + theShuffle[0][1] + "REAL" + theShuffle[0][0]);
					}
					if (skip2 == 0) {
						$("#layer2x" + theX + "y" + theY).append("<img src='img/map_layer2/4/" + theShuffle[0][0] + "/" + theShuffle[0][1] + ".jpg' height='256' width='256' style='position:absolute;top:" + theShuffle[0][1] * 256 + "px;left:" + theShuffle[0][0] * 256 + "px;height:256px;width:256px;'/>");
						imageURLs[imageURLs.length] = "img/map_layer2/4/" + theShuffle[0][0] + "/" + theShuffle[0][1] + ".jpg";
					}
					theShuffle.splice(0, 1)
				};
			};
		};

		function loaderLoop2() {
			for (var j = 0; j < imageURLs.length; j++) {
				var temp = new Image();
				temp.src = imageURLs[j];
				temp.onload = function() {
					theCounter2()
				};
			}
		}

		function theCounter2() {
			loadedImages++;
			console.log(imageURLs.length);
			if (loadedImages == (imageURLs.length - 1)) {
				loadTray();
			}
			if (loadedImages == Math.floor((imageURLs.length - 1) / 4)) {
				loadSound();
			}
		}
		loaderLoop2();
	}

	function loadSound() {
		var widgetIframe1 = document.getElementById('sc-widget1');
		var widgetIframe2 = document.getElementById('sc-widget2');
		var widgetIframe3 = document.getElementById('sc-widget3');
		var widgetIframe4 = document.getElementById('sc-widget4');
		widget1 = SC.Widget(widgetIframe1);
		widget2 = SC.Widget(widgetIframe2);
		widget4 = SC.Widget(widgetIframe4);
		widget3 = SC.Widget(widgetIframe3);
		widget1.bind(SC.Widget.Events.READY, widgetReady());
		widget2.bind(SC.Widget.Events.READY, widgetReady());
		widget3.bind(SC.Widget.Events.READY, widgetReady());
		widget4.bind(SC.Widget.Events.READY, widgetReady());
		widget1.bind(SC.Widget.FINISH, function() {
			widget1.seekTo(0);
			widget1.play();
		});
		widget2.bind(SC.Widget.Events.FINISH, function() {
			widget2.seekTo(0);
			widget2.play();
		});
		widget3.bind(SC.Widget.Events.FINISH, function() {
			widget3.seekTo(0);
			widget3.play();
		});
		widget4.bind(SC.Widget.Events.FINISH, function() {
			widget4.seekTo(0);
			widget4.play();
		});

		function widgetReady() {
			soundReady++;
			if (soundReady == 4) {
				setTimeout(function() {
					if (soundOn) {
						widget1.play();
						widget2.play();
						widget3.play();
						widget4.play();
					}
					SetSound();
					$("#soundButton").css({
						"visibility": "visible"
					});
				}, 2000);
			}
		}
	}

	function loadTray() {
		$(document.body).prepend('<div id="tray"><div id="trayButton"></div><div id="workThumb1" class="thumb"><img src="img/thumbs/1.jpg" class="img-responsive"/ ></div><div id="workThumb2" class="thumb"><img src="img/thumbs/2.jpg" class="img-responsive"/ ></div><div id="workThumb3" class="thumb"><img src="img/thumbs/3.jpg" class="img-responsive"/ ></div><div id="workThumb4" class="thumb"><img src="img/thumbs/4.jpg" class="img-responsive"/ ></div><div id="workThumb5" class="thumb"><img src="img/thumbs/5.jpg" class="img-responsive"/ ></div><div id="workThumb6" class="thumb"><img src="img/thumbs/6.jpg" class="img-responsive"/ ></div><div id="workThumb7" class="thumb"><img src="img/thumbs/7.jpg" class="img-responsive"/ ></div><div id="workThumb8" class="thumb"><img src="img/thumbs/8.jpg" class="img-responsive"/ ></div><div id="workThumb9" class="thumb"><img src="img/thumbs/9.jpg" class="img-responsive"/ ></div><div id="workThumb10" class="thumb"><img src="img/thumbs/10.jpg" class="img-responsive"/ ></div></div>');
		resize();
		resize();
		$("#trayButton").click(function() {
			SwitchTray();
		});
		$("#workThumb1").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[0][0]) + offsetX(800), returnY(videoCoordinates[0][1]) + offsetY(450), 1000, IScroll.utils.ease.quadratic)
		});
		$("#workThumb2").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[1][0]) + offsetX(1024), returnY(videoCoordinates[1][1]) + offsetY(512), 2000, IScroll.utils.ease.quadratic)
		});
		$("#workThumb3").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[2][0]) + offsetX(1024), returnY(videoCoordinates[2][1]) + offsetY(512), 2000, IScroll.utils.ease.quadratic)
		});
		$("#workThumb4").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[3][0]) + offsetX(1024), returnY(videoCoordinates[3][1]) + offsetY(512), 2000, IScroll.utils.ease.quadratic)
		});
		$("#workThumb5").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[4][0]) + offsetX(1024), returnY(videoCoordinates[4][1]) + offsetY(512), 2000, IScroll.utils.ease.quadratic)
		});
		$("#workThumb6").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[5][0]) + offsetX(1024), returnY(videoCoordinates[5][1]) + offsetY(512), 2000, IScroll.utils.ease.quadratic)
		});
		$("#workThumb7").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[6][0]) + offsetX(1024), returnY(videoCoordinates[6][1]) + offsetY(512), 2000, IScroll.utils.ease.quadratic)
		});
		$("#workThumb8").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[7][0]) + offsetX(1024), returnY(videoCoordinates[7][1]) + offsetY(512), 2000, IScroll.utils.ease.quadratic)
		});
		$("#workThumb9").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[8][0]) + offsetX(1024), returnY(videoCoordinates[8][1]) + offsetY(512), 2000, IScroll.utils.ease.quadratic)
		});
		$("#workThumb10").click(function() {
			SwitchTray();
			myScroll.scrollTo(returnX(videoCoordinates[9][0]) + offsetX(1024), returnY(videoCoordinates[9][1]) + offsetY(512), 2000, IScroll.utils.ease.quadratic)
		});
	}
	$(window).resize(resize);
	$('#layer1').on('click, tap', '.clickable', function() {
		var str = $(this).attr('id');
		var theNumber = str.charAt(str.length - 3);
		var theX = str.charAt(str.length - 2);
		var theY = str.charAt(str.length - 1);
	});
	$("#layer1").on("mousedown", function(e) {
		$(this).removeClass("cursorOriginal");
		$(this).addClass("cursorUpdate");
	}).on("mouseup", function() {
		$(this).removeClass("cursorUpdate");
		$(this).addClass("cursorOriginal");
	});
	$("#moreInfoButton").click(function() {
		if (infoHidden == 1) {
			$("#infoContainer").css("visibility", "visible");
			$("#moreInfoButton").html('<img src="img/cross.svg" height="25px" width="25px"/>');
			infoHidden = 0;
		} else {
			$("#infoContainer").css({
				"visibility": "hidden"
			});
			$("#moreInfoButton").html('<img src="img/info.svg" height="25px" width="25px"/>');
			infoHidden = 1;
		}
	});
	$("#soundButton").click(function() {
		SwitchSound();
	});

	function SwitchSound() {
		if (soundOn == 1) {
			widget1.pause();
			widget2.pause();
			widget3.pause();
			widget4.pause();
			soundOn = 0;
		} else {
			widget1.play();
			widget2.play();
			widget3.play();
			widget4.play();
			soundOn = 1;
		}
	}
	initialise();
});
