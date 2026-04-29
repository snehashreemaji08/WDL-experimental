document.addEventListener("DOMContentLoaded", function () {

    var searchInput = document.getElementById("searchInput");
    var cards = document.getElementsByClassName("card");

    searchInput.addEventListener("keyup", function () {
        var value = searchInput.value.toLowerCase();

        for (var i = 0; i < cards.length; i++) {
            var text = cards[i].innerText.toLowerCase();

            if (text.indexOf(value) > -1) {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        }
    });

});
