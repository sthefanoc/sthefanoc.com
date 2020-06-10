const clickWorks = function () {
    const bodyPage = document.querySelector("body");
    if(bodyPage){
        bodyPage.addEventListener("click",() => {
            alert('clicou legal!');
    })
    };
}



