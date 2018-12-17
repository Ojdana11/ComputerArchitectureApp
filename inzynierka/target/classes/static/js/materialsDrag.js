function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.target.setAttribute('value',document.getElementById(data).getAttribute('value'));
    document.getElementById(data).style.margin = "2px";
}

function checkAnswers(){
var answers = document.getElementsByClassName('draggable');
    Array.prototype.forEach.call(answers,function (t) {
    if(t.getAttribute('value')==t.getAttribute('name'))
        t.style.backgroundColor = "#7AB54B";
    else{
        t.style.backgroundColor = "#95452B";
    }
});
}

function resetAnswers(ev){
    var answers = document.getElementsByClassName('droppable');
    var draggable = document.getElementsByClassName('draggable');
    var elementZero = document.getElementById("zero");

    Array.prototype.forEach.call(answers,function (t) {
        elementZero.appendChild(t);
    });
    Array.prototype.forEach.call(draggable,function (t) {
        t.value = "";
        t.style.backgroundColor = "#8cb589";
    });

}

function drawAlgoExample(ev){

}
