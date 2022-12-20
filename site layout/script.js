$(function(){
   $("#changeButton")
   .css({
    "margin-left": "20px",
    "margin-bottom": "40px"
   }).click(function(){
    $(".news-comments-count").each(function(){
        if($(this).text() >= 20){
        $(this).css("color", "red");
        }
    });
   });
});