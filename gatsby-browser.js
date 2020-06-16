// import './src/styles/global.css';
require ('./src/styles/global.css');
// require ('./node_modules/bootstrap/dist/css/bootstrap.css');
require ('./src/styles/style.css');
require ('./src/styles/styleSwitcher.css');
// require('./static/js/script.js');
// require('./static/js/styleSwitcher.js');
// require ('./src/styles/skins/blue.css');
// require ('./src/styles/skins/green.css');
// require ('./src/styles/skins/orange.css');
// require ('./src/styles/skins/pink.css');
// require ('./src/styles/skins/yellow.css');
// export const onServiceWorkerUpdateReady = () => window.location.reload();

// exports.onPreRouteUpdate = () => {
//   console.log("Erasing scripts!")
//   let head = document.getElementsByTagName('head')[0];
//   let scripts = head.getElementsByTagName('script');
//   for(let i=0;i<scripts.length;i++){
//       if(scripts[i].type==="text/javascript"){
//           head.remove(scripts[i])
//       }
//   }
// }

exports.onPreRouteUpdate = () => {
  // console.log('pre-change!')
  // function clearScripts() {
  //   let styleSwitcher = document.getElementById("styleSwitcher");
  //   let script = document.getElementById("script");
  //   styleSwitcher.parentNode.removeChild(styleSwitcher);
  //   script.parentNode.removeChild(script);
  // }
  // setInterval (
  //   function clearScripts() {
  //     let styleSwitcher = document.getElementById("styleSwitcher");
  //     let script = document.getElementById("script");
  //     styleSwitcher.remove();
  //     script.remove()
  //   }, 2000);
  // window.location.reload()
}

exports.onRouteUpdate = () => {
  // function switchColorStorage(color) {
  //   const links = document.querySelectorAll('.alternate-style');
  //   const totalLinks=links.length;

  //   for(let i=0;i<totalLinks;i++){
  //     if(color === links[i].getAttribute('title')){
  //         links[i].removeAttribute("disabled");
  //         console.log(links[i].title, 'not disabled');
  //     } else {
  //         links[i].setAttribute("disabled","true");
  //         console.log(links[i].title, 'disabled');
  //     }
  //   }
  // }
  // if(localStorage.getItem("selectedBodySkinColor")){
  //   switchColorStorage(localStorage.getItem("selectedBodySkinColor"));
  // } else {
  //   switchColorStorage('blue');
  // }
  // console.log('onRouteUpdate!');
  // setTimeout (function reloadScripts(){
  //   let head = document.getElementsByTagName('head')[0];

  //   let script = document.createElement('script');
  //   script.src = 'js/script.js';
  //   script.type = 'text/javascript';
  //   script.id = 'script';

  //   let styleSwitcher = document.createElement('script');
  //   styleSwitcher.src = 'js/styleSwitcher.js';
  //   styleSwitcher.type = 'text/javascript';
  //   styleSwitcher.id = 'styleSwitcher';

  //   head.appendChild(script);
  //   head.appendChild(styleSwitcher);    
  // }, 2000);



  // setInterval (function reloadScripts(){
  //   let head = document.getElementsByTagName('head')[0];

  //   let script = document.createElement('script');
  //   script.src = 'js/script.js';
  //   script.type = 'text/javascript';
  //   script.id = 'script';

  //   let styleSwitcher = document.createElement('script');
  //   styleSwitcher.src = 'js/styleSwitcher.js';
  //   styleSwitcher.type = 'text/javascript';
  //   styleSwitcher.id = 'styleSwitcher';

  //   head.appendChild(script);
  //   head.appendChild(styleSwitcher);    

  //   let styleSwitcherElement = document.getElementById("styleSwitcher");
  //   let scriptElement = document.getElementById("script");

  //   if((styleSwitcherElement.classList.length) && (scriptElement.classList.length)){
  //     console.log('all good!');
  //     return;
  //   } else {
  //     window.location.reload();
  //     return;
  //   }}, 2000)

  // setTimeout (function reloadScripts(){

  //   let styleSwitcher = document.getElementById("styleSwitcher");
  //   let script = document.getElementById("script");
  //   if((styleSwitcher.classList.length) && (script.classList.length)){
  //     console.log('all good!');
  //     return;
  //   } else {
  //     window.location.reload()
  //   }}, 2000)

  // if(document.anotherLogoTest){
  //   console.log('styleSwitcher ok!');
  // }
  // if(document.logoTest){
  //   console.log('script ok!');
  // }
  // if(document.logoTest && anotherLogoTest){
  //   console.log('Both scripts ok!')
  // }
    // console.log('Reloading Gatsby browser!');
    // // window.location.reload()
    // let head = document.getElementsByTagName('head')[0];
    // // let scripts = head.getElementsByTagName('script');
    // // for(let i=0;i<scripts.length;i++){
    // //     if(scripts[i].type==="text/javascript"){
    // //         head.remove(scripts[i])
    // //     }
    // // }
    // let script = document.createElement('script');
    // script.src = 'js/script.js';
    // let styleSwitcher = document.createElement('styleSwitcher');
    // styleSwitcher.src = 'js/styleSwitcher.js';
    // head.appendChild(script);
    // head.appendChild(styleSwitcher);
  }

// Working version:
  // exports.onRouteUpdate = () => {
  //   console.log('onRouteUpdate!');
  //   setTimeout (function reloadScripts(){
  
  //     let styleSwitcher = document.getElementById("styleSwitcher");
  //     let script = document.getElementById("script");
  //     if((styleSwitcher.classList.length) && (script.classList.length)){
  //       console.log('all good!');
  //       return;
  //     } else {
  //       window.location.reload()
  //     }}, 2000)
  //   }