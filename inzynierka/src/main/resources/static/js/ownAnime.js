function main(){
var cssSelector = anime({
    targets: '#cssSelector .el',
    translateX: 250,
    easing: 'easeInOutQuad'
});
}

document.addEventListener("DOMContentLoaded", main);