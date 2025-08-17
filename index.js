// const slides = document.querySelector(".slides")
// const slideEle = document.querySelectorAll(".slide")
// const body = document.body;

// const backgrounds = [
//     `linear-gradient(135deg,blue,white)`,
//     `linear-gradient(135deg,darkgreen,white)`,
//     `linear-gradient(135deg,#f6d365,#fda085)`,
//     `linear-gradient(135deg,red,white)`
// ]
// let index = 0;
// let index2 = 0

// function updateslide(){
//     const angle = (360 / slideEle.length)
//     slides.style.transform = `rotateY(${-index * angle}deg)`;
//     body.style.background = backgrounds[index2]

    
//     slideEle.forEach((slide,i)=>{
//         slide.style.transform = `rotateY(${i * angle}deg) translateZ(300px)`;
//     })
    

// }

// document.querySelector('.next').addEventListener("click",()=>{
//     index++
//     index2++
//     if(index2 == 4){
//         index2 = 0
//     }
//     updateslide()
    
// })
// document.querySelector('.prev').addEventListener("click",()=>{
//     index--
//     index2 = (index2 - 1 * -1)
//     console.log(index2);
    
//     if(index2 == 4){
//         index2  = 0
//     }

//     updateslide()
// })

// updateslide()

// ===================================================


const questions=[
    {
      question:"where is red color",
      answers:[
        {answer:"blue" , correct:"no"},
        {answer:"red" , correct:"yes"},
        {answer:"green" , correct:"no"},
        {answer:"orange" , correct:"no"},
      ]
    },
    {
      question:"where is green color",
      answers:[
        {answer:"blue" , correct:"no"},
        {answer:"red" , correct:"no"},
        {answer:"green" , correct:"yes"},
        {answer:"orange" , correct:"no"},
      ]
    },
    {
      question:"where is blue color",
      answers:[
        {answer:"blue" , correct:"yes"},
        {answer:"red" , correct:"no"},
        {answer:"green" , correct:"no"},
        {answer:"orange" , correct:"no"},
      ]
    },
    {
      question:"where is blue color",
      answers:[
        {answer:"blue" , correct:"no"},
        {answer:"red" , correct:"no"},
        {answer:"green" , correct:"no"},
        {answer:"orange" , correct:"yes"},
      ]
    },
    {
      question:"where is gray color",
      answers:[
        {answer:"blue" , correct:"no"},
        {answer:"gray" , correct:"yes"},
        {answer:"green" , correct:"no"},
        {answer:"orange" , correct:"no"},
      ]
    },
    {
      question:"where is black color",
      answers:[
        {answer:"blue" , correct:"no"},
        {answer:"gray" , correct:"no"},
        {answer:"green" , correct:"no"},
        {answer:"black" , correct:"yes"},
      ]
    },
    {
      question:"where is white color",
      answers:[
        {answer:"white" , correct:"yes"},
        {answer:"gray" , correct:"no"},
        {answer:"green" , correct:"no"},
        {answer:"black" , correct:"yes"},
      ]
    },
]

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const barQize = document.querySelector('.bar-quiz')
const resultEle = document.querySelector('.result')
const examination = document.querySelector('.examination')
const start = document.querySelector('.start')
const buttons = document.querySelectorAll('.button')
const scoreNum = document.querySelector('.scoreNum')
const number = document.querySelector('.number')
const circle = document.querySelector('.circle')
const correct = document.querySelector('.correctAn')
const wrong = document.querySelector('.wrong')
const mousClick = document.querySelector('.mousClick')




let move = 0
let additional = 0
let index= 0
let movenext = 0
let trueResult= 0
let totalresult=0
let percenttage = 0
    window.addEventListener("load", () => {
      correct.load(); 
      wrong.load(); 
      mousClick.load(); 
    });

next.addEventListener("click",()=>{  
    mousClick.play();
    move -= 100 
    additional -=60
    index++
    movenext++
    quizfun()
    
})
    
prev.addEventListener("click",()=>{
    mousClick.play();
    move += 100 
    additional +=60
    index--
    quizfun()
})


function quizfun(){
    barQize.style.left=`calc(${move}% + ${additional}px)` 
    
    if(index == totalresult){
        next.disabled = true
    }else{
        next.disabled = false
    }

    if(index === 0){
        prev.disabled = true
    }else{
        prev.disabled = false
    }
      

    if(index >= 6){
        next.innerText = "finish"
    }else{
        next.innerText = "next"
    }
    
    if(index == 7 && next.innerText == "finish"){
           resultEle.style.display="flex"
           examination.style.display="none"
            percent()
    }

    if(start){
        start.addEventListener("click",()=>{
            mousClick.play();
           resultEle.style.display="none"
           examination.style.display="block"
           move = 0
           additional = 0
            index= 0
            movenext = 0
            trueResult = 0
            totalresult = 0
            percenttage = 0
            percent()
            quizfun()
            buttons.forEach(btn=>{
                btn.style.backgroundColor="rgb(240, 240, 240)"
                btn.disabled = false
            })
        })
    } 

}
quizfun()

function percent(){
                scoreNum.innerText= `Your score: ${trueResult} of  7`
                const resultPercent = (trueResult / totalresult) * 100;

                interval = setTimeout(() => {
                    percent()
                    if(percenttage < parseInt(resultPercent)){
                            percenttage++               
                    }else{
                        clearTimeout(interval)
                    } 
                }, 10);   
                
                number.innerText = `${percenttage}%`
                circle.style.setProperty("--progress", `${percenttage}%`);
}


const answer1 = document.querySelector(".answers1")
answer1.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",(event)=>{ 
        if(event.target.innerText === "الشيخ سعيد"){
            correct.play()
            btn.style.backgroundColor="rgb(145, 255, 145)"
            trueResult++   
        }else{
            wrong.play()
            btn.style.backgroundColor="rgb(255, 149, 149)"
             Array.from(answer1.children).forEach(btnTrue=>{
                if(btnTrue.innerText === "الشيخ سعيد"){
                    btnTrue.style.backgroundColor="rgb(145, 255, 145)"
                }
            })
        }
        answer1.querySelectorAll("button").forEach(b => b.disabled = true);
        next.disabled = false
        totalresult++
    })
})

const answer2 = document.querySelector(".answers2")
answer2.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",(event)=>{
          
        if(event.target.innerText === "ياسمين"){
            correct.play()
            btn.style.backgroundColor="rgb(145, 255, 145)"
            trueResult++ 
        }else{
            wrong.play()
            btn.style.backgroundColor="rgb(255, 149, 149)"
             Array.from(answer2.children).forEach(btn=>{
                if(btn.innerText === "ياسمين"){
                    btn.style.backgroundColor="rgb(145, 255, 145)"
                }
            })
        }
        answer2.querySelectorAll("button").forEach(b => b.disabled = true);
        next.disabled = false
        totalresult++
    })
})

const answer3 = document.querySelector(".answers3")
answer3.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",(event)=>{
          
        if(event.target.innerText === "الزرافة / بهلول"){
            correct.play()
            btn.style.backgroundColor="rgb(145, 255, 145)"
            trueResult++ 
        }else{
            wrong.play()
            btn.style.backgroundColor="rgb(255, 149, 149)"
             Array.from(answer3.children).forEach(btn=>{
                if(btn.innerText === "الزرافة / بهلول"){
                    btn.style.backgroundColor="rgb(145, 255, 145)"
                }
             })
        }
        answer3.querySelectorAll("button").forEach(b => b.disabled = true);
        next.disabled = false
        totalresult++
    })
})

const answer4 = document.querySelector(".answers4")
answer4.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",(event)=>{
          
        if(event.target.innerText === "ادم / دومى"){
            correct.play()
            btn.style.backgroundColor="rgb(145, 255, 145)"
            trueResult++ 
        }else{
            wrong.play()
            btn.style.backgroundColor="rgb(255, 149, 149)"
             Array.from(answer4.children).forEach(btn=>{
                if(btn.innerText === "ادم / دومى"){
                    btn.style.backgroundColor="rgb(145, 255, 145)"
                }
             })
        }
        answer4.querySelectorAll("button").forEach(b => b.disabled = true);
        next.disabled = false
        totalresult++
    })
})

const answer5 = document.querySelector(".answers5")
answer5.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",(event)=>{   
        if(event.target.innerText === "ابو دماغ ضربه"){
            correct.play()
            btn.style.backgroundColor="rgb(145, 255, 145)"
            trueResult++ 
        }else{
            wrong.play()
            btn.style.backgroundColor="rgb(255, 149, 149)"
             Array.from(answer5.children).forEach(btn=>{
                if(btn.innerText === "ابو دماغ ضربه"){
                    btn.style.backgroundColor="rgb(145, 255, 145)"
                }
             })
        }
        answer5.querySelectorAll("button").forEach(b => b.disabled = true);
        next.disabled = false
        totalresult++
    })
})

const answer6 = document.querySelector(".answers6")
answer6.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",(event)=>{
          
        if(event.target.innerText === "البغل"){
            correct.play()
            btn.style.backgroundColor="rgb(145, 255, 145)"
            trueResult++ 
        }else{
            wrong.play()
            btn.style.backgroundColor="rgb(255, 149, 149)"
             Array.from(answer6.children).forEach(btn=>{
                if(btn.innerText === "البغل"){
                    btn.style.backgroundColor="rgb(145, 255, 145)"
                }
             })
        }
        answer6.querySelectorAll("button").forEach(b => b.disabled = true);
        next.disabled = false
        totalresult++
    })
})

const answer7 = document.querySelector(".answers7")
answer7.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",(event)=>{
          
        if(event.target.innerText === "جميع ما سبق"){
            correct.play()
            btn.style.backgroundColor="rgb(145, 255, 145)"
            trueResult++ 
        }else{
            wrong.play()
            btn.style.backgroundColor="rgb(255, 149, 149)"
             Array.from(answer7.children).forEach(btn=>{
                if(btn.innerText === "جميع ما سبق"){
                    btn.style.backgroundColor="rgb(145, 255, 145)"
                }
             })
        }
        answer6.querySelectorAll("button").forEach(b => b.disabled = true);
        next.disabled = false
        totalresult++
    })
})

              // Calculate the percentage scrolled

