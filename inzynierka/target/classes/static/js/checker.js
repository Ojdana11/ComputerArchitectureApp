showArgsNumberChoice = function (){
    var operation_type = document.getElementById("operation_type").value;
    if(operation_type == "*" || operation_type == "/")
    {
        document.getElementById("arg_number").style.display = "none";
        document.getElementById("arg_number_for_generate_task").value = 2;
    }
    else{
        document.getElementById("arg_number").style.display = "inline";
    };


}