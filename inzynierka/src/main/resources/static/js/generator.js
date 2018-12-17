var generator = function(){};

generator.generateBoxesForUsersTask = function (){
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

generator.generateArguments = function ()
{
    document.getElementById("other_operation_divs").style.display = "inline";
    document.getElementById("division").style.display = "none";
    var base = parseInt(document.getElementById("system_base_for_generate_task").value);
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var arguments_number = parseInt(document.getElementById("arg_number_for_generate_task").value);
    var operation_type = document.getElementById("operation_type").value;

    if(operation_type==="/") {
        generator.generateInputBoxesDivision();
        return;
    }
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
        divs_content = divs_content + '<div class="letter">' +"("+ agloHelpers.checkExtension(arg_last,arg_second_last, base) +")"+'</div>';
        divs_content = divs_content + '<div style="clear:both;"></div>';
    }

    arg_last = arg_data[1].length;
    arg_second_last = arg_data[0].length;
    document.getElementById("arguments").innerHTML = divs_content;
    //[0] - cs, [1] -s
    var final_results = algorithm.countResults(arg_data, max_args_size+1, base);

    switch(operation_type){
        case "*":
            generator.generateInputBoxes(final_results[0][1],"results",(arg_last+arg_second_last+2), "res_no_", "letter");
            generator.generateInputBoxes(final_results[0][0],"fieldsForC", (arg_last+arg_second_last+2), "the_c_no_", "letter");
            divs_content = "";
            for(var i=0;i<arg_last+1;i++){
                for(var j=0; j<max_args_size+1+i;j++)
                {
                    divs_content = divs_content + '<input class="letter" type="number" id="'+"partial_no_"+j+'" name="'+arg_data[1][j]+'" value="'+final_results[1][i][j] +'">';
                }
                divs_content = divs_content + '<div style="clear:both;"></div>';
            }
            document.getElementById("partial").innerHTML = divs_content;
            break;

        case "+" || "-":
            generator.generateInputBoxes(final_results[1],"results",max_args_size+1, "res_no_", "letter");
            generator.generateInputBoxes(final_results[0],"fieldsForC", max_args_size+1, "the_c_no_", "letter");
            document.getElementById("partial").innerHTML = "";
            break;

    }
}

generator.generateInputBoxes = function (array_with_data, element_id ,number_of_boxes, id_names, className){
    var divs_content = "";
    for(var i=0; i<number_of_boxes;i++)
    {
        divs_content = divs_content + '<input class="'+className+'" type="number" id="'+id_names+i+'" name="'+array_with_data[i]+'" value="'+array_with_data[i] +'">';
    }
    divs_content = divs_content + '<div style="clear:both;"></div>';
    document.getElementById(element_id).innerHTML = divs_content;
}


generator.generateAnswersBoxes = function (array_with_data, element_id ,number_of_boxes){
    var divs_content = "";
    for(var i=0; i<number_of_boxes;i++)
    {
        divs_content = divs_content + '<div class="letter">'+array_with_data[i]+'</div>';
    }
    divs_content = divs_content + '<div style="clear:both;"></div>';
    document.getElementById(element_id).innerHTML = divs_content;
}

generator.generateInputBoxesDivision = function(){
    var base = parseInt(document.getElementById("system_base_for_generate_task").value);
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var arguments_number = parseInt(document.getElementById("arg_number_for_generate_task").value);
    document.getElementById("division").style.display = "inline";
    document.getElementById("other_operation_divs").style.display = "none";

    var arg_data = [];
    var divs_content = "";
    var arg_last, arg_second_last;
    for(var i=0; i<arguments_number;i++) {arg_data[i]=[]}


        var arg_size = Math.floor((Math.random() * 4) + 1);
        for(var index=0;index<arg_size;index++)
        {
            arg_data[0][index] = Math.floor(Math.random()*base);
            divs_content = divs_content + '<div class="letter">' + arg_data[0][index] +'</div>';
        }

        arg_last = arg_data[0][arg_data[0].length-1];
        arg_second_last = arg_data[0][arg_data[0].length-2];
        divs_content = divs_content + '<div class="letter">' +"("+ agloHelpers.checkExtension(arg_last,arg_second_last, base) +")"+'</div>';
        divs_content = divs_content + '<div class="letter">' +"/"+'</div>';


         arg_size = 8;
        for(var index=0;index<arg_size;index++)
        {
            arg_data[1][index] = Math.floor(Math.random()*base);
            divs_content = divs_content + '<div class="letter">' + arg_data[1][index] +'</div>';
        }

        arg_last = arg_data[1][arg_data[1].length-1];
        arg_second_last = arg_data[1][arg_data[1].length-2];
        divs_content = divs_content + '<div class="letter">' +"("+ agloHelpers.checkExtension(arg_last,arg_second_last, base) +")"+'</div>';


    var divisor_extension =  agloHelpers.checkExtension(arg_data[0][arg_data[0].length-1],arg_data[0][arg_data[0].length-2], base);
    var dividend_extension =  agloHelpers.checkExtension(arg_data[1][arg_data[1].length-1],arg_data[1][arg_data[1].length-2], base);;

    arg_last = arg_data[1].length;
    arg_second_last = arg_data[0].length;
    document.getElementById("division_arguments").innerHTML = divs_content;
    //[0] - cs, [1] -s
    var final_results = algorithm.countResults(arg_data, max_args_size+1, base);

    var move_result =arg_second_last+1;
    var constant_partial_move=80;
    if(divisor_extension===0 && divisor_extension===dividend_extension)
    {
        constant_partial_move=40;
    }
    if(divisor_extension!== dividend_extension){
        constant_partial_move=0;
    }


    generator.generateInputBoxes(final_results[1],"division_results",(final_results[1].length), "res_no_", "letter");
    document.getElementById("division_results").style.marginLeft = 42*(move_result)+constant_partial_move+"px";
            divs_content = "";
            final_results[1].reverse();
            for(var i=0;i<final_results[2].length-1;i++){
                divs_content = divs_content +  '<div class="partial_operation_div" style="margin-left:'+((i*42)+constant_partial_move) +'px; border-bottom: 2px solid white">'
                final_results[2][i].reverse();
                for(var j=0; j<final_results[2][i].length;j++)
                {
                    divs_content = divs_content + '<input class="division_letter" type="number" id="'+"partial_no_"+j+'" name="'+0+'" value="'+final_results[2][i][j]+'">';
                    /*divs_content = divs_content + '<input class="division_letter" type="number" id="'+"partial_no_"+j+'" name="'+arg_data[1][j]+'" value="'+final_results[1][i][j] +'">';*/
                }
                divs_content = divs_content + '<div style="clear:both;"></div>';
                final_results[3][final_results[1][i]].reverse();

                for(var j=0; j<final_results[3][0].length;j++)
                {
                    divs_content = divs_content + '<input class="division_letter" type="number" id="'+"partial_no_"+j+'" name="'+0+'" value="'+final_results[3][final_results[1][i]][j]+'">';
                    /*divs_content = divs_content + '<input class="division_letter" type="number" id="'+"partial_no_"+j+'" name="'+arg_data[1][j]+'" value="'+final_results[1][i][j] +'">';*/
                }
                divs_content = divs_content + '<div style="clear:both;"></div>';
                divs_content = divs_content +  '</div>'
            }
           document.getElementById("division_partial").innerHTML = divs_content;

}





