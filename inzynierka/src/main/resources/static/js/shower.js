var shower = function () {};

shower.showAnswer = function (task_id) {
    var x = document.getElementById(task_id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

shower.showPrompt = function (element_id) {
    var popup = document.getElementById(element_id);
    popup.style.display = "block";


}

shower.showArgsNumberChoice = function (){
    var operation_type = document.getElementById("operation_type").value;
    if(operation_type === "*" || operation_type === "/")
    {
        document.getElementById("arg_number").style.display = "none";
        document.getElementById("arg_number_for_generate_task").value = 2;
    }
    else{
        document.getElementById("arg_number").style.display = "inline";
    };


}


shower.showElements = function (element_id) {

    for(var i=0;i<element_id.length;i++){
        document.getElementById(element_id[i]).style.display = "inline";
    }

    document.getElementById("fieldsForC").innerHTML ='';
    document.getElementById("arguments").innerHTML ='';
    document.getElementById("partial").innerHTML ='';
    document.getElementById("results").innerHTML ='';

}

shower.hideElements = function (element_id) {
    for(var i=0;i<element_id.length;i++){
        document.getElementById(element_id[i]).style.display = "none";
    }

}