var calculator = function(){};
calculator.calculateUsersTask = function (){
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
    generator.generateAnswersBoxes(final_results[1],"results", max_args_size+1, "res_no_");
    generator.generateAnswersBoxes(final_results[0],"fieldsForC", max_args_size+1, "the_c_no_");
}