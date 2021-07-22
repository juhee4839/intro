/*const intro_click = document.querySelector(".intro__click__column > span");
const intro_bar = document.querySelector(".intro_bar__stack_link");


function handleClick(e){
    e.preventDefault();
    intro_bar.classList.toggle("hidden");
}

intro_click.addEventListener("click",handleClick);*/

/*

<<<<<<< HEAD
const smImg = document.querySelectorAll("#smImg > li");
const lgImg = document.querySelectorAll("#lgImg > li");

smImg.forEach(sImg => sImg.addEventListener("click",function(){
    
}))
function handdleClick(){
    
}
=======
const smImgs = document.querySelectorAll("#smImg > li");
const lgImgs = document.querySelectorAll("#lgImg > li");

smImgs.forEach(smImg => smImg.addEventListener("click",function(){
    for(let i=0;i<smImgs.length; i++)smImgs[i].classList.remove("on")
    smImg.classList.add("on");
    let index = getElementIndex(smImgs, smImg);
    console.log(index)
    for(let i=0;i<lgImgs.length; i++)lgImgs[i].classList.remove("on")
    lgImgs[index].classList.add("on");
}))
function getElementIndex(element, range) {//요소의 index번호를 구하는 함수
    return [].indexOf.call(element, range);
    //return [].indexOf.call(element.parentNode.children, element);
}
>>>>>>> 25ed42633edf3b0c396945e512abfa1f596747e2
*/