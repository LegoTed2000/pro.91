
function math_screen() {
    var name1 = document.getElementById("name1").value;
    localStorage.setItem("name1",name1);

    var name2 = document.getElementById("name2").value;
    localStorage.setItem("name2",name2);

    window.location = "game.html";
}

