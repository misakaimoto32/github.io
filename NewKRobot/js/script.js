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
/*
*发送图片
*/

function appendChatImg(position,imgSrc,msgimgSrc){
	let srcstr="<img src=\""+msgimgSrc+"\" width=\"150px\" hight=\"150px\"/>"
	appendChat(position,imgSrc,srcstr);
}


/**
 * 发送信息按钮被点击
 */
async function sendMessage(){
    window.clearTimeout(timeoutID);
    let text = document.getElementById("input-input");

    if(text.value == "") return;

    if(/cow/i.test(text.value)){
        text.value = "";
        COW();
	}else{
        appendChat("right", USERS_LIST[user].img, text.value)
        text.value = ""
        scrollBottom()
        await sleep((Math.round(Math.random() * (2 - 1)) + 1) * 1000)
        kurukoReply()
    }
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
 * 召唤天津风批话
 */
async function COW(){
    let btn = document.getElementById("input-button")
    btn.style.display = "none"; 

	let strCOW = ["我想要法姐姐如石楠花般洁白如钻石般闪耀的小！橡！皮！", "一拳打进法姐姐批里面","想看我的牛子？我的牛子在法姐姐批里，看不了👋🏻"]
	let locf="left", locb="left";
	if(user == 0){
        locf = "right";
    }else if(user == 1){
        locf = "left";
    }
	
    appendChat("left", "img/tjf.jpg", strCOW[Math.floor(Math.random() * strCOW.length)]);
    scrollBottom();

    await sleep((Math.round(Math.random() * (0.6 - 0.5)) + 0.5) * 1000);
    appendChat(locf, "img/2.jpg", "?");
    scrollBottom();

    await sleep((Math.round(Math.random() * (0.6 - 0.5)) + 0.5) * 1000);
    appendChat(locb, "img/1.jpg", "?");
    scrollBottom();

    await sleep((Math.round(Math.random() * (1.5 - 0.5)) + 0.5) * 1000);
    appendChat("left", "img/kalie.jpg", "草");
    scrollBottom();

    await sleep((Math.round(Math.random() * (1.5 - 0.5)) + 0.5) * 1000);
    appendChat("left", "img/zhushu.jpg", "好恶心");
    scrollBottom();

    await sleep((Math.round(Math.random() * (1.5 - 0.5)) + 0.5) * 1000);
    appendChat("left", "img/yun.jpg", "性骚扰了属于是");
    scrollBottom();

    await sleep((Math.round(Math.random() * (1.5 - 0.5)) + 0.5) * 1000);
    appendChat("left", "img/klee.jpg", "🐮🍺");
    scrollBottom();

    await sleep((Math.round(Math.random() * (1.5 - 0.5)) + 0.5) * 1000);
    appendChatImg("left", "img/gugugu.jpg", "img/amazing.jpg");
    scrollBottom();

    await sleep((Math.round(Math.random() * (1.8 - 0.5)) + 0.5) * 1000);
    appendChat("left", "img/luren.jpg", "我是来看热闹的");
    scrollBottom();

    btn.style.display = "block";
}

/**
 * 设置回复延迟
 * @param {number} ms 延迟时间(毫秒) 
 */
function sleep(ms){
    return new Promise(function(resolve) {
        setTimeout(resolve, ms)
    })
}

/**
 * 滚动到底部
 */
function scrollBottom(){
    let contentBox = document.getElementById("content-box");
    contentBox.scrollTop = contentBox.scrollHeight;
}

/**
 * 开始函数 设定初试状态
 */
(function main(){
    addUsers()
    changeUser(0)
})()

