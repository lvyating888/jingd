$(function(){
   /*banner*/
   var bannertu=$('.bannertu')[0];
  /* console.log(bannertu)*/
   var bannerimgs=$('.bannertua',bannertu);
   var btn=$('.btn')[0];
   var lis=$('li',btn);
   

   var t=setInterval(move,2000);
    var index=0;

    function move(){
     index++;

     if(index>bannerimgs.length-1){
     	index=0;
     }
     for(var i=0;i<bannerimgs.length;i++){
          bannerimgs[i].style.display="none";
          lis[i].style.background="#3e3e3e";
     }
     bannerimgs[index].style.display="block";
        lis[index].style.background="#b61b1f";

      bannerimgs[index].style.opacity="0.5";
        animate(bannerimgs[index],{opacity:1},500);
   }
  /* 小按钮 */
   
  
  /* 鼠标移动停止 */

   var btnleft=$('.anniuleft')[0];
   var btnright=$('.anniuright')[0];

   bannertu.onmouseover=function(){
          clearInterval(t);//设置鼠标经过事件将上面的t循环清除
          /*btnleft.style.display="block"
          btnright.style.display="block"*/
          animate(btnright,{opacity:0.9},500);
          animate(btnleft,{opacity:0.9},500);
     }
     bannertu.onmouseout=function(){
          t=setInterval(move,2000);
          //设置鼠标离开事件 将循环再次执行
           animate(btnright,{opacity:0},500);
          animate(btnleft,{opacity:0},500);
       /* btnleft.style.display="none"
        btnright.styles.display="none"*/
    }
  
  for (var i = 0; i < lis.length; i++) {
    lis[i].index=i;
    lis[i].onclick=function(){
      for (var j = 0; j < bannerimgs.length; j++) {
        lis[j].style.background="";
         bannerimgs[j].style.display="none";
        animate(bannerimgs[j],{opacity:0.5},500);
      };
      this.style.background="#b61b1f";
     
      bannerimgs[this.index].style.display="block";
      animate(bannerimgs[this.index],{opacity:1},500);
      index=this.index;       
    }

   };

   /*左右按钮 */

  
   btnright.onclick=function(){
   	move();
   }
   btnleft.onclick=function(){
   	   index--;
   	   if(index==-1){
   	   	 index=bannerimgs.length-1
   	   }
   	   for(var i=0;i<bannerimgs.length;i++){
          bannerimgs[i].style.display="none";
          lis[i].style.background="#3e3e3e";
       }
       bannerimgs[index].style.display="block";
        lis[index].style.background="#b61b1f";
        bannerimgs[index].style.opacity="0.5";
        animate(bannerimgs[index],{opacity:1},2000);
        this.index=index;
   }
  
   /*无缝轮播1*/

   var mainul=$('.mainrightul')[0];
   var mainlis=$('li',mainul);
   var liw=parseInt(getStyle(mainlis[0],'width'));
   mainul.style.width=mainlis.length*liw+'px';
    
  
    var f1=0;
    var flag=true;
 

      function move1(box,tw,tws,btns){
        if(!flag){return}
          flag=false;

        animate(box,{marginLeft:-tw},600,function(){box.appendChild(getFirst(box));//把第一个子元素放到最后
        f1++;
        box.style.marginLeft=0;
        if(f1==tws.length){
          f1=0;
        }
        flag=true;
        })
      }
      
      function move2(box,tw,tws){
        if(!flag){return}
          flag=false;
      insertBefore(getLast(box),getFirst(box));
      box.style.marginLeft=-tw+'px';
       animate(box,{marginLeft:0},600,function(){ 
            f1--;
            if(f1==-1){
              f1=tws.length-1;

                }
                flag=true;
                 });
        }

     var mainbox=$('.mainright')[0];
      mainbox.onmouseover=function(){
       /* clearInterval(t1);*/
       animate(btn2right,{opacity:1},500);
       animate(btn2left,{opacity:1},500);

      }
      mainbox.onmouseout=function(){
        /*t1=setInterval(move1,2000);*/
       animate(btn2right,{opacity:0},500);
       animate(btn2left,{opacity:0},500);

      }

      var btn2left=$('.btn2left')[0];
      var btn2right=$('.btn2right')[0];

     btn2right.onclick=function(){
       	  move1(mainul,liw,mainlis);
       }

      btn2left.onclick=function(){
          move2(mainul,liw,mainlis);
       }

     
     /* 换一批 */

     var huan=$('.main1titleleft')[0];
     
     var box=$('.main1b')[0];
     var huanul=$('ul',box);
     var CNXHindex=0;

     	huan.onclick=function(){
        CNXHindex++;
         if(CNXHindex==huanul.length){
         	CNXHindex=0;
         }
     	 for(var i=0;i<huanul.length;i++){
         huanul[i].style.display="none";
     	      
     	}
     	huanul[CNXHindex].style.display="block";
     	
     }
     
     /* 1f 选项卡*/
     
  
     function xuanxiang(xuanze,f1bottom){

 
     var xuanzeli=$('li',xuanze);
     var xuanzespan1=$('span',xuanze);
   
     
    
     var f1right=$('.f1right',f1bottom);
    
     
     xuanzeli[0].style.width="58px"
     for(var i=0;i<xuanzeli.length;i++){
          xuanzeli[i].xzindex=i;
          xuanzeli[i].onmouseover=function(){
             for(var j=0;j<f1right.length;j++){
               xuanzeli[j].className="xuanzeli"
               /*console.log(xuanzeli[j])*/
               f1right[j].style.display='none';
               xuanzespan1[j].style.display='block';
             }
             this.className+=" xuanzeliw "
              f1right[this.xzindex].style.display='block';
            var xuanzespan=$('span',this)[0];
             var xuanzespan2=$('span',xuanzeli[this.xzindex-1])[0];
               xuanzespan.style.display='none';
              xuanzespan2.style.display='none';
    
          }
       }

   }
   var f1bottom=$('.f1bottom'); 
  var xuanze=$('.xuanze');
  for (var i = 0; i < xuanze.length; i++) { 
    xuanxiang(xuanze[i],f1bottom[i]);
  };


     /*双下标 小轮播 */
     
  function wheel(s,t){
    var flag1=true;
    var next=0;//下一张图片的下标
    var now=0;

    var  f11=0;
 
    function move3(tus,tw,xiao){
      if(!flag1){return;}
      next++;
        flag1=false;
        if(next==tus.length){
        next=0;
      } 
      tus[next].style.left=tw+"px";//把即将要显示的图片放到 距离左边一个图片距离
     /*console.log(li[next])*/
      animate(tus[now],{left:-tw},300,function(){
        flag1=true;
      })
      animate(tus[next],{left:0},300)
      
    
   
    xiao[now].style.background="#3e3e3e"
  
    xiao[next].style.background="#b61b1f"
   now=next;//将下一张的下标赋给了now

 }



  function move4(tus,tw,xiao){
      if(!flag1){return;}
      next--;
        flag1=false;
       if(next==-1){
         next=tus.length-1;
      } 
      tus[next].style.left=-tw+"px";//把即将要显示的图片放到 距离左边一个图片距离
     /*console.log(li[next])*/
      animate(tus[now],{left:tw},300,function(){
        flag1=true;
      })
      animate(tus[next],{left:0},300)
      
    
   
    xiao[now].style.background="#3e3e3e"
  
    xiao[next].style.background="#b61b1f"
    now=next;//将下一张的下标赋给了now

 }

   var xiaolunbo=$('.xiaolunbo')[s];
   // console.log(xiaolunbo)
   var xiaolunboul=$('.xiaolunboul')[s];
   var xiaolblis=$('li',xiaolunboul);
   xiaolblis[0].style.left=0;
   var xiaolbw=parseInt(getStyle(xiaolblis[0],'width'));

   xiaolunboul.style.width=xiaolblis.length*xiaolbw+'px';
 
 var xiaoanniubox=$('.xiaoanniubox')[s];
 var xiaoanniu=$('.xiaoanniu',xiaoanniubox);


  
  function bb(){
    move3(xiaolblis,xiaolbw,xiaoanniu);
     }
      var t1=setInterval(bb,t);

  /* 鼠标移上去暂停*/
  xiaolunbo.onmouseover=function(){
        clearInterval(t1);
       animate(xiaobtnleft,{opacity:1},500);
       animate(xiaobtnright,{opacity:1},500);

      }
      xiaolunbo.onmouseout=function(){
        t1=setInterval(bb,t);
       animate(xiaobtnleft,{opacity:0},500);
       animate(xiaobtnright,{opacity:0},500);

      }

     
     var xiaobtnleft=$('.xiaobtnleft')[s];
      var xiaobtnright=$('.xiaobtnright')[s];

     xiaobtnright.onclick=function(){
           move3(xiaolblis,xiaolbw,xiaoanniu);
       }

      xiaobtnleft.onclick=function(){
          move4(xiaolblis,xiaolbw,xiaoanniu);
       }
  

  /* 小按钮 */
    for (var i = 0; i < xiaoanniu.length; i++) {
    xiaoanniu[i].index=i;
    xiaoanniu[i].onclick=function(){
      if(!flag1||next==this.index){return;}
        flag1=false;
        if(this.index>next){
           xiaolblis[this.index].style.left=xiaolbw+"px";
        animate(xiaolblis[now],{left:-xiaolbw},300);
        }if(this.index<next){
            xiaolblis[this.index].style.left=-xiaolbw+"px";
          animate(xiaolblis[now],{left:xiaolbw},300);
        }
        
        animate(xiaolblis[this.index],{left:0},300,function(){
          flag1=true;
        });
        xiaoanniu[now].style.background="#3e3e3e";
        xiaoanniu[this.index].style.background="#b61b1f";
        now=next=this.index;
    }
  };
}
   

   wheel(0,2000);
   wheel(1,300);
   wheel(2,2000);
   wheel(3,2000);
   wheel(4,2000);
   wheel(5,2000);
   wheel(6,2000);
   wheel(7,2000);
   wheel(8,2000);
   wheel(9,2000);
   wheel(10,2000);
   wheel(11,2000);
   
   /* f12向下 */
   var f12rightbox=$('.f12rightneirong')[0];
   var f12rightul=$('ul',f12rightbox)[0];
   var f12rightlis=$('li',f12rightbox);
   var f12rightlih=parseInt(getStyle(f12rightlis[0],'height'));

   f12rightul.style.height=f12rightlis.length*f12rightlih+'px';
      
      var f11=0;
      var f12=true;
       //向上
      /*function xiangshang(){
        if(!flag){return}
          f12=false;

        animate(f12rightul,{marginTop:-f12rightlih},600,function(){f12rightul.appendChild(getFirst(f12rightul));//把第一个子元素放到最后
        f11++;
        f12rightul.style.marginTop=0;
        if(f11==f12rightlis.length){
          f11=0;
        }
        f12=true;
        })
    }
  setInterval(xiangshang,2000)*/

  function xiangxia(){
        if(!flag){return}
          f12=false;
      insertBefore(getLast(f12rightul),getFirst(f12rightul));
      f12rightul.style.marginTop=-f12rightlih+'px';
       animate(f12rightul,{marginTop:0},600,function(){ 
            f11--;
            if(f11==-1){
              f11=f12rightlis.length-1;
              }
               f12=true;
            });
      }
      var xia=setInterval(xiangxia,2000);
      

      var f12rightbot=$('.f12rightbot')[0];
    f12rightbot.onmouseover=function(){
       clearInterval(xia)
    }
    f12rightbot.onmouseout=function(){
       xia=setInterval(xiangxia,2000)
    }

      var f12leftulbox=$('.f12leftulbox')[0];
      var f12img=$('img',f12leftulbox);
      /*console.log(f12img)*/
      for(var i=0;i<f12img.length;i++){
       f12img[i].onmouseover=function(){
          animate(this,{marginLeft:-10},200);

      }
      f12img[i].onmouseout=function(){
          animate(this,{marginLeft:0},200);
      }
    }


/*后加*/
    var main2a1=$('.main2a1zi');
     function yid(main2a1){
      var main2a1img=$('img',main2a1)[0];
     /* console.log(main2a1img)*/
      main2a1img.onmouseover=function(){
          animate(this,{marginLeft:-8},200);
      }
      main2a1img.onmouseout=function(){
          animate(this,{marginLeft:0},200);
      }
   }

   for(var i=0;i<main2a1.length;i++){
      yid(main2a1[i])
   }
/* 侧栏 */
   var cebox=$('.cebox');
   
     function over(celan){

     var cedown=$('.cedown',celan)[0];
     var cedownw=parseInt(getStyle(cedown,"width"));
     var ceup=$('.aa',celan)[0];         
         celan.onmouseover=function(){

                animate(cedown,{left:-cedownw+3},400,Tween.Sine.easeIn)
                ceup.style.backgroundColor="#c81623";
                cedown.style.background="#c81623";
         }

         celan.onmouseout=function(){
                animate(cedown,{left:0},600,Tween.Bounce.easeInOut)

                 ceup.style.backgroundColor="#999";
                cedown.style.background="#999";
         }
         

      }
   
   for(var i=0;i<cebox.length;i++){
     over(cebox[i]);
   }     
/*  楼层跳转 */
  
 
var fanhui=$('.ceup4')[0];
/*console.log(fanhui)*/
fanhui.onclick=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement;
  animate(doc,{scrollTop:0});
}

 var floor=$('.floor');
 var floortiao=$('.floortiao')[0];
 var fllis=$('li',floortiao);

 var shuzif=$('.shuzif',floortiao);
 var wenzif=$('.wenzif',floortiao);
/* console.log(wenzif)*/
/* console.log(fllis)*/
 /*console.log(floor);*/
  
/*图片按需加载*/
 
  

  window.onscroll=function(){
    var tops=[];
  for(var i=0;i<floor.length;i++){
     tops.push(floor[i].offsetTop);
  }
 
  for(var i=0;i<fllis.length;i++){

      fllis[i].index=i;
      fllis[i].onclick=function(){
        animate(document.documentElement,{scrollTop:tops[this.index]});animate(document.body,{scrollTop:tops[this.index]})
      }
  }
    
    var hh=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
   /* console.log(hh)*/
    for(var i=0;i<tops.length;i++){
      if((hh+180)>tops[i]){
        for(var j=0;j<fllis.length;j++){
          shuzif[j].style.display="block";
          wenzif[j].style.display="none";
        }
        shuzif[i].style.display="none";
        wenzif[i].style.display="block";
      }
    }

    if(hh>=1500&&hh<8600){
                floortiao.style.display="block";
            }else{
                floortiao.style.display="none";
            }


    /*图片隐藏 按需加载*/
     var jd=$('.jd');
  //console.log(jd)
    var tou=[];//设置一个空数组
      for(var i=0;i<jd.length;i++){
           tou.push(jd[i].offsetTop);//把每一个楼层相对于浏览器的高度存放在tops这个数组中
          //console.log(tou[i])
          
      }
      //console.log(tou[2])

    var lh=document.documentElement.clientHeight;
     //console.log(lh)
     var DDoc=document.documentElement.scrollTop||document.body.scrollTop;
    //console.log(DDoc)
    for(var k=0;k<tou.length;k++){
      //console.log(tou.length)
      
      //console.log(DDoc)
       if(tou[k]<DDoc+lh){
        // console.log(tou[k])
         //console.log(k)
         //console.log($('img',jd[k]))
          var Imgs=$('img',jd[k]);
           
                for(var j=0;j<Imgs.length;j++){
                  Imgs[j].src=Imgs[j].getAttribute('datasrc')
                }
           
           
       }
    }
    /*jazai*/

  }
  window.onscroll();

  var topbanner=$('.topbanner')[0];
  var topbannerp=$('.xiaoshi',topbanner)[0];
  topbannerp.onclick=function(){
    topbanner.style.display="none"
  }

  /*头部下拉*/
  var topdhlan=$('.headbox')[0];
  var topdh=$('.dizhi',topdhlan);
  // console.log(topdh)
    for(var i=0;i<topdh.length;i++){
      hover(topdh[i],function(){
        var listone=$('.one',this)[0];
        if(!listone){return};
        listone.style.display="block";
      },function(){
        var listone=$('.one',this)[0];
        if(!listone){return};
        listone.style.display="none";
      })
    }
/*banner左侧*/
  var bannerlist=$('.list')[0];
  var blistli=$('li',bannerlist);
  // console.log(blistli)
  for(var i=0;i<blistli.length;i++){
    hover(blistli[i],function(){
      var bannerlistbox=$('.bannerlistbox',this)[0];
      if(!bannerlistbox){return};
      bannerlistbox.style.display="block";
    },function(){
       var bannerlistbox=$('.bannerlistbox',this)[0];
      if(!bannerlistbox){return};
      bannerlistbox.style.display="none";
      })
  }


  /*图片按需加载*/


})