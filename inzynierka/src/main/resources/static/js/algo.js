var algorithm = function(){};
algorithm.countResults = function(arguments, max_size, base){

    var last_arg_number = [];
    var operation_type = document.getElementById("operation_type").value;
    var arg_last, arg_second_last;
    for(var args_number=0;args_number<arguments.length; args_number++){
        arg_last = arguments[args_number][arguments[args_number].length-1];
        arg_second_last= arguments[args_number][arguments[args_number].length-2];
        last_arg_number[args_number]= algorithm.checkExtension(arg_last ,arg_second_last, base);
    }

    if(operation_type=="+" || operation_type=="-"){
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
            return [[],[]];

    }

}

algorithm.checkExtension = function(last_value, second_last_value,  base){

    if(base%2==0){
        if(last_value>=base/2) {return base-1;}
        else{ return 0;}
    }

    if(base%2!=0){
        if(last_value>=(base-1)/2){
            if(last_value==(base-1)/2 ){
                if(second_last_value>=(base-1)/2){return base-1;}
                else{return 0;}
            }else{return base-1;}
        }else{return 0;}
    }

}
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
                the_s[i]= the_cs[i+1]*base+the_s[i];
            }else{ the_cs[i+1]=0; }

        }
    }
    return [the_cs, the_s];
}

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
}

algorithm.multiplication = function (arg_up,arg_down, max_size, base){

    var partial_sum=[];
    if(arg_down[arg_down.length-1]==base-1)
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
        for(var ext=arg_up.length;ext<max_size;ext++){
            partial_sum[part_arg][ext] = partial_sum[part_arg][partial_sum[part_arg].length-1];
        }
    }

    var final_result =  algorithm.addition(partial_sum, max_size, base);
    return [final_result, partial_sum];


}

algorithm.division = function(){

}
