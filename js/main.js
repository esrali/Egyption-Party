//header
let ulWidth=$(".sideBar ul").outerWidth(true);
$(".sideBar").animate({left:`-${ulWidth}`},0)

$("header span").click(function(){
    let ulWidth=$(".sideBar ul").outerWidth(true);
    if($(".sideBar").css("left")!="0px")
    {
        $(".sideBar").animate({left:`0px`},500)
        $("header span").animate({left:ulWidth},500)
    }
})
$("#close").click(function(){
    console.log("hiiiii")
    let ulWidth=$(".sideBar ul").outerWidth(true);
    $(".sideBar").animate({left:`-${ulWidth}`},500)
    if($(".sideBar").css("left")=="0px")
    {
        $(".sideBar").animate({left:`-${ulWidth}`},500)
        $("header span").animate({left:`0px`},500)
    }
})


//section 

$("#duration p").slideUp(0);

$("#duration h2").click(function(eInfo){
        $(eInfo.target).next().slideToggle(500);
        $("#duration p").not($(eInfo.target).next()).slideUp(500);
})




//counter down
//the end of the year to count down to
let countDownDte=new Date("Dec 31, 2024 23:59:59").getTime();

let counter=setInterval(()=>{
    //date now in ms
    let dateNow= new Date().getTime();
    //get diff btw date now and the end of the year in ms
    let diff=countDownDte-dateNow;

    //get days
    let days=Math.floor(diff/(1000*60*60*24));
    document.querySelector("#days").innerHTML= days < 10 ? `-0${days} D`:`- ${days} D`;
    //get hours
    let hours =Math.floor(diff%(1000*60*60*24)/(1000*60*60));
    document.querySelector("#hours").innerHTML= hours < 10 ? `0${hours} h`:`${hours} h`;

    //get minutes
    let minutes=Math.floor(diff%(1000*60*60)/(1000*60));
    document.querySelector("#minutes").innerHTML= minutes <10 ? `0${minutes} m`:`${minutes} m`;

    //get seconds
    let seconds=Math.floor(diff%(1000*60)/(1000))
    document.querySelector("#seconds").innerHTML= seconds  <10 ? `0${seconds} s`:` ${seconds} s`;


    if(diff<0)
    {
        clearInterval(counter);
    }
    
},1000)


//contact 

document.querySelector("textarea").addEventListener("keyup",function(){
    let textVal =document.querySelector("textarea").value;
    let textLen= textVal.length;
    let max= 100-textLen
    if( max>0 ){
        document.querySelector("#char").innerHTML=100-textLen;
    }else{
        document.querySelector("#char").innerHTML="your available character finished ";
    }
})



