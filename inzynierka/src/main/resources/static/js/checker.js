var checker = function () {};
checker.checkCategory = function (object) {

        var elements = document.getElementsByClassName("task_category");

        for(var i=0; i<elements.length;i++){
            elements[i].style.backgroundColor = "black";
        }
        object.style.backgroundColor = "#5d706e";

}


checker.checkUsersAnswer = function (element_id){

    var number_of_boxes = parseInt(document.getElementById("arg_size_for_generate_task").value);
    var operation_type = document.getElementById("operation_type").value;

    if(operation_type==="/" && element_id ==="the_c_no_"){
        document.getElementById("fieldsForC").innerHTML = "";
    }
    if(operation_type === "*") number_of_boxes = number_of_boxes*2;

    for(var i=0; i<number_of_boxes+1; i++){
        if(document.getElementById(element_id+i)!== null){

            if((document.getElementById(element_id+i).name !== document.getElementById(element_id+i).value) && document.getElementById(element_id+i).name!=="NaN")
            {
                if(document.getElementById("popup_"+element_id+i) === void 0){
                    document.getElementById(element_id+i).outerHTML =
                        '<div class="popup" onclick="shower.showPrompt(\'popup_'+element_id+i+'\')">' +
                        '<input class="letter" type="number" id="'+element_id+i+'" name="'+document.getElementById(element_id+i).name+
                        '" value="'+document.getElementById(element_id+i).value+'">' +
                        '<span class="popuptext" id="'+'popup_'+element_id+i+'"></span>' +
                        '</div>';
                }
                document.getElementById(element_id+i).setAttribute("style", "border-color: #951611;");
                document.getElementById("popup_"+element_id+i).innerHTML = document.getElementById(element_id+i).name;

            }
            else{
                if(document.getElementById(element_id+i).name!=="NaN") {
                    document.getElementById(element_id+i).innerHTML =
                        '<input class="letter" type="number" id="'+element_id+i+'" name="'+document.getElementById(element_id+i).name+'">';
                    document.getElementById(element_id+i).setAttribute("style", "border-color: #098C2F;");
                }

            }
        }

    }
};

checker.checkAnswers = function(className){

        var answers = document.getElementsByClassName(className);
        Array.prototype.forEach.call(answers,function (t) {
            if(t.value==t.getAttribute('name'))
                t.style.backgroundColor = "#7AB54B";
            else{
                t.style.backgroundColor = "#95452B";
            }
        });

}

checker.prompt = function(category){

    var div_content = "";


    switch (category){
        case "arithmetic":
            div_content = '1. Rozszerzenie (B-1), gdzie B to podstawa, np. (9) dla U10 lub (7) dla U8 "rozszerza" liczbę lewostronnie w nieskończoność.<br> '+
                '2. W mnożeniu rozszerzenie (B-1)  mnożnika, a mnożnik to ta liczba na dole :) należy traktować jako -1, ' +
                'czyli przy wymnażaniu (B-1) przez mnożną należy mnożną odjąć od 0, tak otrzymamy wynik cząstkowego mnożenia (9) przez mnożną. ' +
                'Przykład: (0)54 * (9)86 przy wymnażaniu (9) przez mnożną wartość cząstkowego mnożenia wynosi: (9)4600 <- te dwa zera to przesunięcie pozycji <br>'+
                '3. W dzieleniu gdy znak dzielnika jest różny niż znak dzielnej należy na początku do dzielnej dodać dzielnik tak, żeby jego rozszerzenie było '+
                'przesuniętę o jedną pozycję przed rozszerzeniem dzielnej <br>'+
                '4. Więcej podpowiedzi znajdziecie w materiałach :)';
            break;
        case "exchange":
            div_content = '1. Dzielnik/mnożnik musi być zapisany w systemie o podstawie takiej jaką podstawę ma liczba.<br>'+
                '2. Dzielenie/mnożenie wykonujemy w systemie o podstawie takiej jaką podstawę ma liczba, natomiast resztę z dzielenia/mnożenia zapisujemy w systemie z nową podstawą (docelową).<br>'+
                '3. Przy zamianie części całkowitej wynik czytamy od dołu, czyli reszta na samym dole ma najstarszą pozycję.<br>'+
            '4. Przy zamianie części ułamkowej wynik czytamy od góry, czyli reszta na samym dole ma najmłodszą pozycję';
            break;
        case "ieee":
            div_content = '1. Znak = 0 dla liczby dodatnich i 1 dla ujemnych.<br>'+
                '2. Przy zamianie z systemu dziesiętnego na IEEE754 wartość bezwzględną liczby zapisz w systemie U2. Następnie ustaw tak przecinek, żeby bezpośrednio przed nim była tylko jedna jedynka'+
                'np. -24 w dziesiętnym - > |-24| = 24 -> 24 na U2 - > 01100 teraz przesuwamy przecinek -> 1,100 dodatkowo musimy tą liczbę pomnożyć przez 2^3, czyli tyle o ile przesuneliśmy przecinek' +
                '01100 = 1,100 * 2^3.<br>'+
                '3. Mantysa to ta część liczby na prawo od przecinka, czyli w naszym przykładzie będzie to 100.<br>'+
                '4. Wyładnik to liczba miejsc o ile przecinek był przesunięty, czyli w naszym wypadku '+
                '3, ale tą wartość 3 należy zapisać w systemie spolaryzowanym. Dla pojedyńczej precyzji (single 32b) polaryzacja wynosi +127, dla podwójnej precyzji (double 64b) +1023.'+
                '5. Jak przejść z systemu U2 na system spolaryzowany. Liczba Xs - to wartość liczby w systemie spolaryzowanym, liczba Xu to wartość Xs w systemie uzupełnieniowym.'+
                'Istnieje zależność: jeżeli wszystkie bity liczby Xs zanegujemy z wyjątkiem bitu najstarszego (pierwszy z lewej) to otrzymamy ujemną wartość tej liczby zapisaną w systemie uzupełnieniowym.'+
                'Xs --> negacja bitów z wyjątkiem najstarszego ---> -Xu. A teraz przykład jak zapisać 3 w spolaryzowanym +127. Najpierw -3 kodujemy w U2 -> 11111101 (zapisaliśmy osiem bitów bo tyle bitów jest przeznaczonych na zapis '+
                'wykładnika w pojedyńczej precyzji IEEE754. Teraz tą liczbę przekodowujemy na system spolaryzowany, czyli 11111101 - > 10000010 w spolaryzowanym = 3 w dziesiętnym.'
            break;
        default:
            "well done";
            break;
    }

    document.getElementById("prompt").innerHTML = div_content;
}
