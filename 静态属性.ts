//静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及方法，也称之为静态成员
//静态成员在使用时通过类名.的这种语法来调用
(()=>{
    class Person{
        //静态属性
        static name1:string = 'gf'
        //静态方法
        constructor(name:string){
            //此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
            //this.name1 = name
        }
        //静态方法
        static sayHi(){
            console.log('hi')
        }
    }
    //通过实例对象来调用静态成员是不行的
    // let person = new Person('gf')
    // person.sayHi()
    console.log(Person.name1)
    Person.sayHi()
})()