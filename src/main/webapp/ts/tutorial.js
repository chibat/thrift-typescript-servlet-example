/// <reference path="typings/thrift.d.ts" />
/// <reference path="typings/Calculator.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
$(document).ready(function () {
    // remove pseudo child required for valid xhtml strict
    $("#op").children().remove();
    // add operations to it's dropdown menu
    $.each(Operation, function (key, value) {
        $('#op').append($("<option></option>").attr("value", value).text(key));
    });
    $('table.calculator').attr('width', 500);
});
function calc() {
    var transport = new Thrift.Transport("/thrift_typescript_servlet-example/call");
    var protocol = new Thrift.Protocol(transport);
    var client = new CalculatorClient(protocol);
    var work = new Work();
    work.num1 = $("#num1").val();
    work.num2 = $("#num2").val();
    work.op = $("#op").val();
    try {
        var result = String(client.calculate(1, work));
        $('#result').val(result);
        $('#result').css('color', 'black');
    }
    catch (ouch) {
        $('#result').val(ouch.why);
        $('#result').css('color', 'red');
    }
}
function auto_calc() {
    if ($('#autoupdate:checked').val() !== undefined) {
        calc();
    }
}
