let is_show = false;
let is_reply = false
let is_show_chat =false;
function show_comment(){
    if(is_show) {
        document.querySelector(".container-comment").style.display = "none";
        is_show = false;
    }
        else{
        document.querySelector(".container-comment").style.display = "block";
        is_show = true;
    }
}
function show_reply(){
    if(is_reply) {
        document.querySelector(".container-reply").style.display = "none";
        is_reply = false;
    }
        else{
        document.querySelector(".container-reply").style.display = "block";
        is_reply = true;
    }
}

// Open message
$('#chat_icon').click(function(){
    if(is_show_chat) {
        document.querySelector(".nav-right-window-chat").style.display = "none";
        is_show_chat = false;
    }
    else{
        document.querySelector(".nav-right-window-chat").style.display = "block";
        is_show_chat = true;
    }
});
function close_chat(){
    document.querySelector(".nav-right-window-chat").style.display = "none";
}


