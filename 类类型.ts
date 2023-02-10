//类 类型:类的类型，类的类型可以通过接口实现
(
    ()=>{
        interface IFly{
            //该方法没有任何实现（方法里什么都没有）
            fly(name)
        }
        interface ISwim{
            swim(name)
        }
        interface FlyAndSwim extends IFly,ISwim{//一个接口也可以继承其他接口

        }
        class Person implements IFly{//IFly接口约束了当前的Person类
            fly(name) {
                console.log(name+' can fly')
            }
        }
        class Person2 implements IFly,ISwim{
            fly(name) {
                console.log(name+' can fly')
            }
            swim(name) {
                console.log(name+' can swim')
            }
        }
        const person = new Person()
        person.fly('gf')
        const person2 = new Person2()
        person2.swim('ihx')
        person2.fly('ihx')
    }
)()