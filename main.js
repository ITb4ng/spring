const frame = document.querySelector("section")
const lists = frame.querySelectorAll("article")
const deg = 45
const len = lists.length-1
const prev = document.querySelector(".btnPrev")
const next = document.querySelector(".btnNext")
const audio = frame.querySelectorAll("audio")
const mediaViewContent = window.matchMedia(`(max-width:420px)`)

let active = 0;
let num = 0;
let i = 0;




function activation(index, lists){
    for(let el of lists) {
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}


const viewChangeHandler = (mediaViewContent) => {
    const frame = document.querySelector("section");
    const lists = frame.querySelectorAll("article");
    const deg = 45;
    for(let el of lists) { 
        // const pic = el.querySelector('.pic');
        if(mediaViewContent.matches === true){
            el.style.transform = `rotate(${deg*i}deg) translateX(-60px) translateY(-100vh)`;
            // pic.style.width = "40vw";
            // pic.style.height = "40vw";
        }
    }  
}


    for(let el of lists) {  
        let pic = el.querySelector('.pic');
        el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
        pic.style.backgroundImage = `url("../img/member${i+1}.jpg")`;
        i++;
    
    
        let play = el.querySelector(".play");
        let pause = el.querySelector(".pause");
        let load = el.querySelector(".load");
    
        
        play.addEventListener("click", (event)=>{
                let isActive = event.currentTarget.closest("article").classList.contains("on");
            if(isActive){
                event.currentTarget.closest("article").querySelector(".pic").classList.add("on");
                event.currentTarget.closest("article").querySelector("audio").play();
            } 
        });
    
        pause.addEventListener("click", (event)=>{
             let isActive = event.currentTarget.closest("article").classList.contains("on");
            if(isActive){
                event.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
                event.currentTarget.closest("article").querySelector("audio").pause();
            }
        });
        load.addEventListener("click", (event)=>{
            let isActive = event.currentTarget.closest("article").classList.contains("on");
            if(isActive){
                event.currentTarget.closest("article").querySelector(".pic").classList.add("on");
                event.currentTarget.closest("article").querySelector("audio").load();
                event.currentTarget.closest("article").querySelector("audio").play();
            }
        });
    }




function initMusic() {
    for(let el of audio) {
        el.pause();
        el.load();
        el.parentElement.previousElementSibling.classList.remove("on");
    }
}


prev.addEventListener("click", ()=> {
    initMusic()
    num++;
    frame.style.transform = `rotate(${deg * num}deg)`;
    (active == 0 ) ? active = len : active--;
    activation(active, lists);
});

next.addEventListener("click", ()=> {
    initMusic()
    num--;
    frame.style.transform = `rotate(${deg * num}deg)`;
    (active == len ) ? active = 0 : active++;
    activation(active, lists);
});



