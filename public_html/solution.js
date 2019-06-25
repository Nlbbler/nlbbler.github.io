$(document).ready(function () {
    $("#getTheSolution").click(getTheSolution);
});

function getTheSolution() {
    if ($("#solutionNumberInput").val() !== "") {
        $("#solutionProper").empty();
        $.ajax({
            "url": "taskList.xml",
            "type": "GET",
            "dataType": "xml",
            "success": function (task) {
                var t = $(task).find("task[number='" + $("#solutionNumberInput").val() + "']").html();
                $("#solutionProper").load("solutions/" + t + ".html");
                if ($("#solutionProper").empty()) {
                    $("#solutionProper").html("<p>Извините, решения для задачи с таким номером не найдено. Либо его еще нет, либо нет самой задачи с таким номером.</p>");
                }
            },
            "failure": function () {
                $("#solutionProper").html("<p>Произошла ошибка при получении данных с сервера. Пожалуйста, повторите свой запрос через некоторое время.Приносим извинения за неудобства.</p>")
                        .addClass("alert");
            }
        });
    }
}
