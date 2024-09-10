document.addEventListener('click' , fun);
const dots = document.getElementById("dots")
const more=document.getElementById('more')

const btn=document.getElementById('btn');
function fun(){

    if(dots.style.display=='none'){
        dots.style.display='inline'
        btn.innerText='view more'
        more.style.display='none'
    }else{
        dots.style.display = "none"
        btn.innerHTML='view less'
        more.style.display='inline'
    }
    
}

const myPromise= new Promise((resolve , reject)=>{
    setTimeout(() => {
        let success=false;
        if(success){
            resolve('data fetched')
        }else{
            reject('error fetching data')
        }
    }, 1000);
})

myPromise.then(data=>{
    console.log(data+ 'thankyou')
})
.catch(error=>{
   console.log('error')
})
