<script>
    var div=document.getElementById("div"),
        img=document.getElementById("img"),
        inp=document.getElementById("inp"),
        btn=document.getElementById("btn"),
        ul=document.getElementById("ul"),
        imgWrap=document.getElementById("imgWrap");
    var onOff=true;

        img.onclick=function(){
            if(onOff){
                img.src="images/2.jpeg";
                onOff=false;
            }
            else{
                img.src="images/1.jpg";
                onOff=true;
            }
        }
        btn.onclick=function(){
            if(onOff){
                // ul.innerHTML+="<li class='left'><div>"+imgWrap.innerHTML+"</div><div>"+inp.value+"</div><br></li>";聊天记录从上往下走
                ul.innerHTML="<li class='left'><div>"+imgWrap.innerHTML+"</div><div class='inps'>"+inp.value+"</div><br></li>"+ul.innerHTML;//聊天记录从下往上走 后面的放在上面
                inp.value="";
            }
            else{
                ul.innerHTML="<li class='right'><div>"+imgWrap.innerHTML+"</div><div class='inpss'>"+inp.value+"</div><br></li>"+ul.innerHTML;
                inp.value="";
            }
        }
        
    </script>
