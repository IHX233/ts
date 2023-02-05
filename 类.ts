//定义一个类型
class Person{
    firstName:string
    lastName:string
    //定义一个构造函数
    constructor(firstName:string,lastName:string){
        //更新属性数据
        this.firstName = firstName
        this.lastName = lastName
    }
    
}
interface Person{
    firstName:string,
    lastName:string
}
function showFullName(person:Person){//传入函数的参数必须有firstName、lastName属性
    return person.firstName + person.lastName
}
const person = new Person('g','f')
console.log(showFullName(person))