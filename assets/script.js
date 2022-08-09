$(document).ready(function () {
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

    
    var tasksObj = JSON.parse(localStorage.getItem("tasksObj")) || {
        "9": "",
        "10": "",
        "11": "",
        "12": "",
        "13": "",
        "14": "",
        "15": "",
        "16": "",
        "17": ""
    };


    for (var i = 0; i < 9; i++) {
        console.log(tasksObj[i + 9]);
        console.log($(`#${i + 9}`).find(".description").text(loadTxt));
        var loadTxt = tasksObj[i + 9];
        $(`#${i + 9}`).find(".description").text(loadTxt);
    };

    var currentDay = $("#currentDay");

    currentDay.text(moment().format('dddd, MMMM Do YYYY'));

    var currentHour = parseInt(moment().format('H'));

    console.log(currentHour);

    function storeTasks() {
        localStorage.setItem("tasksObj", JSON.stringify(tasksObj));
    };

  
    function styleTasks() {
        $(".row-info").each(function () {
            var elementHour = parseInt(($(this).attr("id")));
            
            if (elementHour < currentHour) {
                $(this).addClass("past");
            }
            else if (elementHour === currentHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");

            };
        });
    };


    console.log(tasksObj);

    
    $("button").on("click", function () {
        console.log($(this).parent().attr("id"));
        var taskId = $(this).parent().attr("id");
   
        var textInput = $(this).parent().find("textarea");
        textInput.val();
        console.log(textInput.val());
        console.log("my tasks: ", tasksObj);
        tasksObj[taskId] = textInput.val();
        storeTasks();
    });

styleTasks();
 
});