//父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        run(distance) {
            console.log(`${this.name}跑了${distance}米`);
        }
    }
    class Pig extends Animal {
        constructor(name) {
            super(name);
        }
        run(distance) {
            console.log(`${this.name}跑了${distance}米`);
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        run(distance) {
            console.log(`${this.name}跑了${distance}米`);
        }
    }
    const dog = new Dog('大黄');
    dog.run(15);
    const pig = new Pig('佩奇');
    pig.run(10);
    const dog1 = new Dog('小黄'); //多态
    dog1.run(8);
    const pig1 = new Pig('只猪侠');
    pig1.run(5);
})();
