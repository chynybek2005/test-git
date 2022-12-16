// console.dir(document.children[0].children[1].children[0].children[0].children[0])


// function sayHello () {
    //     console.log("hello");
    // }
    // btn.addEventListener("click", () => {
        //     console.log("hello");
        // })
        
        
        
         

const btnStart = document.querySelector('start')
const modalTag = document.querySelector('modal')
const btnExit = document.querySelector('modal__exit')

btnStart.addEventListener('click', () => {
    modalTag.style.display = 'inline-block'
})

btnExit.addEventListener('click', (event) => {
    event.preventDefault();
})


