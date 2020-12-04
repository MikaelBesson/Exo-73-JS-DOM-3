let avatarEls = document.getElementsByTagName("img");


for(let i = 0; i < avatarEls.length; i++){
    avatarEls[i].style.height = "50px";
}

let bul = document.getElementById("avatar-1");
bul.addEventListener("mouseenter", function (){
    this.title = "Marcimus, A pink, innocent avatar";
})

let bul2 = document.getElementById("avatar-2");
bul2.addEventListener("mouseenter", function (){
    this.title = "Old Spice Mann, A green, angry avatar";
})

let bul3 = document.getElementById("avatar-3");
bul3.addEventListener("mouseenter", function (){
    this.title = "Orange Juice Squid, An orange, multi-legged avatar";
})









