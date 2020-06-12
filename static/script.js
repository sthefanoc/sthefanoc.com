const logoTest = document.querySelector(".logo");
if(logoTest){
    logoTest.addEventListener("mouseenter",() => {
        console.log('Script file!');
})
};

const lalala = function (){
    console.log('agora vai!')
}
let btns = document.querySelectorAll(".btn");
if(btns.length){
    btns[0].addEventListener("click", () => {
        lalala();
    })
}


// Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns=filterContainer ? filterContainer.children : 0;
const totalFilterBtn=filterBtns.length;
const portfolioItems=document.querySelectorAll(".portfolio-item");
const totalPortfolioItems=portfolioItems.length;

for (let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click",function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue=this.getAttribute('data-filter');
        for (let k=0; k<totalPortfolioItems; k++){
            if(filterValue === 'all' || filterValue === portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.add("show");
                portfolioItems[k].classList.remove("hide");
            } else {
                portfolioItems[k].classList.add("hide");
                portfolioItems[k].classList.remove("show");
            }
        }

    });
};

// Portfolio Lightbox

    const lightbox = document.querySelector(".lightbox");
    const lightboxImg=document.querySelector(".lightbox-img");
    const lightboxClose=document.querySelector(".lightbox-close");
    const lightboxText=document.querySelector(".caption-text");
    const lightboxCounter=document.querySelector(".caption-counter");
    let itemIndex=0;

    for(let i=0; i<totalPortfolioItems;i++){
        portfolioItems[i].addEventListener("click", function(){
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    }

    const prevItem = function(){
        if(itemIndex === 0){
            itemIndex=totalPortfolioItems-1;
        } else {
            itemIndex--
        }
        changeItem();
    }
    const nextItem = function (){
        if(itemIndex === totalPortfolioItems-1){
            itemIndex=0;
        } else {
            itemIndex++
        }
        changeItem();
    }

    const toggleLightbox = function (){
        lightbox.classList.toggle("open");
    }
    const changeItem = function (){
        const imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        const imgAlt=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("alt");
        lightboxImg.src=imgSrc;
        lightboxImg.alt=imgAlt;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItems;
    }

    const nextItems = document.querySelectorAll(".next-item");
    if(nextItems.length){
        for(let n=0;n<nextItems.length;n++){
            nextItems[n].addEventListener("click", ()=> {
                nextItem();
            })
        }
    }

    const prevItems = document.querySelectorAll(".prev-item");
    if(prevItems.length){
        for(let n=0;n<prevItems.length;n++){
            prevItems[n].addEventListener("click", ()=> {
                nextItem();
            })
        }
    }

// close lightbox

if (lightbox){
    lightbox.addEventListener("click", function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
    })
}

// Aside navbar

// const nav=document.querySelector('.nav');
// const navList=nav ? nav.querySelectorAll('a') : [];
// const totalNavList=navList.length;
// for (let k=0;k<totalNavList;k++){
//     const a=navList[k].querySelector("a");
    
//     a.addEventListener("click",() => {
//         for(let l=0;l<totalNavList;l++){
//             navList[l].querySelector("a").classList.remove("active");
//         }
//         const sectionList=document.querySelectorAll(".section");
//         for(let m=0;m<sectionList.length;m++){
//             if(sectionList[m].id === a.href.split("#")[1]){
//                 sectionList[m].classList.remove("hidden");
//             } else {
//                 sectionList[m].classList.add("hidden");
//             }
//         }

//         a.classList.add("active");
//         if(window.innerWidth < 1200){
//             asideSectionTogglerBtn();
//         }
//     })
// }

const navTogglerBtn=document.querySelector(".nav-toggler");
const aside=document.querySelector(".aside");

if(navTogglerBtn){
    navTogglerBtn.addEventListener("click",() => {
        asideSectionTogglerBtn();
})
}

const asideSectionTogglerBtn = function (){
    const sectionList=document.querySelectorAll(".section");
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0;i<sectionList.length;i++){
        sectionList[i].classList.toggle("open");
    }
}

const highlightCurrentPage = async () => {
    await new Promise((resolve)=>setTimeout(() => {
        let currentPage='';
        if(window.location.pathname !== "/"){
            currentPage = window.location.pathname.split("/")[1]
        } else {
            currentPage = "home";
        };
        let currentPageClass = currentPage + "-link";
        document.getElementsByClassName(currentPageClass)[0].setAttribute("aria-current", "page");
        resolve();
    }, 2000)); 
}

highlightCurrentPage();