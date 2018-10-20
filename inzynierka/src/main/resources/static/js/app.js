function showAnswer() {
    var x = document.getElementById("answer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


$("#button-answer").on("click", function() {
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
        el.text(el.data("text-original"));
    } else {
        el.data("text-original", el.text());
        el.text(el.data("text-swap"));
    }
});

