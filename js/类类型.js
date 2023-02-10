//类 类型:类的类型，类的类型可以通过接口实现
(() => {
    class Person {
        fly(name) {
            console.log(name + ' can fly');
        }
    }
    class Person2 {
        fly(name) {
            console.log(name + ' can fly');
        }
        swim(name) {
            console.log(name + ' can swim');
        }
    }
    const person = new Person();
    person.fly('gf');
    const person2 = new Person2();
    person2.swim('ihx');
    person2.fly('ihx');
    //类和接口之间叫实现（implements），接口和接口之间叫继承（extends）
})();
