$(document).ready(function() {
    $("#tab_bar").show();
    $("#contact_content").hide();
    $("#add_content").hide();
});

$("#dialer").click(function() {
    $("#dialer_content").show();
    $("#contact_content").hide();
    $("#add_content").hide();
});

$("#contact_list").click(function() {
    $("#dialer_content").hide();
    $("#contact_content").show();
    $("#add_content").hide();
});

$("#add_contact").click(function() {
    $("#dialer_content").hide();
    $("#contact_content").hide();
    $("#add_content").show();
});

$(".grid-item").click(function() {
    var newNumber = $(this).text();
    console.log(newNumber)
    $('input[name="number"]').val(function(i, originalNumber) {
        console.log(originalNumber + newNumber);
        return originalNumber + newNumber;
    });
});

$("#clear").click(function() {
    $('input[name="number"]').val("");
});

$("#add").click(function() {
    $('input[name="name"]').text("");
    $('input[name="number"]').val("");
    $('input[name="email"]').val("");
});

$("#clear-contact").click(function() {
    $('input[name="name"]').val("");
    $('input[name="number"]').val("");
    $('input[name="email"]').val("");
});