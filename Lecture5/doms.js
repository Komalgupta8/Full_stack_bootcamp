const heading=document.getElementById('heading')
console.log(heading.innerText)
heading.innerText='hello'

heading.setAttribute('class' , 'min-heading') 
console.log(heading.getAttribute('id'))
heading.removeAttribute('id')
console.log(heading)

heading.addEventListener('click',()=>{
    alert('heading was changed')
})

const title=document.getElementById('title')
const button=document.getElementById('btn')

button.addEventListener('click' , ()=>{
    title.innerText='new title'
    title.style.color='blue'
})







