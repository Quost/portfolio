$(document).ready(function() {
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput2").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable2 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput3").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable3 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput4").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable4 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput5").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable5 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput6").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable6 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput7").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable7 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput8").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable8 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput9").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable9 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput10").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable10 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});