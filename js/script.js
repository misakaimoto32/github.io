//所有可选用户
const USERS_LIST = [
    {
        "img": "./img/shuiyue.jpg",
        "name": "水月",
        "chat": ["👀", "可爱", "水月可爱", "透透😋", "让我透透！", "穿", "穿!", "水月穿", "水月穿！", "喝水月的妹汁😋", "呜呜呜"]
    },
    {
        "img": "./img/fajiejie.jpg",
        "name": "法姐姐",
        "chat": ["康康小橡皮👀", "小橡皮可爱", "法姐姐康康小橡皮", "透透😋", "让我康康小橡皮", "穿", "法姐姐穿！", "看看橡皮🥺", "透透小橡皮", "呜呜呜"]
    }
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
    if(text.value == "") return
    appendChat("right", USERS_LIST[user].img, text.value)
    text.value = ""
    scrollBottom()

    timeoutID = setTimeout(() => {
        kurukoReply()
    }, (Math.round(Math.random() * (3 - 1)) + 1) * 1000)
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

/**
 * 开始函数 设定初试状态
 */
(function main(){
    addUsers()
    changeUser(0)
})()

