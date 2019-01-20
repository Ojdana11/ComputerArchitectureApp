var admin = function(){}

admin.stepsFields = function () {
    var stepsNumber = document.getElementById("steps_number_in_algo").value
    var div_content = '<br/><form th:action="@{/admin/algo/add}" th:object="${taskDto}" method="post">'
    for(var step=0; step<stepsNumber;step++){
        div_content = div_content + 'Krok '+step+':<input class="form-control" id="new_algo_step_no'+step+'"/><br/><br/>'
    }
    div_content = div_content + '        <div class="form-group">\n' +
        '            <button class="btn btn-success">Dodaj</button>\n' +
        '        </div> </form>'
    document.getElementById("stepsFields").innerHTML = div_content;
}