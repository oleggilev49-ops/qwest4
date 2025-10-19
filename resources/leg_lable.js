window.onload = function() {
var panel = document.querySelector(".panel");
    if (panel) {
        var header  = document.createElement("div");
        header.innerHTML = "<div style = 'text-align:center;'><b>Условные обозначения</b></div>";
        header.style.margin = "12px";
        panel.insertBefore(header, panel.firstChild);
    }
}