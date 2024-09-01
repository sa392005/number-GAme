let btn1=document.querySelector(".btn1");
let p1=document.querySelector(".p1");
let inp1=document.querySelector(".inp1")
let gen_no=  Math.floor(Math.random()*100);
btn1.addEventListener("click",function(){
    setTimeout(function change_text(){
        p1.innerText="Computer is guessing!!!!"
    },200),setTimeout(function change_text1(){
        p1.innerText="Computer guessed the Luckey no.!!!!"
    },1000),inp1.style.opacity='0.4'
})
inp1.addEventListener("change",function(event){
    number_game();
    
})
 function  number_game(){
    let number=inp1.value
    console.log(number);
    console.log(gen_no);
    check=/\d/.test(number);
    if (check==true||number=="quit"){
    console.log("you have entered a no.")
    }
    else{
    alert("please enter the valid no.")
    }
    let i=1;
    while(i<=1){if(number==gen_no){alert("your entered no. is right")
    break;}
        if(i==1){if(number>gen_no){alert("your entered no. is greater than the luckey no.")
                 }       
        else if(number<gen_no){
                alert("your entered no. is smaller than the luckey no.")
                  }
        else if(number="quit"){alert("you quit the game")}       }
            break;
        
    }
    inp1.value=null;   
      
}



