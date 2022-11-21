const board = document.querySelector('#board')
const SQUARES_NUMBER = 500

for (let i=0; i< SQUARES_NUMBER; i++ ) {
    const square = document.createElement('div')
    square.classList.add('square')
     
     

     square.addEventListener('mouseover', () => 
     DoTranspSquare(square))
    
     board.append(square)
    }
     function DoTranspSquare(element) {
        rgba(element.style.backgroundColor)
     }
    
