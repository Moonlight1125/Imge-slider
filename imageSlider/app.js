const images = document.querySelectorAll("li");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const imgArray = [];//0~3
let arrayLength;
let num = 10;

function setUp(){
    images.forEach(elm=>{
        const index = elm.dataset.index;
        elm.style.zIndex = index;
        imgArray.push(elm);
        elm.firstChild.classList.remove("showUp");
        elm.firstChild.classList.remove("dissapear");
    })
}

function backToDefault(){
    images.forEach(elm=>{
        const index = elm.dataset.index;
        elm.style.zIndex = index;
        elm.firstChild.classList.remove("backToDefault");
        elm.firstChild.classList.remove("showUp");
        elm.firstChild.classList.remove("dissapear");
        elm.firstChild.classList.add("backToDefault");
    })
    num=10;
}
function backToDefaultV2(){
    images.forEach(elm=>{
        const index = elm.dataset.index;
        elm.style.zIndex = index;
        elm.firstChild.classList.remove("backToDefaultV2");
        elm.firstChild.classList.remove("showUpPrev");
        elm.firstChild.classList.remove("dissapearPrev");
        elm.firstChild.classList.add("backToDefaultV2");
    })
    num=10;
}

function deleteClass(){
    images.forEach(elm=>{
        elm.firstChild.classList.remove("backToDefault");
        elm.firstChild.classList.remove("backToDefaultV2");
        elm.firstChild.classList.remove("showUp");
        elm.firstChild.classList.remove("showUpPrev");
        elm.firstChild.classList.remove("dissapear");
        elm.firstChild.classList.remove("dissapearPrev");
    })
}

window.addEventListener("load",function(){
    setUp();
    arrayLength=imgArray.length;
})

let i =0;

nextBtn.addEventListener("click",function(){
    deleteClass();
    i++;
    if(i>3){
        i=0;
        backToDefault();
        imgArray[arrayLength-1].firstChild.classList.replace("backToDefault","dissapear");
    }else{
        imgArray[arrayLength-1].firstChild.classList.remove("dissapear");
        imgArray[i-1].firstChild.classList.add("dissapear");
    }
   imgArray[i].style.zIndex = `${num}`;
   imgArray[i].firstChild.classList.add("showUp");
   num++;
   console.log(i)
})
 
prevBtn.addEventListener("click",function(){
    deleteClass();
    i--;
    if(i<0){
        console.log("ok")
        i=3;
        imgArray[arrayLength-arrayLength].firstChild.classList.add("dissapearPrev");
    }else if(i<1){
        i=0;
        backToDefaultV2();
        imgArray[1].firstChild.classList.replace("backToDefaultV2","dissapearPrev");
    }else{
        imgArray[i+1].firstChild.classList.add("dissapearPrev");
    }
    imgArray[i].style.zIndex = `${num}`;
    imgArray[i].firstChild.classList.add("showUpPrev");
    num++;
    console.log(i);
})


