var name1 = localStorage.getItem("name1");
var name2 = localStorage.getItem("name2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("user_name1").innerHTML = name1 + " : ";
document.getElementById("user_name2").innerHTML = name2 + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("question_turn").innerHTML = name1 ; 
document.getElementById("answer_turn").innerHTML = name2 ;
function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    answer = parseInt(number1) * parseInt(number2);

    question_numbers = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer :<input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn_info' onclick='check()'>Check</button>";
    row = question_numbers + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn = "name1" ;
answer_turn = "name2" ;
function check() {

    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == answer) {

        if (answer_turn == "name1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }
    if (question_turn == "name1") {
        question_turn = "name2"
        document.getElementById("question_turn").innerHTML =   name2;
    }
    else {
        question_turn = "name1"
        document.getElementById("question_turn").innerHTML = name1;
    }
    if (answer_turn == "name1") {
        answer_turn = "name2"
        document.getElementById("answer_turn").innerHTML =  name2;
    }
    else {
        answer_turn = "name1"
        document.getElementById("answer_turn").innerHTML =      name1;
    }
    document.getElementById("output").innerHTML = "";
}
