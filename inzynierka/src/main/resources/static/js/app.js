var the_c_element_id = "the_c_no_";
var the_s_element_id = "res_no_";
/*add min="1" max="999" to input */
function showAnswer(task_id) {
    var x = document.getElementById(task_id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

function generateBoxesForUsersTask(){
    var divs_content = "";
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);

    for(var i=0; i<max_args_size;i++)
    {
        divs_content = divs_content + '<input class="letter" type="number" id="'+"arg_one_index_no_"+i+'">';
    }
    divs_content = divs_content + '<div style="clear:both;"></div>';
    for(var i=0; i<max_args_size;i++)
    {
        divs_content = divs_content + '<input class="letter" type="number" id="'+"arg_two_index_no_"+i+'">';
    }
    divs_content = divs_content + '<div style="clear:both;"></div>';
    document.getElementById("arguments").innerHTML = divs_content;
}

function generateArguments()
{
    var base = parseInt(document.getElementById("system_base_for_generate_task").value);
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var arguments_number = parseInt(document.getElementById("arg_number_for_generate_task").value);
    var operation_type = document.getElementById("operation_type").value;
    var arg_data = [];
    var divs_content = "";
    var arg_last, arg_second_last;
    for(var i=0; i<arguments_number;i++) {arg_data[i]=[]}

    for(var i=0; i<arguments_number;i++){
        var arg_size = Math.floor((Math.random() * max_args_size) + 1);
        for(var index=0;index<arg_size;index++)
        {
            arg_data[i][index] = Math.floor(Math.random()*base);
            divs_content = divs_content + '<div class="letter">' + arg_data[i][index] +'</div>';
        }

        arg_last = arg_data[i][arg_data[i].length-1];
        arg_second_last = arg_data[i][arg_data[i].length-2];
        divs_content = divs_content + '<div class="letter">' +"("+ algorithm.checkExtension(arg_last,arg_second_last, base) +")"+'</div>';
        divs_content = divs_content + '<div style="clear:both;"></div>';
    }

    arg_last = arg_data[1].length;
    arg_second_last = arg_data[0].length;
    document.getElementById("arguments").innerHTML = divs_content;
    //[0] - cs, [1] -s
    var final_results = algorithm.countResults(arg_data, max_args_size+1, base);

    if(operation_type == "*"){
        generateInputBoxes(final_results[0][1],"results",(arg_last+arg_second_last+2), "res_no_");
        generateInputBoxes(final_results[0][0],"fieldsForC", (arg_last+arg_second_last+2), "the_c_no_");
        var divs_content = "";
        for(var i=0;i<arg_last+1;i++){
            for(var j=0; j<max_args_size+1+i;j++)
            {
                divs_content = divs_content + '<input class="letter" type="number" id="'+"partial_no_"+j+'" name="'+arg_data[1][j]+'" value="'+final_results[1][i][j] +'">';
            }
            divs_content = divs_content + '<div style="clear:both;"></div>';
        }
        document.getElementById("partial").innerHTML = divs_content;
    }
    else{
        if(operation_type!=="/"){
            generateInputBoxes(final_results[1],"results",max_args_size+1, "res_no_");
            generateInputBoxes(final_results[0],"fieldsForC", max_args_size+1, "the_c_no_");
        }
        else{
            generateInputBoxes(final_results[1],"results", final_results[1].length, "res_no_");
        }
        document.getElementById("partial").innerHTML = "";
    }
}

function generateInputBoxes(array_with_data, element_id ,number_of_boxes, id_names){
    var divs_content = "";
    for(var i=0; i<number_of_boxes;i++)
    {
        divs_content = divs_content + '<input class="letter" type="number" id="'+id_names+i+'" name="'+array_with_data[i]+'" value="'+array_with_data[i] +'">';
    }
    divs_content = divs_content + '<div style="clear:both;"></div>';
    document.getElementById(element_id).innerHTML = divs_content;
}

function checkUsersAnswer(element_id){


    var number_of_boxes = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var operation_type = document.getElementById("operation_type").value;

    if(operation_type == "*") number_of_boxes = number_of_boxes*2;

    for(var i=0; i<number_of_boxes+1; i++){
        if(document.getElementById(element_id+i)!= null){

            if((document.getElementById(element_id+i).name != document.getElementById(element_id+i).value) && document.getElementById(element_id+i).name!="NaN")
            {
                if(document.getElementById("popup_"+element_id+i) == void 0){
                    document.getElementById(element_id+i).outerHTML =
                        '<div class="popup" onclick="showPrompt(\'popup_'+element_id+i+'\')">' +
                        '<input class="letter" type="number" id="'+element_id+i+'" name="'+document.getElementById(element_id+i).name+'">' +
                        '<span class="popuptext" id="'+'popup_'+element_id+i+'"></span>' +
                        '</div>';
                }
                document.getElementById(element_id+i).setAttribute("style", "border-color: #951611;");
                document.getElementById("popup_"+element_id+i).innerHTML = document.getElementById(element_id+i).name;

            }
            else{
                if(document.getElementById(element_id+i).name!="NaN") {
                    document.getElementById(element_id+i).innerHTML =
                        '<input class="letter" type="number" id="'+element_id+i+'" name="'+document.getElementById(element_id+i).name+'">';
                    document.getElementById(element_id+i).setAttribute("style", "border-color: #098C2F;");
                }

            }
        }

    }
}

function calculateUsersTask(){
    var base = parseInt(document.getElementById("system_base_for_generate_task").value);
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var operation_type = document.getElementById("operation_type").value;
    var arg_one =[], arg_two =[];

    for(var i=0; i<max_args_size;i++)
    {
        arg_one[i] = parseInt(document.getElementById("arg_one_index_no_"+i).value);
    }
    for(var i=0; i<max_args_size;i++)
    {
        arg_two[i] = parseInt(document.getElementById("arg_two_index_no_"+i).value);
    }
    var arguments = [arg_one, arg_two];
    var final_results  = algorithm.countResults(arguments, max_args_size+1, base);
    generateAnswersBoxes(final_results[1],"results", max_args_size+1, "res_no_");
    generateAnswersBoxes(final_results[0],"fieldsForC", max_args_size+1, "the_c_no_");
}

function generateAnswersBoxes(array_with_data, element_id ,number_of_boxes){
    var divs_content = "";
    for(var i=0; i<number_of_boxes;i++)
    {
        divs_content = divs_content + '<div class="letter">'+array_with_data[i]+'</div>';
    }
    divs_content = divs_content + '<div style="clear:both;"></div>';
    document.getElementById(element_id).innerHTML = divs_content;
}

////////////////////////// POP UPS /////////////////////////////////////

function showPrompt(element_id) {
    var popup = document.getElementById(element_id);
    popup.classList.toggle("show");


}



