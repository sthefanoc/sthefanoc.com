import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import { withPrefix } from "gatsby";
import { Component } from "react";
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faGlobe, faMobile, faFileAlt, faRocket, faCogs, faLaptop, faMousePointer, faAngleLeft, faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle, faReact } from '@fortawesome/free-brands-svg-icons';

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
              const dataCategories = portfolioItems[k].getAttribute("data-category");
                if(filterValue === 'all' || portfolioItems[k].getAttribute('data-category').replace(/\s/g, '').split(',').includes(filterValue)){
                    portfolioItems[k].classList.add("show");
                    portfolioItems[k].classList.remove("hide");
                } else {
                    console.log('filtered',filterValue);
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
    const lightboxDate=document.querySelector('.project-date');
    const lightboxDescription=document.querySelector('.project-description');
    const lightboxTechnologies=document.querySelector('.project-tech');
    const lightboxGithubRepo=document.querySelector('#github_repo');
    const lightboxLiveVersion=document.querySelector('#live_version');
    const lightboxBlogPost=document.querySelector('#blogpost');
    
    let itemIndex;
    let filteredItems;
    let filteredItem;
    let dataValue;
    let dataValues;
  

    for(let i=0; i<totalPortfolioItems;i++){
        portfolioItems[i].addEventListener("click", function(){
            itemIndex=i;
            filteredItems = Boolean(document.querySelectorAll('.portfolio-item.show').length) ? document.querySelectorAll('.portfolio-item.show') : document.querySelectorAll('.portfolio-item');
            console.log('filtered',filteredItems);
            filteredItem = portfolioItems[i];
            dataValues =[];
            for(let j=0;j<filteredItems.length;j++){
              dataValues.push(filteredItems[j].getAttribute('data-value'))
            }
            dataValue = portfolioItems[i].getAttribute('data-value');
            // dataValues = queryS
            console.log('daata-value', dataValue);
            console.log('daata-values', dataValues);
            changeItem();
            toggleLightbox();
        })
    }

    const prevItem = function(){
        if(filteredItems.length>1){
            let index = dataValues.indexOf(dataValue);
            if(index){
              dataValue=dataValues[index-1]
              filteredItem=filteredItems[index-1]
            } else{
              dataValue=dataValues[filteredItems.length-1]
              filteredItem=filteredItems[filteredItems.length-1]
            }
        }
        changeItem();
    }
    const nextItem = function (){
      if(filteredItems.length>1){
        let index = dataValues.indexOf(dataValue);
        if(index<filteredItems.length-1){
          dataValue=dataValues[index+1]
          filteredItem=filteredItems[index+1]
        } else{
          dataValue=dataValues[0]
          filteredItem=filteredItems[0]
        }
    }
    changeItem();
    }

    const toggleLightbox = function (){
        lightbox.classList.toggle("open");
    }

    
    const changeItem = function (){
        
        // const changedItem = filteredItems.querySelector();
        const imgSrc=filteredItem.querySelector(".portfolio-img img").getAttribute("data-detailedSrc");
        // const imgSrc=withPrefix(`portfolio/${filteredItem.getAttribute('detailed_image_name')}`);

        // const imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        const imgAlt=filteredItem.querySelector(".portfolio-img img").getAttribute("data-detailedAlt");
        // const imgAlt=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("alt");

        
        lightboxImg.src=imgSrc;
        lightboxImg.alt=imgAlt;
        lightboxDate.innerHTML=filteredItem.getAttribute('data-date');
        console.log('date is',lightboxDate.innerHTML);
        lightboxText.innerHTML=filteredItem.getAttribute('data-title');
        console.log('lightboxText',lightboxText.innerHTML);
        // lightboxText.innerHTML=filteredItem.querySelector("h4");
        lightboxCounter.innerHTML= (dataValues.indexOf(dataValue)+1) + " of " + filteredItems.length || 6;
        lightboxDescription.innerHTML=filteredItem.getAttribute("data-content");
        let techsUsed = filteredItem.getAttribute('data-techs_used').replace(/\s/g, '').split(',');
        let finalTechnologies='';
        for(let i=0;i<techsUsed.length;i++){
          finalTechnologies = finalTechnologies + techsUsed[i] + ' // ' 
        }
        lightboxTechnologies.innerHTML=finalTechnologies;
        if(filteredItem.getAttribute('data-github')){
          lightboxGithubRepo.classList.remove('hidden');
          lightboxGithubRepo.href = filteredItem.getAttribute('data-github');
        } else {
          lightboxGithubRepo.classList.add('hidden');
        }

        if(filteredItem.getAttribute('data-live-version')){
          lightboxLiveVersion.classList.remove('hidden');
          lightboxLiveVersion.href = filteredItem.getAttribute('data-live-version');
        } else {
          lightboxLiveVersion.classList.add('hidden');
        }

        if(filteredItem.getAttribute('data-blogpost')){
          lightboxBlogPost.classList.remove('hidden');
          lightboxBlogPost.href = filteredItem.getAttribute('data-blogpost');
        } else {
          lightboxBlogPost.classList.add('hidden');
        }
         
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
    const { data } = this.props;
    
    // const projectsDatabase = OfflineProjects;
    let keyGenerator = -1;

    // When WP is fixed
    const projectsDatabase = []
    for(let i=0;i<data.allWordpressWpProjectItem.edges.length;i++){
      projectsDatabase.push(data.allWordpressWpProjectItem.edges[i].node)
    }
    console.log('ProjectsDB',projectsDatabase);

    const mediaDatabase = [];
    for(let i=0;i<data.allWordpressWpMedia.edges.length;i++){
      mediaDatabase.push(data.allWordpressWpMedia.edges[i].node)
    }
    console.log('MediaDB',mediaDatabase);

    for(let i=0;i<projectsDatabase.length;i++){
      let wpId = projectsDatabase[i].portfolio_item_image;
      let filteredImg = mediaDatabase.filter((media)=>{return media.wordpress_id == wpId})[0];
      projectsDatabase[i].imgSrc = filteredImg.localFile.childImageSharp.fixed.src;
      console.log('SRC is',filteredImg.localFile.childImageSharp.fixed.src);
      projectsDatabase[i].imgAlt = filteredImg.localFile.childImageSharp.fixed.originalName;
      console.log('ALT is',filteredImg.localFile.childImageSharp.fixed.originalName);

      let wpIdDetailed = projectsDatabase[i].detailed_item_image;
      let filteredImgDetailed = mediaDatabase.filter((media)=>{return media.wordpress_id == wpIdDetailed})[0];
      projectsDatabase[i].imgSrcDetailed = filteredImgDetailed.localFile.childImageSharp.fixed.src;
      console.log('SRC det is',filteredImgDetailed.localFile.childImageSharp.fixed.src);
      projectsDatabase[i].imgAltDetailed = filteredImgDetailed.localFile.childImageSharp.fixed.originalName;
      console.log('ALT det is',filteredImgDetailed.localFile.childImageSharp.fixed.originalName);
    }
    console.log('ProjectsDBComplete',projectsDatabase);

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
              <button type="button" data-filter="frontend">Frontend</button>
              <button type="button" data-filter="backend">Backend</button>
              <button type="button" data-filter="mobile">Mobile</button>
              <button type="button" data-filter="other">Other</button>
            </div>
          </div>
          <div className="row portfolio-items">
          {projectsDatabase.map(node => (
            // Portfolio Item start
            <div 
              className="portfolio-item padd-15" 
              data-category={node.programming_category} 
              data-value={keyGenerator+=1} 
              data-title={node.title} 
              data-date={node.date} 
              data-content={node.content}
              data-detailed-image={node.detailed_image_name} 
              data-techs_used={node.technologies_used} 
              data-github={node.github_repo} 
              data-live-version={node.live_project} 
              data-blogpost={node.blog_post} 
              data-priority={node.is_priority_portfolio_item} 
              >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  {/* <img src={withPrefix(`portfolio/${node.image_name}`)} alt={node.title} /> */}
                  <img
                    src={node.imgSrc}
                    alt={node.title}
                    data-detailedSrc = {node.imgSrcDetailed}
                    data-detailedAlt = {node.title + ' detailed'}
                  />
                  {/* <img src={node.featured_media.localFile.childImageSharp.fixed.src} alt={node.featured_media.localFile.childImageSharp.fixed.originalName} /> */}
                  {/* <ProjectImage media_id={node.portfolio_item_image} /> */}
                  
                </div>
                <div className="portfolio-info">
                  <h4>{node.short_name}</h4>
                  <div className="icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
              </div>
            </div>
            // Portfolio Item end
          ))}
            
            
            
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
              <div className="project-date">Someday</div>
              <div className="project-description">This is a great project that does things and such. And it's really amazing and incredible and full of programming features.</div>
              <div className="project-tech">Python // Javascript // Selenium // TDD</div>
              <div className="project-links">
                {/* <ReactTooltip /> */}
                <a href="https://github.com/sthefanoc/" data-tip="Github Repository" id="github_repo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} title="Github code"/></a>
                <a href="https://github.com/sthefanoc/" id="live_version" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} title="Live version"/></a>
                <a href="https://github.com/sthefanoc/" id="blogpost" ><FontAwesomeIcon icon={faFileAlt} title="Blog post"/></a>
              </div>
            </div>
          </div>
          <div className="lightbox-controls">
            <div className="prev-item" ><FontAwesomeIcon icon={faAngleLeft} /></div>
            <div className="next-item" ><FontAwesomeIcon icon={faAngleRight} /></div>
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


export const query = graphql`
{
  allWordpressWpProjectItem(sort: {fields: date, order: DESC}) {
    edges {
      node {
        title
        short_name
        content
        date(formatString: "MMMM DD, YYYY")
        programming_category
        technologies_used
        blog_post
        github_repo
        live_project
        portfolio_item_image
        detailed_item_image
        image_name
        detailed_image_name
        is_priority_portfolio_item
      }
    }
  }
  allWordpressWpMedia {
    edges {
      node {
        wordpress_id
        localFile {
          childImageSharp {
            fixed(width: 400, height: 325) {
              src
              width
              height
              originalName
            }
          }
        }
      }
    }
  }
}
`