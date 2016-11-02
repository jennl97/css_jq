/**
 * Created by JENN on 11/1/2016.
 */

$(document).ready(function () {
    "use strict";
    $("p").click(function () {
        $(this).toggleClass("highlight");
    });

    $("p").click(function () {
        $("p").css("color", "#0000ff");
    });

    $("h1").click(function () {
        $("h1").css("font-family", "serif");
    });

    $("h2").click(function () {
        $("h2").fadeTo("slow", 0.5);
    });

    $("h3").click(function () {
        $("h3").css("color", "pink");
    });

    $("#small").click(function(){
        $("body").css("font-size", "1em");
    });
    $("#medium").click(function(){
        $("body").css("font-size", "1.3em");
    });
    $("#large").click(function(){
        $("body").css("font-size", "1.6em");
    });

    $("button").click(function () {
        window.print();
    });

});