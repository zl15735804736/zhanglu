$(function(){
      var num=0;
      var next=0;
      var ww=$(window).width();
      $(".imgbox>a:gt(0)").css("left",$(".imgbox>a").width()+"px");
      var flag=true;
      function move(type){
            type=type||"next";
            if(!flag){
                  return;
                }
            flag=false;
            $(".imgbox>a").stop(false,false)
            if(type=="pre"){
                  next--;
                  if(next<0){
                        next=$(".imgbox>a").length-1;
                      }
                  $(".imgbox>a").eq(next).css("left","-"+$(".imgbox>a").width()+"px").animate({left:0});
                  $(".imgbox>a").eq(num).animate({left:ww},function(){
                        flag=true;
                      });
                }
            else if(type=="next"){
                  next;
                  if(next>=$(".imgbox>a").length){
                        next=0;
                      }
                  $(".imgbox>a").eq(next).css("left",$(".imgbox>a").width()"px").animate({left:0});
                  $(".imgbox>a").eq(num).animate({left:"-"+$(".imgbox>a").width()},function(){
                        flag=true;
                      });
                }
            $(".banner>.btn>li").eq(next).addClass("active");
            $(".banner>.btn>li").eq(num).removeClass("active")
            num=next;
          }
      var t =  setInterval(move,2000)
         $(".banner").mouseover(function(){
              clearInterval(t)
             }).mouseout(function(){
              t =  setInterval(move,2000)
                 })
        $(".leftbtn").click(function(){
              move("pre");
            })
        $(".rightbtn").click(function(){
              move("next");
            })
        $(".banner>.btn li").click(function(){
              next=$(this).index()
                  if(num>next){
                    next=$(this).index()-1
                        move("next")
                      }else if(num<next){
                    next=$(this).index()+1
                        move("pre")
                      }
            })
        })