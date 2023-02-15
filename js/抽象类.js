//抽象类：包含抽象方法（抽象方法一般没有任何具体内容的实现），也可以包含实例方法，抽象类不能被实例化，为了让子类进行实例化及实现内部的抽象方法
//抽象类的目的就是服务子类
(() => {
    class Animal {
        sayhi() {
            console.log('hi');
        }
    }
    class Dog extends Animal {
        eat() {
            console.log('舔着吃');
        }
    }
    const dog = new Dog();
    dog.eat();
    dog.sayhi();
})();
