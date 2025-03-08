let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountain3=document.getElementById('mountain3');
let mountain4=document.getElementById('mountain4');
let river=document.getElementById('river5');
let boat=document.getElementById('boat6');
let napster=document.querySelector('.Napster');
window.onscroll = function(){  

   
       
    
    let value=scrollY;
    stars.style.left=value +'px';//here stars start moving
    moon.style.top=value*4 +'px';//scrolling fast using value*4
    mountain3.style.top=value*2+'px';
    mountain4.style.top=value*1.5+'px';
    river5.style.top=value*  +'px';
    boat6.style.top=value*  +'px';
    boat6.style.left=value* 3 +'px';
    napster.style.fontSize=value  +'px';
    if (scrollY>=93.5999984741211)
    {
        napster.style.fontSize= 93.5999984741211 +'px';
        napster.style.position= 'fixed';
        if (scrollY>=332)
        {
            napster.style.display= 'none';

        }else{
              
            napster.style.display= 'block';

        }
          if (scrollY>=105.5999984741211){
            document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';

          }else{
                document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';
          }

    }



    


    
}


