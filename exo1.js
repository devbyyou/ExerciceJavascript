const btnCalcHtml = document.getElementById('btnCalc')
const userNbHtml = document.getElementById('userNb')
const showResultHtml = document.getElementById('showResult')
const rstHtml = document.querySelectorAll('.rst')


btnCalcHtml.addEventListener('click',()=>{
    let userInput = userNbHtml.value
    console.log(userInput)
    let result = ""
    
    for (let i  = 0; i <= 10; i++) {
         result += `<div><span class="nb1">${userInput}</span> X <span class="nb1">${i}</span>= <span class="rst">${userInput*i}</span></div>`

        // let newVAr = `${userInput} x ${i} = ${userInput*i}`
        // console.log(newVAr)

    }
    
    rstHtml.forEach(item => {

        item.addEventListener('click',(e)=>{
    
             e.target.style.background ="red";
    
        });
    
        
    });
    showResultHtml.innerHTML = result ;

   
})







