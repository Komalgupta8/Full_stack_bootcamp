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

const fetchdata=()=>{
    return new promise(
        (resolve , reject)=>{
            setTimeout(()=>{
                resolve('data fetched')
            },1000)
        }
    )
}


const processD=(data)=>{
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${data} displayed`)
        })
    })
}

const displayD=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(` displayed`)
        },1000)
    })
}

fetchdata()
.then()

