var algorithm = function(){};
algorithm.countResults = function(arguments, max_size, base){

    var last_arg_number = [];
    var operation_type = document.getElementById("operation_type").value;
    var arg_last, arg_second_last;
    for(var args_number=0;args_number<arguments.length; args_number++){
        arg_last = arguments[args_number][arguments[args_number].length-1];
        arg_second_last= arguments[args_number][arguments[args_number].length-2];
        last_arg_number[args_number]= agloHelpers.checkExtension(arg_last ,arg_second_last, base);
    }

    if(operation_type==="+" || operation_type==="-"){
        arguments.forEach(function(argument, index, array){
            for(var i=0; i<max_size;i++){
                if(argument[i] === void 0){argument[i]=last_arg_number[index];}
            }
        });
    }
    else{
        arguments[0][arguments[0].length]=last_arg_number[0];
        arguments[1][arguments[1].length]=last_arg_number[1];
    }

    switch (operation_type){
        case "+":
            return algorithm.addition(arguments, max_size, base);
        case "-":
            return algorithm.subtraction(arguments, max_size, base);
        case "*":
            return algorithm.multiplication(arguments[0], arguments[1], max_size*2, base);
        case "/":
            return algorithm.division(arguments[0], arguments[1], base);

    }

};

algorithm.addition = function(arguments, max_size, base){

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
        }
        else{
            if(the_s[i]<0){
                the_cs[i+1]=(-1)*Math.ceil(((-1)*the_s[i])/base);
                the_s[i]= (-1)*the_cs[i+1]*base+the_s[i];
            }else{ the_cs[i+1]=0; }

        }
    }
    return [the_cs, the_s];
};

algorithm.subtraction = function(arguments, max_size, base){

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
};

algorithm.multiplication = function (arg_up,arg_down, max_size, base){

    var partial_sum=[];
    if(arg_down[arg_down.length-1]===base-1)
    {
        arg_down[arg_down.length-1]=-1;
    }
    for(var i=0;i<arg_down.length;i++)
    {
        partial_sum[i]=[];
    }

    for(var down=1;down<arg_down.length;down++)
    {
        for(var up=0;up<down;up++){
            partial_sum[down][up] = 0;
        }
    }

    for(var down=0;down<arg_down.length;down++)
    {
        for(var up=0;up<arg_up.length;up++){
            partial_sum[down][up+down] = arg_up[up]*arg_down[down]
        }
    }

    for(var part_arg=0;part_arg<arg_down.length;part_arg++)
    {
        for(var ext=partial_sum[part_arg].length;ext<max_size;ext++){
            partial_sum[part_arg][ext] = partial_sum[part_arg][partial_sum[part_arg].length-1];
        }
    }

    var final_result =  algorithm.addition(partial_sum, max_size, base);
    return [final_result, partial_sum];


};

algorithm.division = function(divisor,dividend, base){

    var divisor_size= divisor.length;
    if(dividend.length<=divisor.length)return [[0],[0], [0]];
    var new_dividend=dividend;
    var divisor_matrix = [[0,0], divisor];
    for(var i=0;i<divisor_size;i++){
        divisor_matrix[0][i]=0;
    }
    var number_of_operations = new_dividend.length - divisor.length;
    var result = [];
    var multipler = [0,0];
    var dividends_portion = [];
    var x = new_dividend.length - divisor.length;
    var tmp_res_from_multi;
    for(var i=2;i<=base;i++){
        multipler[0] =i;
         tmp_res_from_multi= algorithm.multiplication(divisor, multipler,divisor.length+1, base);
        divisor_matrix[i] = tmp_res_from_multi[0][1];
    }

    var diff_sign=dividend[dividend.length-1]!==divisor[divisor.length-1];
    if(diff_sign)
    {
        x = dividend.length - divisor.length+1;
        var front_part_dividend =[];
        for(var i=0;i<divisor.length-1;i++)
        {
            front_part_dividend[i] =dividend[x+i];
        }
        front_part_dividend[divisor.length-1] = front_part_dividend[divisor.length-2];
        var tmp_args = [front_part_dividend, divisor];
        var tmp_fron_div = algorithm.addition(tmp_args, divisor.length, base);
        front_part_dividend =tmp_fron_div[1];

        for(var i=x, ii=0;ii<divisor.length;i++,ii++){
            new_dividend[i] =front_part_dividend[ii];
        }
        number_of_operations++;
    }


    dividends_portion[0] = [];
    for(var j=0;j<divisor_size;j++)
    {
        dividends_portion[0][j] = new_dividend[x+j];
    }

    for(var i=0;i<=number_of_operations;i++){
        //odejmowanie
        result[i]=agloHelpers.divisor_compare(dividends_portion[i], divisor_matrix, base);
       // if(i==number_of_operations)break;
        dividends_portion[i+1]=[];
        dividends_portion[i+1] = algorithm.subtraction([dividends_portion[i], divisor_matrix[result[i]]], dividends_portion[i].length, base);
        dividends_portion[i+1] = dividends_portion[i+1][1];
        dividends_portion[i+1].splice(dividends_portion[i+1].length-1, 1);
        dividends_portion[i+1].unshift(new_dividend[x-i-1]);

    }
    if(diff_sign) result[0]=base-1;
    return [[0],result.reverse(), dividends_portion, divisor_matrix];


};

algorithm.exchangeTotal = function(number, currentBase, targetBase){

    var last_rest=1,i=0, totalInDiv=targetBase;
    var divisor =[];

//zapis targetBase w systemie currentBase
    while(totalInDiv!==0){
        divisor[i]= targetBase%currentBase;
        totalInDiv = Math.floor(totalInDiv/currentBase);
        i++;
    }
    divisor[i]=0;

    var result =[], partial=[];
    i=0;
    totalInDiv=number;
    do{
        partial[i]=algorithm.division(totalInDiv,divisor,currentBase);
        totalInDiv =partial[i][1];
        last_rest = partial[i][2];
        i++;

    }while(last_rest!==0);

};
