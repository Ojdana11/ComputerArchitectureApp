
var agloHelpers = function(){};
agloHelpers.divisor_compare = function(dp, divisor_matrix, base) {


    var dividends_portion = dp;
    var numbers_length_max = Math.max(divisor_matrix[divisor_matrix.length-1].length, dividends_portion.length);
    var numbers_length_min = Math.min(divisor_matrix[divisor_matrix.length-1].length, dividends_portion.length);
    var extra_extension = numbers_length_max - numbers_length_min;

    for(var i=0; i<extra_extension;i++){
        if(dividends_portion[numbers_length_max-1]=== undefined){
            dividends_portion[dividends_portion.length+i] = dividends_portion[dividends_portion.length-1];
        }

        divisor_matrix.forEach(function(argument, index, array){
            if(argument[numbers_length_max-1]===undefined){
                argument[argument.length+i] = argument[argument.length-1]
            }
        })

    }

    switch (dividends_portion[dividends_portion.length-1]){
        case 0:
            for(var i=1; i<divisor_matrix.length;i++){
                for(var j=dividends_portion.length-1; j>=0;j--){

                    if(divisor_matrix[i][j]>dividends_portion[j]) return i-1;
                    if(divisor_matrix[i][j]<dividends_portion[j]) break;
                    if(divisor_matrix[i][j]==dividends_portion[j]){
                        for(var k = j;k>=0;k--){
                            if(divisor_matrix[i][k]>dividends_portion[k]) return i-1;
                            if(divisor_matrix[i][k]<dividends_portion[k])  break;
                        }
                    }
                }
            }
            return 0;
        case (base-1):
            for(var i=1; i<divisor_matrix.length;i++){
                for(var j=dividends_portion.length-1; j>=0;j--){
                    if(divisor_matrix[i][j]<dividends_portion[j]) return i-1;
                    if(divisor_matrix[i][j]>dividends_portion[j]) break;
                    if(divisor_matrix[i][j]==dividends_portion[j]){
                        for(var k = j;k>=0;k--){
                            if(divisor_matrix[i][k]<dividends_portion[k]) return i-1;
                            if(divisor_matrix[i][k]==dividends_portion[k] && k==0) return i-1;
                            if(divisor_matrix[i][k]>dividends_portion[k]) break;
                        }
                    }
                }
            }
            return base-1;
        default:
            console.log('something wrong\n');
            console.log(dp);
            for(var i=0;i<divisor_matrix.length;i++)
                console.log(divisor_matrix[i]);
            return -1;
    }

};

agloHelpers.number_compare = function(number_one, number_two){

};
agloHelpers.countAbsoluteValue = function(number, base){

};

agloHelpers.checkExtension = function(last_value, second_last_value,  base){

    if(base%2===0){
        if(last_value>=base/2) {return base-1;}
        else{ return 0;}
    }

    if(base%2!==0){
        if(last_value>=(base-1)/2){
            if(last_value===(base-1)/2 ){
                if(second_last_value>=(base-1)/2){return base-1;}
                else{return 0;}
            }else{return base-1;}
        }else{return 0;}
    }

};
