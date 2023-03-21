let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');
let deg = 6;

setInterval(clockHandler , 1000);

// function clockHandler(){
//     // sec.style.transform = `rotateZ(${deg}deg)`;
//     // deg +=6
// }

// let d = new Date(2022,02,14,01,15,30);
// console.log(d.getSeconds());
// console.log(d.getMinutes());
// console.log(d.getHours());

// function clockHandler(){
//     let d = new Date();
//     let s = d.getSeconds();
//     let m = d.getMinutes();
//     let h = d.getHours() ;
//         sec.style.transform = `rotateZ(${s*deg}deg )`;
//         min.style.transform = `rotateZ(${m*deg}deg )`;
//        hour.style.transform = `rotateZ(${h *30 + (m/12)}deg )`;
//         
//     }

    function clockHandler(){
        let d = new Date();
        let s = d.getSeconds() *deg;
        let m = d.getMinutes() *deg;
        let h = d.getHours() *30 ;
            sec.style.transform = `rotateZ(${s}deg )`;
            min.style.transform = `rotateZ(${m}deg )`;
           hour.style.transform = `rotateZ(${h + (m/12)}deg )`;
            
        }