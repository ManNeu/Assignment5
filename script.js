var todoInput1 = document.querySelector("#nine-todo-text");
var todoInput2 = document.querySelector("#ten-todo-text");
var todoInput3 = document.querySelector("#eleven-todo-text");
var todoInput4 = document.querySelector("#twelve-todo-text");
var todoInput5 = document.querySelector("#one-todo-text");
var todoInput6 = document.querySelector("#two-todo-text");
var todoInput7 = document.querySelector("#three-todo-text");
var todoInput8 = document.querySelector("#four-todo-text");
var todoInput9 = document.querySelector("#five-todo-text");


var d = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(d);
var da = moment().format("hA");
console.log(da);
var today = new Date().getHours();
console.log(today);
$(".container h3").text(d);

for (i = 1; i <= 9; i++) {
    if (today > ($(".check" + [i]).text())) {
        $(".task" + [i]).css("background", "yellow");

        console.log(".check" + [i]);

    }
    else if (today == ($(".check" + [i]).text())) {
        $(".task" + [i]).css("background", "blue");
    }
    else {
        $(".task" + [i]).css("background", "grey");
    }
}


$(".todo-form").submit(function (event) {
    event.preventDefault();

    var user = {
        amNine: todoInput1.value.trim(),
        amTen: todoInput2.value.trim(),
        amEleven: todoInput3.value.trim(),
        pmTwelve: todoInput4.value.trim(),
        pmOne: todoInput5.value.trim(),
        pmTwo: todoInput6.value.trim(),
        pmThree: todoInput7.value.trim(),
        pmFour: todoInput8.value.trim(),
        pmFive: todoInput9.value.trim()
    };
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));




});
var readStorage = function () {
    var lastUser = JSON.parse(localStorage.getItem("user"));
    console.log(lastUser);
    $(".task1 input").val(lastUser.amNine);
    $(".task2 input").val(lastUser.amTen);
    $(".task3 input").val(lastUser.amEleven);
    $(".task4 input").val(lastUser.pmTwelve);
    $(".task5 input").val(lastUser.pmOne);
    $(".task6 input").val(lastUser.pmTwo);
    $(".task7 input").val(lastUser.pmThree);
    $(".task8 input").val(lastUser.pmFour);
    $(".task9 input").val(lastUser.pmFive);

}

readStorage();


