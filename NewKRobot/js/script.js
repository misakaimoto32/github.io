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
let texts = document.getElementById("input-input");

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

// function appendChatImg(position,imgSrc,msgimgSrc){
// 	appendChat(position,imgSrc,srcstr);
// }

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
	}else if(/genshin/i.test(text.value)){
        text.value = "";
		genshin(0);
	}else{
        appendChat("right", USERS_LIST[user].img, text.value)
        text.value = "";
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

	let strCOW = ["我想要法姐姐如石楠花般洁白如钻石般闪耀的小！橡！皮！", "一拳打进法姐姐批里面", "想看我的牛子？我的牛子在法姐姐批里，看不了👋🏻"]
	let locf = "left", locb = "left";
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
    appendChatImg("left", "img/gugugu.jpg", "amazing.jpg");
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

/*
*发送输入框
* */
// let sum=Array(4),i=0;
// function appendChatText(position,imgSrc,id,placeholder,textbef,textaf){
// 	let srcstr="请输入您的"+textbef+"：<input type='text' id='"+id+"' placeholder='"+placeholder+"' /><button id='b"+id+"'>确认</button>"+textaf;
// 	appendChat(position,imgSrc,srcstr);
// 	document.getElementById(id).oninput=function(){
// 		if(!Number(this.value)) this.value="";
// 	};
// 	document.getElementById("b"+id).onclick=function(){
// 		if(document.getElementById(id).value=="")return
// 		sum[i]=Number(document.getElementById(id).value); console.log(sum[i]); 
// 		document.getElementById(id).disabled=true;this.disabled=true;
// 		if(i++<4)calculator();
// 	}
// }

// function calculator(){
//     let btn = document.getElementById("input-button")
// 	if(i==0){ texts.style.display="none"; btn.style.display = "none";  appendChatText("left","img/help.jpg","gj","攻击力","","");scrollBottom();};
// 	if(i==1){appendChatText("left","img/help.jpg","bj","暴击率(%)","","");scrollBottom();};
// 	if(i==2){appendChatText("left","img/help.jpg","bjsh","暴击伤害(%)","","");scrollBottom();};
// 	if(i==3){appendChatText("left","img/help.jpg","zs","（物理、元素）伤害增伤(%)","","");};
// 	if(i==4){ let sums=sum[0]*(sum[1]/100+1)*(sum[2]/100+1)*(sum[3]/100+1);
// 		appendChat("left","img/help.jpg","正常状态下，不计算怪物等级抗性，不发生元素反应时的伤害期望值为："+sums.toFixed(2));scrollBottom();
// 		texts.style.display="block";btn.style.display = "block"; texts.value=""
// 	}
// }


let gjl, bjl, bjsh, shjc // 攻击力 暴击率 暴击伤害 伤害加成
/**
 * 原神伤害计算功能
 * @param {number} state 步骤状态
 */
function genshin(state){
    console.log(state)
    switch(state){
        case 0:
            appendChat("left", "img/help.jpg", `
                请输入您的攻击力：</br>
                <input style="max-width: 150px" type="number" class="gjl" placeholder="100"/>
                <button onclick="genshin(1)">确认</button>
            `)
            scrollBottom()
        break;
        case 1:
            gjl = document.getElementsByClassName("gjl")
            gjl = gjl[gjl.length - 1].value
            if(gjl == ""){
                return
            }else{
                gjl = Number(gjl)
                appendChat("left", "img/help.jpg", `
                    请输入您的暴击率(%)：</br>
                    <input style="max-width: 150px" type="number" class="bjl" placeholder="100"/>
                    <button onclick="genshin(2)">确认</button>
                `)
                scrollBottom()
            }
        break;
        case 2:
            bjl = document.getElementsByClassName("bjl")
            bjl = bjl[bjl.length - 1].value
            if(bjl == ""){
                return
            }else{
                bjl = Number(bjl)
                appendChat("left", "img/help.jpg", `
                    请输入您的暴击伤害(%)：</br>
                    <input style="max-width: 150px" type="number" class="bjsh" placeholder="100"/>
                    <button onclick="genshin(3)">确认</button>
                `)
                scrollBottom()
            }
        break;
        case 3:
            bjsh = document.getElementsByClassName("bjsh")
            bjsh = bjsh[bjsh.length - 1].value
            if(bjsh == ""){
                return
            }else{
                bjsh = Number(bjsh)
                appendChat("left", "img/help.jpg", `
                    请输入您的（物理、元素）伤害加成：</br>
                    <input style="max-width: 150px" type="number" class="shjc" placeholder="100"/>
                    <button onclick="genshin(4)">确认</button>
                `)
                scrollBottom()
            }
        break;
        case 4:
            shjc = document.getElementsByClassName("shjc")
            shjc = shjc[shjc.length - 1].value
            if(shjc == ""){
                return
            }else{
                shjc = Number(shjc)
                let sum = gjl * (bjl / 100 + 1) * (bjsh / 100 + 1) * (shjc / 100 + 1);
                appendChat("left", "img/help.jpg", `
                    正常状态下，不计算怪物等级抗性，不发生元素反应时的伤害期望值为：<span style="color: orange">${sum.toFixed(2)}<span>
                `)
                scrollBottom()
            }
        break;
    }
}

/**
 * 欢迎界面
 */
function welcome(){
    appendChat("left", "img/help.jpg", `
        原神伤害计算器更新啦<br>
        点击或输入<a style='color: skyblue; cursor:pointer' onclick='genshin(0)'>Genshin</a>来计算一下角色的伤害期望值吧！
        <br>
        <br>
        <img src='img/h.jpg' width="150px"/>
    `);
    appendChat("left", "img/help.jpg",`
        本机器人由<a style='color:orange' href=’https://mobile.twitter.com/MisakaImoto32'>@MisakaImoto32</a>制作。感谢<a style='color:pink' href="https://mobile.twitter.com/DFK_KLEE">@筱原可莉</a>、<a style='color:green' href="https://mobile.twitter.com/Misaka_RPC">@御坂美琴电台🇨🇳</a>提供的技术支持！😋
    `);
	appendChat("left", "img/help.jpg",`旧版机器人请点击<a style='color:red' href="../KRobot">这里</a>喔`);
}

/**
 * 开始函数 设定初试状态
 */
(function main(){
    addUsers()
    changeUser(0)
	welcome();
    document.addEventListener("keydown", (e) => {
        if(e.key == "Enter"){
            sendMessage()
        }
    })
})()

