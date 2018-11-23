function writeArguments()
{
    var base = parseInt(document.getElementById("system_base_for_generate_task").value);
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var arguments_number = parseInt(document.getElementById("arg_number_for_generate_task").value);
    var arg_data = [];
    var divs_content = "";
    for(var i=0; i<arguments_number;i++) {arg_data[i]=[]}
    for(var i=0; i<arguments_number;i++){

        var arg_size = Math.floor((Math.random() * max_args_size) + 1);

        for(var index=0;index<arg_size;index++)
        {
            arg_data[i][index] = Math.floor(Math.random()*base);
            divs_content = divs_content + '<div class="letter">' + arg_data[i][index] +'</div>';
        }
        divs_content = divs_content + '<div style="clear:both;"></div>';
    }

    document.getElementById("arguments").innerHTML = divs_content;
    //[0] - cs, [1] -s
     var final_results = countResults(arg_data, max_args_size+1, base);
    generateInputBoxes(final_results[1],"results", max_args_size+1, "res_no_");
    generateInputBoxes(final_results[0],"fieldsForC", max_args_size+1, "the_c_no_");
}

function generateInputBoxes(array_with_data, element_id ,number_of_boxes, id_names){
    var divs_content = "";
    for(var i=0; i<number_of_boxes;i++)
    {
        divs_content = divs_content + '<input class="letter" type="number" id="'+id_names+i+'" name="'+array_with_data[i]+'">';
    }
    divs_content = divs_content + '<div style="clear:both;"></div>';
    document.getElementById(element_id).innerHTML = divs_content;
}

function checkUsersAnswer(){
    var the_s = "res_no_";
    var the_cs = "the_c_no_"
    var number_of_boxes = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var a,b;
    for(var i=0; i<number_of_boxes; i++){
       if(document.getElementById(the_s+i).name != document.getElementById(the_s+i).value)
       {
           document.getElementById(the_s+i).setAttribute("style", "border-color: #951611;")
       }
       else{
           document.getElementById(the_s+i).setAttribute("style", "border-color: #098C2F;")
       }

        if(document.getElementById(the_cs+i).name != document.getElementById(the_cs+i).value)
        {
            document.getElementById(the_cs+i).setAttribute("style", "border-color: #951611;")
        }
        else{
            document.getElementById(the_cs+i).setAttribute("style", "border-color: #098C2F;")
        }
    }
}

function countResults(arguments, max_size, base){

    var last_arg_number = [];
    var operation_type = document.getElementById("operation_type").value;
    for(var args_number=0;args_number<arguments.length; args_number++){
        if(base%2==0){
            if(arguments[args_number][arguments[args_number].length-1]>=base/2) {last_arg_number[args_number] = base-1;}
            else{ last_arg_number[args_number] = 0;}
        }

        if(base%2!=0){
            if(arguments[args_number][arguments[args_number].length-1]>=(base-1)/2){
                if(arguments[args_number][arguments[args_number].length-1]==(base-1)/2 ){
                    if(arguments[args_number][arguments[args_number].length-2]>=(base-1)/2){last_arg_number[args_number] = base-1;}
                    else{last_arg_number[args_number]=0;}
                }else{last_arg_number[args_number] = base-1;}
            }else{last_arg_number[args_number] =0;}
        }
    }

    arguments.forEach(function(argument, index, array){
        for(var i=0; i<max_size;i++){
            if(argument[i] === void 0){argument[i]=last_arg_number[index];}
        }
    });

    switch (operation_type){
        case "+":
            return addition(arguments, max_size, base);
        case "-":
            return subtraction(arguments, max_size, base);

    }

}

function addition(arguments, max_size, base){

    var the_cs =[0], the_s =[];
    for(var i=0;i<max_size;i++){
        the_s[i]=0;
        for(var args_number=0;args_number<arguments.length;args_number++){
            the_s[i] = the_s[i] + arguments[args_number][i];
        }
        the_s[i] = the_s[i]+the_cs[i];
        if(the_s[i]>=base){
            the_cs[i+1]=Math.floor(the_s[i]/base);
            the_s[i]= the_s[i]%base;
        }else{ the_cs[i+1]=0; }
    }
    return [the_cs, the_s];
}

function subtraction(arguments, max_size, base){

    var the_cs =[0], the_s =[];
    for(var i=0;i<max_size;i++){
        the_s[i]= arguments[0][i];
        for(var args_number=1;args_number<arguments.length;args_number++){
            the_s[i] = the_s[i] - arguments[args_number][i];
        }
        the_s[i] = the_s[i]-the_cs[i];

        if(the_s[i]<0){
            the_cs[i+1]=Math.ceil(((-1)*the_s[i])/base);
            the_s[i]= the_cs[i+1]*base+the_s[i];
        }else{ the_cs[i+1]=0; }
    }
    return [the_cs, the_s];
}