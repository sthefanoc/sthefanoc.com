const anotherLogoTest = document.querySelector(".logo");
if(anotherLogoTest){
    anotherLogoTest.addEventListener("mouseenter",() => {
        console.log('aeee novo arquivo');
})
};
// color selection
const links = document.querySelectorAll('.alternate-style');
const totalLinks=links.length;

// function setActiveStyle(color){
//     for(let i=0;i<totalLinks;i++){
//         console.log(color);
//         if(color === links[i].getAttribute('title')){
//             links[i].removeAttribute("disabled");
//             console.log('yes!')
//         } else {
//             links[i].setAttribute("disabled","true");
//             console.log('no...')
//         }
//     }
// }

const setActiveStyle = function (color){
    for(let i=0;i<totalLinks;i++){
        console.log(color);
        if(color === links[i].getAttribute('title')){
            console.log('yes!')
        } else {
            console.log('no...')
        }
    }
}
// skin selection
const bodySkin=document.querySelectorAll(".body-skin");
const totalBodySkin=bodySkin.length;
for(let j=0;j<totalBodySkin;j++){
    bodySkin[j].addEventListener("change", function(){
        if(this.value === 'dark'){
            document.body.className="dark"
        } else {
            document.body.className=""
        }
    })
}

if(document.querySelector(".toggle-style-switcher")){
    document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    })
}