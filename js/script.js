function mudadisplay(nav){
    document.querySelector('.menu').style.display = 'grid'
}

function fechamenu(){
    document.querySelector('.menu').style.display = 'none'

}

function clickpost(){
    document.querySelector('.corpo').style.opacity = "0.2"
    document.querySelector('.home-content').style.marginTop = "80px"
}
function voltapost(){
    document.querySelector('.corpo').style.opacity = "1"
    document.querySelector('.home-content').style.marginTop = "150px"
    

}