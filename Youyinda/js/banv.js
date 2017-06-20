$(function() {

	//轮播开始
	var length,
		currentIndex = 0,
		interval,
		hasStarted = false, //是否已经开始轮播
		t = 3000; //轮播时间间隔
	length = $('.slider-panel').length;

	//将除了第一张图片隐藏
	$('.slider-panel:not(:first)').hide();
	//将第一个slider-item设为激活状态
	$('.slider-item:first').addClass('slider-item-selected');
	//隐藏向前、向后翻按钮
	$('.slider-page').hide();

	//鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
	$('.slider-panel, .slider-pre, .slider-next').hover(function() {
		stop();
		$('.slider-page').show();
	}, function() {
		$('.slider-page').hide();
		start();
	});

	$('.slider-item').hover(function(e) {
		stop();
		var preIndex = $(".slider-item").filter(".slider-item-selected").index();
		currentIndex = $(this).index();
		play(preIndex, currentIndex);
	}, function() {
		start();
	});

	$('.slider-pre').unbind('click');
	$('.slider-pre').bind('click', function() {
		pre();
	});
	$('.slider-next').unbind('click');
	$('.slider-next').bind('click', function() {
		next();
	});

	/**
	 * 向前翻页
	 */
	function pre() {
		var preIndex = currentIndex;
		currentIndex = (--currentIndex + length) % length;
		play(preIndex, currentIndex);
	}
	/**
	 * 向后翻页
	 */
	function next() {
		var preIndex = currentIndex;
		currentIndex = ++currentIndex % length;
		play(preIndex, currentIndex);
	}
	/**
	 * 从preIndex页翻到currentIndex页
	 * preIndex 整数，翻页的起始页
	 * currentIndex 整数，翻到的那页
	 */
	function play(preIndex, currentIndex) {
		$('.slider-panel').eq(preIndex).fadeOut(500)
			.parent().children().eq(currentIndex).fadeIn(1000);
		$('.slider-item').removeClass('slider-item-selected');
		$('.slider-item').eq(currentIndex).addClass('slider-item-selected');
	}

	/**
	 * 开始轮播
	 */
	function start() {
		if(!hasStarted) {
			hasStarted = true;
			interval = setInterval(next, t);
		}
	}
	/**
	 * 停止轮播
	 */
	function stop() {
		clearInterval(interval);
		hasStarted = false;
	}

	//开始轮播
	start();

	//轮播图结束	
	//动态添加产品
	var str = "";
	$.ajax({
		type: "get",
		url: "js/data.json",
		dataType: "json",
		success: function(data) {
			var arr = data.indexList;
			for(var i = 0; i < data.indexList.length; i++) {
				str += "<li><img src='" + data.indexList[i].imgurl + "'/><h6>" + data.indexList[i].title + "</h6><a href='productinfo.html?id="+data.list[i].id+"'></a></li>"
			}
			$(".main-content").html("<ul>" + str + "</ul>")

		}
	});
	//动态添加产品结束
	
	//创建和初始化地图函数：
	function initMap() {
		createMap(); //创建地图
		setMapEvent(); //设置地图事件
		addMapControl(); //向地图添加控件
		addMarker(); //向地图中添加marker
	}

	//创建地图函数：
	function createMap() {
		var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
		var point = new BMap.Point(113.894588, 22.965443); //定义一个中心点坐标
		map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
		window.map = map; //将map变量存储在全局
	}

	//地图事件设置函数：
	function setMapEvent() {
		map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
		map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
		map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
		map.enableKeyboard(); //启用键盘上下左右键移动地图
	}

	//地图控件添加函数：
	function addMapControl() {
		//向地图中添加缩放控件
		var ctrl_nav = new BMap.NavigationControl({
			anchor: BMAP_ANCHOR_TOP_LEFT,
			type: BMAP_NAVIGATION_CONTROL_LARGE
		});
		map.addControl(ctrl_nav);
		//向地图中添加缩略图控件
		var ctrl_ove = new BMap.OverviewMapControl({
			anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
			isOpen: 1
		});
		map.addControl(ctrl_ove);
		//向地图中添加比例尺控件
		var ctrl_sca = new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_BOTTOM_LEFT
		});
		map.addControl(ctrl_sca);
	}

	//标注点数组
	var markerArr = [{
		title: "优印达数码图文",
		content: "广东省东莞市松山湖研发二路中科创新广场F幢1010号&nbsp;Tel：133-2689-2879",
		point: "113.893375|22.965393",
		isOpen: 1,
		icon: {
			w: 23,
			h: 25,
			l: 69,
			t: 21,
			x: 9,
			lb: 12
		}
	}];
	//创建marker
	function addMarker() {
		for(var i = 0; i < markerArr.length; i++) {
			var json = markerArr[i];
			var p0 = json.point.split("|")[0];
			var p1 = json.point.split("|")[1];
			var point = new BMap.Point(p0, p1);
			var iconImg = createIcon(json.icon);
			var marker = new BMap.Marker(point, {
				icon: iconImg
			});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title, {
				"offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
			});
			marker.setLabel(label);
			map.addOverlay(marker);
			label.setStyle({
				borderColor: "#808080",
				color: "#333",
				cursor: "pointer"
			});

			(function() {
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click", function() {
					this.openInfoWindow(_iw);
				});
				_iw.addEventListener("open", function() {
					_marker.getLabel().hide();
				})
				_iw.addEventListener("close", function() {
					_marker.getLabel().show();
				})
				label.addEventListener("click", function() {
					_marker.openInfoWindow(_iw);
				})
				if(!!json.isOpen) {
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
		}
	}
	//创建InfoWindow
	function createInfoWindow(i) {
		var json = markerArr[i];
		var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
		return iw;
	}
	//创建一个Icon
	function createIcon(json) {
		var icon = new BMap.Icon("img/sadaf.png", new BMap.Size(json.w, json.h), {
			imageOffset: new BMap.Size(-json.l, -json.t),
			infoWindowOffset: new BMap.Size(json.lb + 5, 1),
			offset: new BMap.Size(json.x, json.h)
		})
		return icon;
	}

	initMap(); //创建和初始化地图

})