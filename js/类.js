//定义一个类型
class Person {
    //定义一个构造函数
    constructor(firstName, lastName) {
        //更新属性数据
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
function showFullName(person) {
    return person.firstName + person.lastName;
}
const person = new Person('g', 'f');
console.log(showFullName(person));
