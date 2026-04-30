document.addEventListener("DOMContentLoaded", function () {

    var searchInput = document.getElementById("searchInput");
    var cards = document.getElementsByClassName("card");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", function () {
        var value = searchInput.value.toLowerCase();

        console.log("Typing:", value);  // DEBUG

        for (var i = 0; i < cards.length; i++) {
            var text = cards[i].innerText.toLowerCase();

            console.log("Checking:", text); // DEBUG

            if (text.includes(value)) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    });

});
