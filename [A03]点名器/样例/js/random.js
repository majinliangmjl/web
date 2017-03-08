var timer,
	div = document.getElementById("box").getElementsByTagName("div")[0],
	btn = document.getElementsByTagName("input"),
	namelist = [
		"程欢",
		"段佳佳",
		"马明明",
		"姜晓倩",
		"刘同同",
		"王智慧",
		"刘婷婷",
		"王艳芬",
		"张乐琴",
		"张红霞",
		"赵佩",
		"王冬雪",
		"朱书欣",
		"赵晓莹",
		"潘新燕",
		"张天质",
		"任梦楠",
		"魏佳欣",
		"关羽佳",
		'王畅',
		'张珊珊',
		'张梦琳',
		'薛春阳',
		'霍玉洁',
		'王芳芳',
		'段洪刚',
		'付晶晶',
		'杨天天',
		'马奔',
		'王长敏',
		'王欢欢',
		'任亚娜',
		'任萌萌',
		'朱世龙',
		'张瑞敏',
		'杨洋',
		'李茜',
		'黄冉',
		'丁晨',
		'王宇佳',
		'付明杰'
	],
	arrImgs = [
		"img1.gif",
		"img2.jpg",
		"img3.jpg",
		"img4.jpg",
		"img5.png",
		"img6.jpg",
		"img7.jpg",
		"img8.jpg",
		"img9.jpg",
		"img10.png",
		"img11.jpg",
		"img12.png",
		"img13.png",
		"img14.jpg",
		"img15.jpg",
		"img1.gif",
		"img2.jpg",
		"img3.jpg",
		"img4.jpg",
		"img5.png",
		"img6.jpg",
		"img7.jpg",
		"img8.jpg",
		"img9.jpg",
		"img10.png",
		"img11.jpg",
		"img12.png",
		"img13.png",
		"img14.jpg",
		"img15.jpg",
		"img1.gif",
		"img2.jpg",
		"img3.jpg",
		"img4.jpg",
		"img5.png",
		"img6.jpg",
		"img7.jpg",
		"img8.jpg",
		"img9.jpg",
		"img10.png",
		"img11.jpg"
	];

function selectFrom(start, end) {
	var choice = end - start + 1;
	return Math.floor(Math.random() * choice + start);
}

function run() {
	btn[0].disabled = true;
	timer = setInterval(function() {
		var randNum = selectFrom(0, namelist.length - 1);
		var strTemp = "<img src='img/" + arrImgs[randNum] + "' /><p>" + namelist[randNum] + "</p>";
		div.innerHTML = strTemp;
	}, 10);
}

run();

btn[0].onclick = function() {
	run();
};

btn[1].onclick = function() {
	clearInterval(timer);
	btn[0].disabled = false;
};