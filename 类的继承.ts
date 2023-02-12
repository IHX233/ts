(()=>{
    class Person{
        name:string
        age:number
        sex:string
        constructor(name:string,age:number,sex:string){
            this.name = name
            this.age = age
            this.sex = sex
        }
        sayHi(str){
            console.log(`i am ${this.name}${str}`)
        }
    }
    class Student extends Person{
        constructor(name:string,age:number,sex:string){
            //调用父类中的构造方法用super
            super(name,age,sex)
        }
        sayHi(){
            console.log('hh')
            //调用父类中的方法
            super.sayHi('ll')
        }
    }
    const person = new Person('gf',18,'male')
    person.sayHi('jj')
    const student = new Student('ihx',18,'male')
    student.sayHi()
})()
