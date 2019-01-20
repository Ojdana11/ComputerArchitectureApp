var generator = function(){};

generator.generateArguments = function ()
{
    document.getElementById("other_operation_divs").style.display = "inline";
    document.getElementById("division").style.display = "none";
    var base = parseInt(document.getElementById("system_base_for_generate_task").value);
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var arguments_number = parseInt(document.getElementById("arg_number_for_generate_task").value);
    var operation_type = document.getElementById("operation_type").value;

    if(isNaN(base)|| isNaN(max_args_size) || isNaN(arguments_number)) return;
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
            divs_content = divs_content + '<div class="d_letter">' + arg_data[i][index] +'</div>';
        }

        arg_last = arg_data[i][arg_data[i].length-1];
        arg_second_last = arg_data[i][arg_data[i].length-2];
        divs_content = divs_content + '<div class="d_letter">' +"("+ agloHelpers.checkExtension(arg_last,arg_second_last, base) +")"+'</div>';
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
                    divs_content = divs_content + '<input class="letter" type="number" id="'+"partial_no_"+j+'" name="'+final_results[1][i][j]+'">';
                }
                divs_content = divs_content + '<div style="clear:both;"></div>';
            }
            document.getElementById("partial").innerHTML = divs_content;
            document.getElementById("the_answer").innerHTML = final_results[0][1].reverse().join("");
            break;

        case "+" || "-":
            generator.generateInputBoxes(final_results[1],"results",max_args_size+1, "res_no_", "letter");
            generator.generateInputBoxes(final_results[0],"fieldsForC", max_args_size+1, "the_c_no_", "letter");
            document.getElementById("partial").innerHTML = "";
            document.getElementById("the_answer").innerHTML = final_results[1].reverse().join("");
            break;

    }

}

generator.generateInputBoxes = function (array_with_data, element_id ,number_of_boxes, id_names, className){
    var divs_content = "";
    for(var i=0; i<number_of_boxes;i++)
    {
        divs_content = divs_content + '<input class="'+className+'" type="number" id="'+id_names+i+'" name="'+array_with_data[i]+'">';
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

    if(isNaN(base)|| isNaN(max_args_size) || isNaN(arguments_number)) return;

    var arg_data = [];
    var divs_content = "";
    var arg_last, arg_second_last;
    for(var i=0; i<arguments_number;i++) {arg_data[i]=[]}


        var arg_size = Math.floor((Math.random() * 4) + 1);
        for(var index=0;index<arg_size;index++)
        {
            arg_data[0][index] = Math.floor(Math.random()*base);
            divs_content = divs_content + '<div class="d_letter">' + arg_data[0][index] +'</div>';
        }

        arg_last = arg_data[0][arg_data[0].length-1];
        arg_second_last = arg_data[0][arg_data[0].length-2];
        divs_content = divs_content + '<div class="d_letter">' +"("+ agloHelpers.checkExtension(arg_last,arg_second_last, base) +")"+'</div>';
        divs_content = divs_content + '<div class="d_letter">' +"/"+'</div>';


         arg_size = 8;
        for(var index=0;index<arg_size;index++)
        {
            arg_data[1][index] = Math.floor(Math.random()*base);
            divs_content = divs_content + '<div class="d_letter">' + arg_data[1][index] +'</div>';
        }

        arg_last = arg_data[1][arg_data[1].length-1];
        arg_second_last = arg_data[1][arg_data[1].length-2];
        divs_content = divs_content + '<div class="d_letter">' +"("+ agloHelpers.checkExtension(arg_last,arg_second_last, base) +")"+'</div>';


    var divisor_extension =  agloHelpers.checkExtension(arg_data[0][arg_data[0].length-1],arg_data[0][arg_data[0].length-2], base);
    var dividend_extension =  agloHelpers.checkExtension(arg_data[1][arg_data[1].length-1],arg_data[1][arg_data[1].length-2], base);;

    arg_last = arg_data[1].length;
    arg_second_last = arg_data[0].length;
    document.getElementById("division_arguments").innerHTML = divs_content;
    //[0] - cs, [1] -s
    var final_results = algorithm.countResults(arg_data, max_args_size+1, base);
    var loops_start=0;
    var move_result =arg_second_last+1;
    var constant_partial_move=40;
    if(divisor_extension!== dividend_extension){
        constant_partial_move=0;
        loops_start=1;
    }


    generator.generateInputBoxes(final_results[1],"division_results",(final_results[1].length), "res_no_", "letter");
    document.getElementById("division_results").style.marginLeft = 42*(move_result)+constant_partial_move+"px";
    for(var k=0;k<final_results[3].length;k++){
         final_results[3][k].reverse();
    }
            divs_content = "";
        final_results[1] = final_results[1].reverse();
            for(var i=loops_start;i<final_results[2].length-1;i++){
                divs_content = divs_content +  '<div class="partial_operation_div" style="margin-left:'+((i*42)+constant_partial_move) +'px; border-bottom: 2px solid white">'
                final_results[2][i].reverse();
                for(var j=0; j<final_results[2][i].length;j++)
                {
                    divs_content = divs_content + '<input class="division_letter" type="number" id="'+"partial_no_"+j+'" name="'+final_results[2][i][j]+'">';
                    /*divs_content = divs_content + '<input class="division_letter" type="number" id="'+"partial_no_"+j+'" name="'+arg_data[1][j]+'" value="'+final_results[1][i][j] +'">';*/
                }
                divs_content = divs_content + '<div style="clear:both;"></div>';
                //final_results[3][final_results[1][i]].reverse();

                for(var j=0; j<final_results[3][0].length;j++)
                {
                    divs_content = divs_content + '<input class="division_letter" type="number" id="'+"partial_no_"+j+'" name="'+final_results[3][final_results[1][i]][j]+'">';
                    /*divs_content = divs_content + '<input class="division_letter" type="number" id="'+"partial_no_"+j+'" name="'+arg_data[1][j]+'" value="'+final_results[1][i][j] +'">';*/
                }
                divs_content = divs_content + '<div style="clear:both;"></div>';
                divs_content = divs_content +  '</div>'
            }
           document.getElementById("division_partial").innerHTML = divs_content;

            divs_content = "X = "+arg_data[0].join("")+ '<br>X * 0  =  0<br>';
            for(var i=1;i<final_results[3].length;i++){
                divs_content = divs_content + 'X * '+i+'  =  '+final_results[3][i].join("")+'<br>';
            }
            document.getElementById("divider_matrix").innerHTML = divs_content;
            document.getElementById("the_answer").innerHTML = final_results[1].join("");

}


generator.ExchangeTotal = function(){
    var current_base = parseInt(document.getElementById("current_base").value);
    var target_base = parseInt(document.getElementById("target_base").value);
    var numbers_part = document.getElementById("numbers_part").value;
    var arg_size_for_exchange = parseInt(document.getElementById("arg_size_for_exchange").value);
    if(isNaN(current_base)|| isNaN(target_base) || isNaN(arg_size_for_exchange)) return;
    var arg_data=[];
    for(var i=0;i<arg_size_for_exchange;i++){
        arg_data[i] = Math.floor(Math.random()*current_base);
    }
    var final_result = algorithm.exchangeTotal(arg_data, current_base, target_base,numbers_part, 5);
    var div_content ='<span> ';
    if(numbers_part==='całkowita'){
        div_content= div_content+arg_data.reverse().join("")+'->' +'</span><table>';
    }
    else{
        div_content= div_content+'0.'+arg_data.join("")+'->' +'</span><table>';
    }
    div_content= div_content+
        '<tr>' +
        '<th>liczba</th>';
    if(numbers_part==='całkowita'){
        div_content=div_content+'<th>dzielnik</th>' +
            '<th>wynik</th>'+
            '<th>reszta</th>' +
            '</tr>';
    }
    else{
        div_content=div_content+'<th>mnożnik</th>' +
            '<th>część ułamkowa</th>'+'<th>część całkowita</th>' +'</tr>';
    }

    var loop = final_result[0].length;
    if(numbers_part==='całkowita'){
        for(var i=0;i<loop;i++){
            final_result[1][i]= final_result[1][i].reverse().join("");
        }
    }
    if(numbers_part!=='całkowita')
        loop--;
        for(var i=0;i<loop;i++){
                if(numbers_part!=='całkowita'){
                    div_content = div_content + '<tr>' +
                        '<td>0.<input class="exchangeResult" name="'+final_result[1][i].join("")+'"></td>' +
                        '<td>*<input class="exchangeResult" name="'+final_result[2]+'"></td>'+
                        '<td>=0.<input class="exchangeResult" name="'+ final_result[1][i+1].join("")+'"></td>';
                }else{
                    div_content = div_content + '<tr>' +
                        '<td><input class="exchangeResult" name="'+ final_result[1][i]+'"></td>'+
                        '<td>:<input class="exchangeResult" name="'+ final_result[2]+'"></td>'+
                        '<td>=<input class="exchangeResult" name="'+ final_result[1][i+1]+'"></td>';
                }
            div_content=div_content+ '<td> r.'+'<input class="exchangeResult" name="'+ final_result[0][i]+'"></td></tr>';
        }
    div_content = div_content + '</table>';
    document.getElementById("exchange_result").innerHTML = div_content;
    if(numbers_part==='całkowita')
    {
        document.getElementById("the_answer").innerHTML = final_result[0].reverse().join("");
    }
    else{
        document.getElementById("the_answer").innerHTML = '0.'+final_result[0].join("");
    }
}

generator.IEEE754 = function(input){

    var numInIEEE = floatToIEEE(input);
    var div_content = "";
    div_content = "Znak: "+ numInIEEE.charAt(0) + "<br>Wykładnik: ";
    for(var i=1;i<9;i++){
        div_content =div_content+ numInIEEE.charAt(i);
    }
    div_content = div_content + "<br>Mantysa: ";
    for(var i=9;i<32;i++){
        div_content =div_content+ numInIEEE.charAt(i);
    }
    document.getElementById("ieee_task").innerHTML = div_content;

}

generator.generateIeee = function(){
    var precision = document.getElementById("precision").value;
    var operation = document.getElementById("ieeeOperation").value;
    var bits = parseInt(precision);
    var exponent = 8;
    if(bits==64)
        exponent = 11;

    var numberInDecimal = Math.pow(-1, Math.floor(Math.random()*2)+1)* Math.floor(Math.random()*1000000000);
    var numInIEEE = floatToIEEE(numberInDecimal);
    var div_content = "";

    if(operation==="toIeee")
    {
        div_content = "Liczba: " + numberInDecimal+"<br>";
        document.getElementById("ieee_task").innerHTML = div_content;
        div_content = 'Znak: <input class="letter" type="number" name="'+numInIEEE.charAt(0)+'">';
        div_content = div_content + '<div style="clear:both;"></div>';
        div_content = div_content + 'Wykładnik:';

        for(var i=exponent; i>0;i--)
        {
            div_content = div_content + '<input class="letter" type="number" name="'+numInIEEE.charAt(i)+'">';
        }
        div_content = div_content + '<div style="clear:both;"></div>';
        div_content = div_content +"Mantysa: ";

        for(var i=bits-1;i>exponent;i--){
            div_content = div_content + '<input class="letter" type="number" name="'+numInIEEE.charAt(i)+'">';
        }
        div_content = div_content + '<div style="clear:both;"></div>';
        document.getElementById("ieee_answer").innerHTML = div_content;
       var letters = document.getElementsByClassName("letter");
        if(precision==="64")
        {
            Array.prototype.forEach.call(letters,function (t) {
                t.style.width = "18px";
            });
        }
        var resultToShow = 'Znak: '+ numInIEEE.charAt(0)+'<br>Wykładnik: ';
        for(var ah=1;ah<=exponent;ah++){
            resultToShow = resultToShow + numInIEEE.charAt(ah);
        }
        resultToShow = resultToShow + '<br>Mantysa:'
        for(var ah=exponent+1;ah<bits;ah++){
            resultToShow = resultToShow + numInIEEE.charAt(ah);
        }
        document.getElementById("the_answer").innerHTML = resultToShow;
    }else{
        generator.IEEE754(numberInDecimal);
        div_content = '<label for="ieeeNumber">liczba</label>:' +
            '<input class="letter" style="width: 200px;" type="number" id="ieeeNumber" name="'+ numberInDecimal+'">';
        document.getElementById("ieee_answer").innerHTML = div_content;
        document.getElementById("the_answer").innerHTML = numberInDecimal.toString();
    }

}


