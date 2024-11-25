$(function(){

  $("#ham").click(function(){
    $("#hammenu").animate({left:"0%"},600);
  })

  $("#hamex").click(function(){
    $("#hammenu").animate({left:"-75%"},600);
    })


    setInterval(function(){
      const left1 = $('#ban_main ul').css('left'); // 0
      if(parseInt(left1)==-1280){
        //막약 위치가 -1280px라면 (3번째 이미지에 위치해 있으면)
        $('#ban_main ul').animate({
          left: 0  //ul의 왼쪽 위치를 0으로 처리
        },0);
      }else{
        $('#ban_main ul').animate({
          left:'-=640px'
          // ul의 왼쪽위치를 현재 위치에서 -640px처리
        },500)}
  
    },3000);

//ticker start

    const ticker = function(){
setTimeout(function(){
$('#ticker li:first').animate({marginTop:'-20px'},400,function(){
            $(this).detach().appendTo('ul#ticker').removeAttr('style');
          });
       ticker();
    },3000); 
    }; 
    ticker();

//ticker end
    

})