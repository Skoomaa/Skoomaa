function hideall(){
    $('#troislettre').hide();
    $('#quatrelettre').hide();
    $('#cinqlettre').hide();
    $('#sixlettre').hide();
    $('#septlettre').hide();
    $('#huitlettre').hide();
    $('#neuflettre').hide();
    $('#dixlettre').hide();
    $('#onzelettre').hide();
    $('#douzelettre').hide();
    $('.bgblack ').hide();
}
hideall();


var fisrt ;
var long;

function hideall(){
    $('#troislettre').hide();
    $('#quatrelettre').hide();
    $('#cinqlettre').hide();
    $('#sixlettre').hide();
    $('#septlettre').hide();
    $('#huitlettre').hide();
    $('#neuflettre').hide();
    $('#dixlettre').hide();
    $('#onzelettre').hide();
    $('#douzelettre').hide();
    $('.btn-secondary ').hide();
}
hideall();
function lettragefirst(){
    first="helloworld";
    long=first.toUpperCase();
    if(long.length<3){
    }
    else if(long.length===3){
        hideall();
        for(i=0;i<3;i++){
            if(long[i]==="*"){
                $('#3' + i).attr("src","Letters/CS/CS1.jpg");}
            else{$('#3' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#troislettre').show();
    }
    else if(long.length===4){
        hideall();
        for(i=0;i<4;i++){
            if(long[i]==="*"){
                $('#4' + i).attr("src","Letters/CS/CS1.jpg");}
            else{
                $('#4' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#quatrelettre').show();
    }
    else if(long.length===5){
        hideall();
        for(i=0;i<5;i++){
            if(long[i]==="*"){
                $('#5' + i).attr("src","Letters/CS/CS1.jpg");}
            else{
                $('#5' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#cinqlettre').show();
    }
    else if(long.length===6){
        hideall();
        for(i=0;i<6;i++){
            if(long[i]==="*"){
                $('#6' + i).attr("src","Letters/CS/CS1.jpg");}
            else{
                $('#6' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#sixlettre').show();
    }
    else if(long.length===7){
        hideall();
        for(i=0;i<7;i++){
            if(long[i]==="*"){
                $('#7' + i).attr("src","Letters/CS/CS1.jpg");}
            else{
                $('#7' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#septlettre').show();
    }
    else if(long.length===8){
        hideall();
        for(i=0;i<8;i++){
            if(long[i]==="*"){
                $('#8' + i).attr("src","Letters/CS/CS1.jpg");}
            else{
                $('#8' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#huitlettre').show();
    }
    else if(long.length===9){
        hideall();
        for(i=0;i<9;i++){
            if(long[i]==="*"){
                $('#9' + i).attr("src","Letters/CS/CS1.jpg");}
            else{
                $('#9' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#neuflettre').show();
    }
    else if(long.length===10){
        hideall();
        for(i=0;i<10;i++){
            if(long[i]==="*"){
                $('#10' + i).attr("src","Letters/CS/CS1.jpg");}
            else{
                $('#10' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#dixlettre').show();
    }
    else if(long.length===11){
        hideall();
        for(i=0;i<11;i++){
            if(long[i]==="*"){
                $('#11' + i).attr("src","Letters/CS/CS1.jpg");}
            else{
                $('#11' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#onzelettre').show();
    }
    else if(long.length===12){
        hideall();
        for(i=0;i<12;i++){
            if(long[i]==="*"){
                $('#12' + i).attr("src","Letters/CS/CS1.jpg");}
            else{
                $('#12' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
            }
        }
        $('#douzelettre').show();
    }
    else{

    }}
lettragefirst();





function lettrage(){
    first=$('#textlaid').val();
    long=first.toUpperCase();
    if(long.length<3){
}
else if(long.length===3){
    hideall();
    for(i=0;i<3;i++){
if(long[i]==="*"){
$('#3' + i).attr("src","Letters/CS/CS1.jpg");}
        else{$('#3' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
        }
    $('#troislettre').show();
}
else if(long.length===4){
    hideall();
    for(i=0;i<4;i++){
        if(long[i]==="*"){
            $('#4' + i).attr("src","Letters/CS/CS1.jpg");}
        else{
        $('#4' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
        }
    $('#quatrelettre').show();
}
else if(long.length===5){
    hideall();
    for(i=0;i<5;i++){
        if(long[i]==="*"){
            $('#5' + i).attr("src","Letters/CS/CS1.jpg");}
        else{
        $('#5' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
        }
    $('#cinqlettre').show();
}
else if(long.length===6){
    hideall();
    for(i=0;i<6;i++){
        if(long[i]==="*"){
            $('#6' + i).attr("src","Letters/CS/CS1.jpg");}
        else{
        $('#6' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
        }
    $('#sixlettre').show();
}
else if(long.length===7){
    hideall();
    for(i=0;i<7;i++){
        if(long[i]==="*"){
            $('#7' + i).attr("src","Letters/CS/CS1.jpg");}
        else{
        $('#7' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
        }
    $('#septlettre').show();
}
else if(long.length===8){
    hideall();
    for(i=0;i<8;i++){
        if(long[i]==="*"){
            $('#8' + i).attr("src","Letters/CS/CS1.jpg");}
        else{
        $('#8' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
        }
    $('#huitlettre').show();
}
else if(long.length===9){
    hideall();
    for(i=0;i<9;i++){
        if(long[i]==="*"){
            $('#9' + i).attr("src","Letters/CS/CS1.jpg");}
        else{
        $('#9' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
        }
    $('#neuflettre').show();
}
else if(long.length===10){
    hideall();
    for(i=0;i<10;i++){
        if(long[i]==="*"){
            $('#10' + i).attr("src","Letters/CS/CS1.jpg");}
        else{
        $('#10' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
    }
    $('#dixlettre').show();
}
else if(long.length===11){
    hideall();
    for(i=0;i<11;i++){
        if(long[i]==="*"){
            $('#11' + i).attr("src","Letters/CS/CS1.jpg");}
        else{
        $('#11' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
    }
    $('#onzelettre').show();
}
else if(long.length===12){
    hideall();
    for(i=0;i<12;i++){
        if(long[i]==="*"){
            $('#12' + i).attr("src","Letters/CS/CS1.jpg");}
        else{
        $('#12' + i).attr("src","Letters/" + long[i] + "/"+ long[i] + "1.jpg");
    }
        }
    $('#douzelettre').show();
}
else{

}}


$('#boutonsub').click(function () {
   lettrage();

});


$('#textlaid').keyup(function () {
    first=$('#textlaid').val();
    long=first.toUpperCase();

    if(long.length<3){
        $('#hello').html("Trop court");
    }
    else if(long.length>12){
        $('#hello').html("Trop long");
    }
    else{
        $('#hello').html("");
    }

});




$(".blanc").click(function () {
    $('.bgforall').css("background-image","url(background/blanc.jpg)");

});
$(".bleu").click(function () {
    $('.bgforall').css("background-image","url(background/bleu.jpg)");

});
$(".bleuFonce").click(function () {
    $('.bgforall').css("background-image","url(background/bleuFonce.jpg)");

});
$("#gris").click(function () {
    $('.bgforall').css("background-image","url(background/gris.jpg)");

});
$(".noir").click(function () {
    $('.bgforall').css("background-image","url(background/noir.jpg)");

});
$(".rose").click(function () {
    $('.bgforall').css("background-image","url(background/rose.jpg)");

});
$("#rouge").click(function () {
    $('.bgforall').css("background-image","url(background/rouge.jpg)");

});



    $("img").click(function(){

        if($(this).attr("id")<1400){
            achanger=$(this).attr("id");
            for(x=1;x<=5;x++){
            valuesrc=$(this).attr("src");
            valeurreele=valuesrc[8];
            valeurdetest=valuesrc[9];
            if(valeurdetest==="S"){
                $('.letter' + x).attr("src","Letters/CS/CS" + x + ".jpg");
            }else{
                $('.letter' + x).attr("src","Letters/" + valeurreele + "/"+ valeurreele + x + ".jpg");
                }
            }

            $('#exampleModal').modal('show');
        }

        else{

        }
    });

$("img").click(function(){
    for(r=1;r<=5;r++)
    if($(this).attr("id")==="l" + r){
        nbdelalettre=r;
       gegere=$(this).attr("src");
       lalettree=gegere[8];
       lalettretest=gegere[9];

       if(lalettretest==="S"){
           $('#' + achanger).attr("src","Letters/CS/CS"+nbdelalettre+".jpg");
           $('#exampleModal').modal('hide');

       }
       else{

        $('#' + achanger).attr("src","Letters/" +lalettree+ "/"+lalettree+nbdelalettre+".jpg");
        $('#exampleModal').modal('hide');
        }

    }
    else{

    }
});

$('#textlaid').keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault();
        lettrage();
    }
});







