//所有可选用户
const USERS_LIST = [
    {
        "img": "./img/fajiejie.jpg",
        "name": "法姐姐",
        "chat": ["康康小橡皮👀", "小橡皮", "法姐姐康康小橡皮", "透透😋", "让我康康小橡皮", "穿", "法姐姐穿！", "看看橡皮🥺", "透透小橡皮", "呜呜呜"]
    },
	{
		"img":"./img/1.jpg",
		"name":"坂坂",
		"chat":["透透🥺", "快让我透透🥺", "坂坂让我透透", "让我透透！", "hso"]
	},
	{
		"img": "./img/3.jpg",
		"name": "火鸡味锅巴🐎",
		"chat":["😅", "😅", "禁止流汗黄豆😅", "开始了是吧"]
	},
	{
	    "img": "./img/shuiyue.jpg",
	    "name": "水月",
	    "chat": ["👀", "可爱", "水月可爱", "透透😋", "让我透透！", "穿", "穿!", "水月穿", "水月穿！", "喝水月的妹汁😋", "呜呜呜"]
	},

]
//当前选择的用户
let user = 0
//对话延迟ID
let timeoutID;

/**
 * 添加所有可选用户
 */
function addUsers(){
    let usersBox = document.getElementById("users-box");
    for(let index in USERS_LIST){
        usersBox.insertAdjacentHTML('beforeend', `
            <li onclick="changeUser(${index})">
                <div><img class="users-item" src="${USERS_LIST[index].img}" alt=""></div>
                <p class="users-name">${USERS_LIST[index].name}</p>
            </li>`
        )
    }
}

/**
 * 改变用户栏状态
 */
function changeState(){
    let usersList = document.getElementsByClassName("users-list")[0]
    if(usersList.classList.contains("users-list-up")){
        usersList.classList.remove("users-list-up")
    }else{
        usersList.classList.add("users-list-up")
    }
}

/**
 * 改变用户
 * @param {number} i 选择的用户index
 */
function changeUser(i){
    user = i
    document.getElementById("user").src = USERS_LIST[i].img
    if(document.getElementsByClassName("users-list")[0].classList.contains("users-list-up")) changeState()
}

/**
 * 添加对话框
 * @param {string} position 对话框位置，left或right
 * @param {string} imgSrc 头像src地址
 * @param {string} text 对话框内容
 */
function appendChat(position, imgSrc, text){
    let chatBox = document.getElementById("chat-box");
    chatBox.insertAdjacentHTML('beforeend', `
        <div class="chat-list chat-${position}">
            <div class="chat-img img-${position}">
                <img src="${imgSrc}" alt="">
            </div>
            <p class="chat-text chat-text-${position}">
                ${text}
            </p>
        </div>
    `)
}
/**
 * 发送信息按钮被点击
 */
function sendMessage(){
    window.clearTimeout(timeoutID);
    let text = document.getElementById("input-input");
	let btn=document.getElementById("input-button");
    if(text.value == "") return;else if(text.value.toUpperCase() == "COW"){ btn.style.display="none"; text.value=""; COW();
	timeoutID = setTimeout(() => {
	   btn.style.display="block";
	}, 5500)
	return}
    appendChat("right", USERS_LIST[user].img, text.value)
    text.value = ""
    scrollBottom()

    timeoutID = setTimeout(() => {
        kurukoReply()
    }, (Math.round(Math.random() * (2 - 1)) + 1) * 1000)
}

/**
 * 黑子回复
 */
function kurukoReply(){
    let replyText = USERS_LIST[user].chat[Math.floor(Math.random() * USERS_LIST[user].chat.length)]
    appendChat("left", "./img/kuroko.jpg", replyText)
    scrollBottom()
}

/**
 * 滚动到底部
 */
function scrollBottom(){
    let contentBox = document.getElementById("content-box");
    contentBox.scrollTop = contentBox.scrollHeight;
}
/*
*召唤天津风
*/
function COW(){
	var strCOW = {0:"我想要法姐姐如石楠花般洁白如钻石般闪耀的小！橡！皮！",1:"一拳打进法姐姐批里面"};
	var i=Math.floor(Math.random()*2);
	var locf;var locb;var loc="left";
	if(user==0){locf="right";locb="left"}else if(user==1){locf="left";locb="right"}else{}
	timeoutID = setTimeout(() => {
	   appendChat(loc,"img/tjf.jpg",strCOW[i])
	}, 0);scrollBottom();
	timeoutID = setTimeout(() => {
	   appendChat(locf,"img/2.jpg","?")
	}, 1000);scrollBottom();
	timeoutID = setTimeout(() => {
	   appendChat(locb,"img/1.jpg","?")
	}, 1100);scrollBottom();
	timeoutID = setTimeout(() => {
	   appendChat(loc,"img/kalie.jpg","草")
	}, 1500);scrollBottom();
	timeoutID = setTimeout(() => {
	   appendChat(loc,"img/zhushu.jpg","好恶心")
	}, 2500);scrollBottom();
	timeoutID = setTimeout(() => {
	   appendChat(loc,"img/yun.jpg","性骚扰了属于是")
	}, 3500);scrollBottom();
	timeoutID = setTimeout(() => {
	   appendChat(loc,"img/gugugu.jpg","我看不懂,但我大受震撼")
	}, 4500);scrollBottom();
	timeoutID = setTimeout(() => {
	   appendChat(loc,"img/luren.jpg","我是来看热闹的");
	}, 5500);scrollBottom();
}

/**
 * 开始函数 设定初试状态
 */
(function main(){
    addUsers()
    changeUser(0)
})()

