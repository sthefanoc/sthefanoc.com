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

    function prevItem(){
        if(itemIndex === 0){
            itemIndex=totalPortfolioItems-1;
        } else {
            itemIndex--
        }
        changeItem();
    }
    function nextItem(){
        if(itemIndex === totalPortfolioItems-1){
            itemIndex=0;
        } else {
            itemIndex++
        }
        changeItem();
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }
    function changeItem(){
        const imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItems;
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
const nav=document.querySelector('.nav');
const navList=nav.querySelectorAll('li');
const totalNavList=navList.length;
for (let k=0;k<totalNavList;k++){
    const a=navList[k].querySelector("a");
    
    a.addEventListener("click",() => {
        for(let l=0;l<totalNavList;l++){
            navList[l].querySelector("a").classList.remove("active");
        }
        const sectionList=document.querySelectorAll(".section");
        for(let m=0;m<sectionList.length;m++){
            if(sectionList[m].id === a.href.split("#")[1]){
                sectionList[m].classList.remove("hidden");
            } else {
                sectionList[m].classList.add("hidden");
            }
        }

        a.classList.add("active");
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

const navTogglerBtn=document.querySelector(".nav-toggler");
const aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click",() => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    const sectionList=document.querySelectorAll(".section");
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0;i<sectionList.length;i++){
        sectionList[i].classList.toggle("open");
    }
}