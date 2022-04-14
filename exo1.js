const btnCalcHtml = document.getElementById('btnCalc')
const userNbHtml = document.getElementById('userNb')
const showResultHtml = document.getElementById('showResult')


btnCalcHtml.addEventListener('click',()=>{
    let userInput = userNbHtml.value
    console.log(userInput)
    let result = ""
    
    for (let i  = 0; i <= 10; i++) {
         result += `<div><span class="nb1">${userInput}</span> X <span class="nb1">${i}</span>= <span class="rst">${userInput*i}</span></div>`

        

    }

    showResultHtml.innerHTML = result ;
    const rstHtml = document.querySelectorAll('.rst')
    


    rstHtml.forEach(item => {

        item.addEventListener('click',(e)=>{

            alert(e.target.textContent) 

            if(e.target.textContent % 2 == 0){
                alert('le resultat est pair')
            }else{
                alert('le resultat est impair')
            }
    
        });
    
        
    });

   
})







