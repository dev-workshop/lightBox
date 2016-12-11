$(".wrapper .imgHolder").click(function(){

    var srcId = $(this).find("img").attr("src");

    var image = '<img src="'+srcId+'">';

    $(".picWrapper").fadeIn(500);

    $(".picWrapper .wrap").html("").append(image);

    console.log(image);
});

$(".picWrapper").click(function(){
   $(this).fadeOut(500);
});