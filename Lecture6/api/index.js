const btn=document.getElementById('btn')
const list=document.getElementById('list')


const fetchPost=()=>{
  fetch('https://fakestoreapi.com/products')
  .then(reponse=>reponse.json()
     .then(data=>{
        console.log(data)
     }

    ).catch(error=>console.log('error'))
   )
}

console.log(fetchPost())

const fetchPost1=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(reponse=>reponse.json()   //text format converted to json format
       .then(posts=>{
          list.innerHTML=' '
          posts.forEach(post => {
            const li=document.createElement('li')
            li.innerText=post.title
            const img=document.createElement('img')
            img.src=post.image
            const pr=document.createElement('price')
            pr.innerHTML=post.price
            
            list.appendChild(li)
            list.appendChild(pr)
            list.appendChild(img)
        });
       }
  
      ).catch(error=>console.log('error'))
    )
}


btn.addEventListener('click',fetchPost1)



