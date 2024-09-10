// objects

let obj={
    value:10,
    toString: function(){
        return 'object with value'
    },
    valueof: function(){
        return this
    }
}

console.log(String(obj))
console.log(Number(obj))

let result= '5'*2;
console.log(typeof(result));
 
let k='5'+2;
console.log(typeof(k));

let person = new Object()
person.name='jones'
person.age=19;
console.log(person)