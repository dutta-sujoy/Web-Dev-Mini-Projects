const image = document.getElementById('bike');

function black_bike(){
    image.src = 'img/hanle-black-000.png';
}
function white_bike(){
    image.src = 'img/kamet_white_000.png';
}
function blue_bike(){
    image.src = 'img/slate_poppy_000.png';
}

var menuList = document.getElementById("menu-list")
menuList.style.maxHeight = "0px";
function toggleMenu(){
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px"
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}