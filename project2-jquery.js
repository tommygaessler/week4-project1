// Add your JS here.
$(document).ready(function(){
    
    //Question 1
    $("#hover").mouseenter(function(){
        $("#hover").css("background-color", "red")
    });

    $("#hover").mouseleave(function(){
        $("#hover").css("background-color", "#39B7CD")
    });

    $("#hover").click(function(){
        $("#hover").toggleClass("green")
    });

    //Question 2

    $(".hideMe").click(function(){
        $(".hideMe").hide();           
    });

    //Question 3

    $("button.changeColor").click(function(){
        $("ul li").eq(2).css("color", "#8A2BE2")
    });

    //Question 4

    $("button#removeLi").click(function(){
        $("ul li").eq(1).remove()
    });

    //Question 5

    $("ul li").eq(3).click(function(){
        $("li").eq(2).append("<li>Test</li>")
    });

    //Question 6

    $("ul li:last-child").click(function(){
        $(this).css("font-size", "40px");
        $("ul li:not(:last)").hide();
    });

    //Question 7

    
    $(".cute").click(function(){
        for (var i=0; i<20; i++)
        {
            $(this).clone().appendTo(".clones");
        }
    });

    //Question 8

    $("body").dblclick(function(){
        $("#makeSquare").css("border-radius", "0")
        $("#makeSquare").css("width", "120px")
    })

    //Question 9

    $("#dontClick").click(function(){
        alert("World Destruction!")  
    })

    //Question 10

    $(".black").click(function() {
        $("body").removeClass();
        $("body").addClass("black");
    });

    $(".wood").click(function() {
        $("body").removeClass();
        $("body").addClass("wood");
    });

      $(".chaos").click(function() {
        $("body").removeClass();
        $("body").addClass("chaos");
    });

      $(".restore").click(function() {
        $("body").removeClass();
    });

});

