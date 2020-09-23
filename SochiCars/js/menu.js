function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        $(".topnav-wrap").addClass("topnav-wrap-resp");
        $(".top-navbar").addClass("top-navbar-resp");
    } else {
        x.className = "topnav";
        $(".topnav-wrap").removeClass("topnav-wrap-resp");
        $(".top-navbar").removeClass("top-navbar-resp");
    }
}