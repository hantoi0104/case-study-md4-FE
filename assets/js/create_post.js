let is_close_post = false;
function close_post(){
   if(is_close_post) {
       document.querySelector(".container-create-post").style.display = "block";
       is_close_post = false;
   }
   else {
       document.querySelector(".container-create-post").style.display = "none";
       is_close_post = true;
   }
}