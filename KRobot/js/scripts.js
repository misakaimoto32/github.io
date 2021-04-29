//获取元素

var oCont = document.getElementById('content');
var oImg = document.getElementById('Img');
var oTxt = document.getElementById('txt');
var oBtn = document.getElementById('btn');
var oSTxt = document.getElementsByClassName('showTxt');
var oSave = document.getElementById('save');
var num = 1;
var strCOW = "我想要法姐姐如石楠花般洁白如钻石般闪耀的小！橡！皮！";
var recs = {
    1: ["透透🥺", "快让我透透🥺", "坂坂让我透透", "让我透透！", "hso"],
    2: ["康康小橡皮", "法姐姐康康小橡皮", "让我康康小橡皮", "透透小橡皮"],
    3: ["😅", "😅", "禁止流汗黄豆😅", "开始了是吧"]
};

//切换头像
function change() {
    if (++num > 3) {
        num = 1;
    };
    oImg.src = `img/${num}.jpg`;
    console.log(num);
}
//发送事件
function sent() {
    if (!oTxt.value) return;
    if (oTxt.value.toUpperCase() == "COW") { COW(); oTxt.value = ''; return; }
    console.log(oTxt.value);
    addCon();
    oTxt.focus();
}
function COW() {
    addLeftLis(strCOW, "img/COW.jpg");
    if (num == 2) {
        addLeftLis("?", "img/2.jpg");
        addRightLis("?", "img/1.jpg");
    }
    else {
        addRightLis("?", "img/2.jpg");
        addLeftLis("?", "img/1.jpg");
    }
    addLeftLis("草", "img/kalie.jpg");
    addLeftLis("好恶心", "img/zhushu.jpg");
    addLeftLis("性骚扰了属于是", "img/yun.jpg");
    callback();
    addLeftLis("我看不懂，但我大受震撼", "img/gugugu.jpg");
    addLeftLis("我是来看热闹的", "img/luren.jpg");
}
function addCon() {
    //定义需要添加的元素
    var newLi = document.createElement("li");
    var newImg = document.createElement('img');
    //判断聊天的对象是哪一方，文字框出现在左边还是右边
    //添加对话框
    newLi.innerHTML = oTxt.value;
    newLi.className = 'showTxt right';
    oSave.appendChild(newLi);
    oTxt.value = '';
    //添加头像
    newImg.src = oImg.src;
    newImg.className = 'showImg rightImg';
    newLi.appendChild(newImg);

    //清除浮动
    var div = document.createElement('div');
    div.style = 'clear:both';
    oSave.appendChild(div);
    setTimeout(callback(), 3000);
}

function callback() {//回复函数
    var newLi = document.createElement("li");
    var newImg = document.createElement('img');
    var i = Math.floor(Math.random() * 4);

    var rec = recs[num];
    newLi.innerHTML = rec[i];

    newLi.className = 'showTxt left';
    oSave.appendChild(newLi);
    oTxt.value = '';
    newImg.src = "img/kuroko.jpg";
    newImg.className = 'showImg leftImg';
    newLi.appendChild(newImg);
    var div = document.createElement('div');
    div.style = 'clear:both';
    oSave.appendChild(div);
    oCont.scroll(0, 999999);
}

function addRightLis(text1, imgUrl1) {//显示右气泡
    var newLi = document.createElement("li");
    var newImg = document.createElement('img');
    newLi.innerHTML = text1;
    newLi.className = 'showTxt right';
    oSave.appendChild(newLi);
    newImg.src = imgUrl1;
    newImg.className = 'showImg rightImg';
    newLi.appendChild(newImg);
    var div = document.createElement('div');
    div.style = 'clear:both';
    oSave.appendChild(div);
}

function addLeftLis(text1, imgUrl1) {//显示左气泡
    var newLi = document.createElement("li");
    var newImg = document.createElement('img');
    newLi.innerHTML = text1;
    newLi.className = 'showTxt left';
    oSave.appendChild(newLi);
    newImg.src = imgUrl1;
    newImg.className = 'showImg leftImg';
    newLi.appendChild(newImg);
    var div = document.createElement('div');
    div.style = 'clear:both';
    oSave.appendChild(div);
}
