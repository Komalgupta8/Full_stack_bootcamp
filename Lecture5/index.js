function Employee(name , employee_id){
     this.name=name
     this.employee_id=employee_id
     this.greet=function(){
        console.log('hello '+this.name)
     }
}

let jk=new Employee('jk', 1923)
jk.greet()

//add a new function using prototype
Employee.prototype.sayId=function(){
    console.log('MY Employee id is '+this.employee_id)
}

jk.sayId()

let m= new Employee('komal' , 1345)

//distructing 
let {name , employee_id}=m

let jsonstrig=JSON.stringify(jk);
let newjson=JSON.parse(jsonstrig)
console.log(jsonstrig)
console.log(newjson)

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

