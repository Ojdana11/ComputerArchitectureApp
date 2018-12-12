var checker = function () {};
checker.checkCategory = function (object) {

        var elements = document.getElementsByClassName("task_category");

        for(var i=0; i<elements.length;i++){
            elements[i].style.backgroundColor = "black";
        }
        object.style.backgroundColor = "#5d706e";

}


checker.checkUsersAnswer = function (element_id){

    var number_of_boxes = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var operation_type = document.getElementById("operation_type").value;

    if(operation_type==="/" && element_id ==="the_c_no_"){
        document.getElementById("fieldsForC").innerHTML = "";
    }
    if(operation_type === "*") number_of_boxes = number_of_boxes*2;

    for(var i=0; i<number_of_boxes+1; i++){
        if(document.getElementById(element_id+i)!== null){

            if((document.getElementById(element_id+i).name !== document.getElementById(element_id+i).value) && document.getElementById(element_id+i).name!=="NaN")
            {
                if(document.getElementById("popup_"+element_id+i) === void 0){
                    document.getElementById(element_id+i).outerHTML =
                        '<div class="popup" onclick="shower.showPrompt(\'popup_'+element_id+i+'\')">' +
                        '<input class="letter" type="number" id="'+element_id+i+'" name="'+document.getElementById(element_id+i).name+
                        '" value="'+document.getElementById(element_id+i).value+'">' +
                        '<span class="popuptext" id="'+'popup_'+element_id+i+'"></span>' +
                        '</div>';
                }
                document.getElementById(element_id+i).setAttribute("style", "border-color: #951611;");
                document.getElementById("popup_"+element_id+i).innerHTML = document.getElementById(element_id+i).name;

            }
            else{
                if(document.getElementById(element_id+i).name!=="NaN") {
                    document.getElementById(element_id+i).innerHTML =
                        '<input class="letter" type="number" id="'+element_id+i+'" name="'+document.getElementById(element_id+i).name+'">';
                    document.getElementById(element_id+i).setAttribute("style", "border-color: #098C2F;");
                }

            }
        }

    }
}