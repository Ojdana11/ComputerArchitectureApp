var calculator = function(){};
calculator.calculateUsersTaskPrototype = function (){
    var base = parseInt(document.getElementById("system_base_for_generate_task").value);
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var operation_type = document.getElementById("operation_type").value;

    var final_results  = algorithm.countResults(arguments, max_args_size+1, base);
    calculator.generateAnswersBoxes(final_results[1],"results", max_args_size+1, "res_no_");
    calculator.generateAnswersBoxes(final_results[0],"fieldsForC", max_args_size+1, "the_c_no_");
}

calculator.generateBoxesForArithmeticUsersTask = function (task_type){
    var divs_content = "";

    switch (task_type){
        case "arithmetic":
            document.getElementById("other_operation_divs").style.display = "inline";
            document.getElementById("division").style.display = "none";
            var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
            var operation_type = document.getElementById("operation_type").value;

            for(var i=0; i<max_args_size;i++)
            {
                divs_content = divs_content + '<input class="letter" type="number" id="'+"arg_one_index_no_"+i+'">';
            }
            divs_content = divs_content + '<div style="clear:both;"></div>';
            if(operation_type=="/")
                max_args_size=max_args_size-2;
            for(var i=0; i<max_args_size;i++)
            {
                divs_content = divs_content + '<input class="letter" type="number" id="'+"arg_two_index_no_"+i+'">';
            }
            divs_content = divs_content + '<div class="letter" type="number">'+operation_type+'</div>';
            divs_content = divs_content + '<div style="clear:both;"></div>';
            document.getElementById("arguments").innerHTML = divs_content;
            document.getElementById("fieldsForC").innerHTML = "";
            document.getElementById("partial").innerHTML = "";
            document.getElementById("results").innerHTML = "";
            document.getElementById("division_results").innerHTML = "";
            document.getElementById("division_arguments").innerHTML = "";
            document.getElementById("division_partial").innerHTML = "";
            document.getElementById("divider_matrix").innerHTML = "";
            break;
        case "exchange":
            var max_args_size = parseInt(document.getElementById("arg_size_for_exchange").value);
            for(var i=0; i<max_args_size;i++)
            {
                divs_content = divs_content + '<input class="letter" type="number" id="'+"arg_one_index_no_"+i+'">';
            }
            divs_content = divs_content + '<div style="clear:both;"></div>';
            document.getElementById("argumentsEx").innerHTML = divs_content;
            document.getElementById("exchange_result").innerHTML ="";
            break;
        case "ieee":
            var precision = document.getElementById("precision").value;
            var operation = document.getElementById("ieeeOperation").value;
            var bits = parseInt(precision);
            var exponent = 8;
            if(bits==64)
                exponent=11;

            if(operation=="toIeee")
            {
                divs_content = '<label for="ieeeNumber">liczba</label>:' +
                    '<input class="letter" style="width: 200px;" type="number" id="ieeeNumber">';
                document.getElementById("ieee_task").innerHTML = divs_content;
            }

            else{
                divs_content = 'Znak: <input class="letter" type="number" id="ieeeSign">';
                divs_content = divs_content + '<div style="clear:both;"></div>';
                divs_content = divs_content + 'Wykładnik:';

                for(var i=0; i<exponent;i++)
                {
                    divs_content = divs_content + '<input class="letter" type="number" id="ieeeExpo_no_'+i+'">';
                }
                divs_content = divs_content + '<div style="clear:both;"></div>';
                divs_content = divs_content +"Mantysa: ";

                for(var i=exponent;i<bits-1;i++){
                    divs_content = divs_content + '<input class="letter" type="number" id="ieeeMant_no_'+i+'">';
                }
                divs_content = divs_content + '<div style="clear:both;"></div>';
                document.getElementById("ieee_task").innerHTML = divs_content;
                var letters = document.getElementsByClassName("letter");
                if(precision==="64")
                {
                    Array.prototype.forEach.call(letters,function (t) {
                        t.style.width = "18px";
                    });
                }
            }
            document.getElementById("ieee_answer").innerHTML = "";
            break;

    }

}

calculator.calculateUsersTask = function ()
{
    document.getElementById("other_operation_divs").style.display = "inline";
    document.getElementById("division").style.display = "none";
    var base = parseInt(document.getElementById("system_base_for_generate_task").value);
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var operation_type = document.getElementById("operation_type").value;

    if(isNaN(base)|| isNaN(max_args_size)) return;
    if(operation_type==="/") {
        calculator.generateInputBoxesDivision();
        return;
    }
    var arg_one =[], arg_two =[];

    for(var i=0; i<max_args_size;i++)
    {
        arg_one[i] = parseInt(document.getElementById("arg_one_index_no_"+i).value);
    }
    for(var i=0; i<max_args_size;i++)
    {
        arg_two[i] = parseInt(document.getElementById("arg_two_index_no_"+i).value);
    }

    var arg_data = [];
    arg_data[0]=arg_one;
    arg_data[1]=arg_two;

    var divs_content = "";
    var arg_last, arg_second_last;

    for(var i=0; i<2;i++){

        for(var index=0;index<max_args_size;index++)
        {
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

        if(operation_type==="*"){
            calculator.generateInputBoxes(final_results[0][1],"results",(arg_last+arg_second_last+2), "res_no_", "letter");
            calculator.generateInputBoxes(final_results[0][0],"fieldsForC", (arg_last+arg_second_last+2), "the_c_no_", "letter");
            divs_content = "";
            for(var i=0;i<arg_last+1;i++){
                for(var j=0; j<max_args_size+1+i;j++)
                {
                    divs_content = divs_content + '<div class="letter" type="number" id="'+"partial_no_"+j+'" >'+final_results[1][i][j]+'</div>';
                }
                divs_content = divs_content + '<div style="clear:both;"></div>';
            }
            document.getElementById("partial").innerHTML = divs_content;
        }

        if(operation_type=="+" || operation_type=="-"){
            calculator.generateInputBoxes(final_results[1],"results",max_args_size+1, "res_no_", "letter");
            calculator.generateInputBoxes(final_results[0],"fieldsForC", max_args_size+1, "the_c_no_", "letter");
            document.getElementById("partial").innerHTML = "";

    }

}

calculator.generateInputBoxes = function (array_with_data, element_id ,number_of_boxes, id_names, className){
    var divs_content = "";
    for(var i=0; i<number_of_boxes;i++)
    {
        divs_content = divs_content + '<div class="'+className+'" type="number" id="'+id_names+i+'" >'+array_with_data[i]+'</div>';
    }
    divs_content = divs_content + '<div style="clear:both;"></div>';
    document.getElementById(element_id).innerHTML = divs_content;
}


calculator.generateAnswersBoxes = function (array_with_data, element_id ,number_of_boxes){
    var divs_content = "";
    for(var i=0; i<number_of_boxes;i++)
    {
        divs_content = divs_content + '<div class="letter">'+array_with_data[i]+'</div>';
    }
    divs_content = divs_content + '<div style="clear:both;"></div>';
    document.getElementById(element_id).innerHTML = divs_content;
}

calculator.generateInputBoxesDivision = function(){
    var base = parseInt(document.getElementById("system_base_for_generate_task").value);
    var max_args_size = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var max_args_sizeB = max_args_size-2;
    document.getElementById("division").style.display = "inline";
    document.getElementById("other_operation_divs").style.display = "none";

    if(isNaN(base)|| isNaN(max_args_size)) return;

    var arg_one =[], arg_two =[];

    for(var i=0; i<max_args_size;i++)
    {
        arg_one[i] = parseInt(document.getElementById("arg_one_index_no_"+i).value);
    }

    for(var i=max_args_size-1;i>0;i--){
        if((arg_one[i]==0 && arg_one[i-1]==0) || (arg_one[i]==9 && arg_one[i-1]==9)){
            arg_one.pop();
            i--;
            max_args_size--;
        }
        if(arg_one[i-1]!=0|| arg_one[i-1]!=base-1) break;
    }
    for(var i=0; i<max_args_sizeB;i++)
    {
        arg_two[i] = parseInt(document.getElementById("arg_two_index_no_"+i).value);
    }

    for(var i=max_args_sizeB-1;i>0;i--){
        if((arg_two[i]==0 && arg_two[i-1]==0) || (arg_two[i]==9 && arg_two[i-1]==9)){
            arg_two.pop();
            i--;
            max_args_sizeB--;
        }
        if(arg_two[i-1]!=0 || arg_two[i-1]!=base-1) break;
    }


    var arg_data = [];
    arg_data[0]=arg_two;
    arg_data[1]=arg_one;
    var divs_content = "";
    var arg_last, arg_second_last;


    for(var index=0;index<max_args_sizeB;index++)
    {
        divs_content = divs_content + '<div class="d_letter">' + arg_data[0][index] +'</div>';
    }

    arg_last = arg_data[0][arg_data[0].length-1];
    arg_second_last = arg_data[0][arg_data[0].length-2];
    divs_content = divs_content + '<div class="d_letter">' +"("+ agloHelpers.checkExtension(arg_last,arg_second_last, base) +")"+'</div>';
    divs_content = divs_content + '<div class="d_letter">' +"/"+'</div>';

    for(var index=0;index<max_args_size;index++)
    {
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
   /* if(divisor_extension== dividend_extension){
        loops_start=1;
    }
*/
    calculator.generateInputBoxes(final_results[1],"division_results",(final_results[1].length), "res_no_", "letter");
    document.getElementById("division_results").style.marginLeft = 42*(move_result)+"px";
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
            divs_content = divs_content + '<div class="division_letter" type="number" id="'+"partial_no_"+j+'" ">'+final_results[2][i][j]+'</div>';
            /*divs_content = divs_content + '<input class="division_letter" type="number" id="'+"partial_no_"+j+'" name="'+arg_data[1][j]+'" value="'+final_results[1][i][j] +'">';*/
        }
        divs_content = divs_content + '<div style="clear:both;"></div>';
        //final_results[3][final_results[1][i]].reverse();

        for(var j=0; j<final_results[3][0].length;j++)
        {
            divs_content = divs_content + '<div class="division_letter" type="number" id="'+"partial_no_"+j+'">'+final_results[3][final_results[1][i]][j]+'</div>';
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

}


calculator.ExchangeTotal = function(){
    var current_base = parseInt(document.getElementById("current_base").value);
    var target_base = parseInt(document.getElementById("target_base").value);
    var numbers_part = document.getElementById("numbers_part").value;
    var arg_size_for_exchange = parseInt(document.getElementById("arg_size_for_exchange").value);

    if(isNaN(current_base)|| isNaN(target_base) || isNaN(arg_size_for_exchange)) return;

    var arg_data=[];
    for(var i=0;i<arg_size_for_exchange;i++){
        arg_data[i] = parseInt(document.getElementById("arg_one_index_no_"+i).value);
    }

    var final_result = algorithm.exchangeTotal(arg_data, current_base, target_base,numbers_part, 5);
    var div_content ='<span> ';
    var temp_res = [];
    for(var i=final_result[0].length-1,j=0;i>=0;i--,j++){
        temp_res[j]=final_result[0][i];
    }
    if(numbers_part==='całkowita'){
        div_content= div_content+arg_data.reverse().join("")+'(U'+current_base+')->' + temp_res.join("")+'(U'+target_base+')</span><table>';
    }
    else{
        div_content= div_content+'0.'+arg_data.reverse().join("")+'(U'+current_base+')->0.' + temp_res.reverse().join("")+'(U'+target_base+')</span><br><table>';
    }
    div_content= div_content+
        '<tr>' +
        '<th><div class="exchangeResult" >liczba</div></th>';
    if(numbers_part==='całkowita'){
        div_content=div_content+'<th><div class="exchangeResult" >dzielnik</div></th>' +
            '<th><div class="exchangeResult" >wynik</div></th>'+
            '<th><div class="exchangeResult" >reszta</div></th>' +
            '</tr>';
    }

    else{
        div_content=div_content+'<th><div class="exchangeResult" >mnożnik</div></th>' +
            '<th><div class="exchangeResult" >cz. ułamkowa</div></th>'+'<th><div class="exchangeResult" >cz.całkowita</div></th>' +'</tr>';
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
                '<td><div class="exchangeResult" >0.'+final_result[1][i].join("")+'</div></td>' +
                '<td><div class="exchangeResult" >*'+final_result[2]+'</div></td>'+
                '<td><div class="exchangeResult" >=0.'+final_result[1][i+1].join("")+'</div></td>';
            div_content=div_content+ '<td>'+'<div class="exchangeResult" >'+final_result[0][i]+'</div></td></tr>';
        }else{
            div_content = div_content + '<tr>' +
                '<td><div class="exchangeResult" >'+final_result[1][i]+'</div></td>'+
                '<td><div class="exchangeResult" >:'+final_result[2]+'</div></td>'+
                '<td><div class="exchangeResult" >='+final_result[1][i+1]+'</div></td>';
            div_content=div_content+ '<td>'+'<div class="exchangeResult" >r.'+final_result[0][i]+'</div></td></tr>';
        }

    }

    div_content = div_content + '</table>';
    document.getElementById("exchange_result").innerHTML = div_content;

}

calculator.IEEE754 = function(input){

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

calculator.generateIeee = function(){
    var precision = document.getElementById("precision").value;
    var operation = document.getElementById("ieeeOperation").value;
    var bits = parseInt(precision);
    var exponent = 8;

    var numberInDecimal=0;
    if(operation==="toIeee")
        numberInDecimal=document.getElementById("ieeeNumber").value;
    var numInIEEE=0;
    if(bits==64){
        exponent = 11;
        numInIEEE = doubleToIEEE(numberInDecimal);
    }else{
        numInIEEE = floatToIEEE(numberInDecimal);
    }

    var div_content = "";

    if(operation==="toIeee")
    {
        div_content = "Liczba: " + numberInDecimal+"<br>";
        document.getElementById("ieee_task").innerHTML = div_content;
        div_content = 'Znak: <div class="letter" type="number">'+numInIEEE.charAt(0)+'</div>';
        div_content = div_content + '<div style="clear:both;"></div>';
        div_content = div_content + 'Wykładnik:';

        for(var i=exponent; i>0;i--)
        {
            div_content = div_content + '<div class="letter" type="number">'+numInIEEE.charAt(i)+'</div>';
        }
        div_content = div_content + '<div style="clear:both;"></div>';
        div_content = div_content +"Mantysa: ";

        for(var i=bits-1;i>exponent;i--){
            div_content = div_content + '<div class="letter" type="number" >'+numInIEEE.charAt(i)+'</div>';
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

    }else{
        var arg_data =[];
        var sign = document.getElementById("ieeeSign").value;
        //0-Wykładnik 1-Mantysa
        arg_data[0]=[]; arg_data[1]=[];
        var wykładnik= 0;
        for(var i=1;i<exponent;i++){
            arg_data[0][i]=(document.getElementById("ieeeExpo_no_"+i).value+1)%2;
        }
        for(var i=exponent;i<bits-1;i++){
            arg_data[1][i]=document.getElementById("ieeeMant_no_"+i).value;
        }
        if(document.getElementById("ieeeExpo_no_"+0).value===1){
            for(var i=0;i<exponent;i++){
                arg_data[0][i]=(document.getElementById("ieeeExpo_no_"+i).value+1)%2;
            }
        }


        document.getElementById("ieee_answer").innerHTML = "";
    }

}


