console.log('hii')

const btn=document.getElementById('btn')
const para=document.getElementById('para')
const heading=document.getElementById('heading')

//btn.addEvenetListner('click', fun())

//ano function
const changeformat=function(){
     para.style.color='blue'
     para.innerHTML="heading changed"
}
btn.addEventListener('click' , changeformat)

//direct function
btn.addEventListener('click',()=>{
     heading.style.color='blue'
     heading.innerHTML='hello'
})


