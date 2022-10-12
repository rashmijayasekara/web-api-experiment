const cursorElm=document.getElementById('cursor');
let tmrId=null;

addEventListener('mousemove',(eventData)=>{
    if(tmrId!=null){
        clearTimeout(tmrId);
        tmrId=null;
    }
    cursorElm.style.opacity=1;
    cursorElm.style.left=`${eventData.pageX}px`;
    cursorElm.style.top=`${eventData.pageY}px`;
    tmrId=setTimeout(()=>{
        cursorElm.style.opacity=0;
    },2000);

});

document.body.addEventListener('mouseleave',()=>{
    cursorElm.style.opacity=0;
    
});
document.body.addEventListener('mouseenter',()=>{
    cursorElm.style.opacity=1;
});
// let x=0;
// // const tmrId1=setInterval(()=>{
// //     console.log("print this "+x++);
// // },500);
// const tmrId1=setTimeout(()=>{
//     console.log('Bombe pipuruwa');
// },5000);
// const btnStopTimer1=document.querySelector('#btnStopTimer1');
// btnStopTimer1.addEventListener('click', ()=>{
//     clearInterval(tmrId1);
//     console.log('Nishkriya kala')
// });

