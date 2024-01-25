function loadContent() {
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        document.getElementById("footer").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "globalfooter.html", true);
xhttp.send();
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        document.getElementById("header").innerHTML = xhttp2.responseText;
    }
};
xhttp2.open("GET", "globalheader.html", true);
xhttp2.send();
}

function loadPage(element) {
    loadPageName(element.textContent.toLowerCase().replace(" ", "_"))
}

function loadPageName(name) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("right").innerHTML = xhttp.responseText;
            if(document.getElementById("right").getElementsByClassName("initScript").length !== 0) {
                eval(document.getElementById("right").getElementsByClassName("initScript")[0].innerHTML);
            }
        }
    };
    xhttp.open("GET", "pages/" + name + ".html", true);
    xhttp.send();
}