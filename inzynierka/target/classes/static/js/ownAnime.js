function main(){
var cssSelector = anime({
    targets: '#cssSelector .el',
    translateX: 1140,
    direction: 'alternate',
    delay: function(el, i, l) {
        return i * 100;
    },
    easing: 'easeInOutQuad'
});
}

document.addEventListener("DOMContentLoaded", main);