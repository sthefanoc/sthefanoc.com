import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import { withPrefix } from "gatsby";
import { Component } from "react";

class Project extends Component {
  componentDidMount() {
    console.log('This is the Projects page');
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
                prevItem();
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
  }
  render() {
  return (
    <PrimaryLayout>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h1>Portfolio</h1>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button className="active" type="button" data-filter="all">All</button>
              <button type="button" data-filter="python">Python</button>
              <button type="button" data-filter="javascript">Javascript</button>
              <button type="button" data-filter="reactjs">ReactJS</button>
              <button type="button" data-filter="react-native">React Native</button>
            </div>
          </div>
          <div className="row portfolio-items">
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="python">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={withPrefix('portfolio/1.jpg')} alt="Project #1" />
                </div>
                <div className="portfolio-info">
                  <h4>Project number #1</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="reactjs">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={withPrefix('portfolio/2.jpg')} alt="Project #2" />
                </div>
                <div className="portfolio-info">
                  <h4>Another project day</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="javascript">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={withPrefix('portfolio/3.jpg')} alt="Project #3" />
                </div>
                <div className="portfolio-info">
                  <h4>Crazy Javascript project</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="python">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={withPrefix('portfolio/4.jpg')} alt="Project #4" />
                </div>
                <div className="portfolio-info">
                  <h4>Such pythoh</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="react-native">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={withPrefix('portfolio/5.jpg')} alt="Project #5" />
                </div>
                <div className="portfolio-info">
                  <h4>Many programming</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
            {/* <!-- Portfolio Item start --> */}
            <div className="portfolio-item padd-15" data-category="reactjs">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={withPrefix('portfolio/6.jpg')} alt="Project #6" />
                </div>
                <div className="portfolio-info">
                  <h4>WOW</h4>
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Portfolio Item end --> */}
          </div>
        </div>
        {/* <!-- Lightbox start --> */}
        <div className="lightbox">
          <div className="lightbox-content">
            <div className="lightbox-close">&times;</div>
            <img src="images/portfolio/1.jpg" alt="Name of The Project" className="lightbox-img next-item" />
            <div className="lightbox-caption">
              <div className="caption-text">Project # 1</div>
              <div className="caption-counter">1 of 6</div>
            </div>
          </div>
          <div className="lightbox-controls">
            <div className="prev-item" ><i className="fa fa-angle-left"></i></div>
            <div className="next-item" ><i className="fa fa-angle-right"></i></div>
          </div>
        </div>
        {/* <!-- Lightbox end --></div> */}
        {/* JS Template */}
        {/* <script src={withPrefix('js/script.js')} type="text/javascript"></script> */}
        {/* JS StyleSwitcher */}
        {/* <script src={withPrefix('js/styleSwitcher.js')} type="text/javascript"></script> */}
      </section>
    </PrimaryLayout>
  )}
};

export default Project;