

function toggleLightMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var element = document.getElementById("darkmode-btn");
    element.classList.toggle("dark-mode");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("dark-mode");
}

function openSimonSays() {
    // Get the modal
    window.open("./simon-says/index.html", "Play", "width=300,height=200")
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    modal.style.display = "block"

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}






