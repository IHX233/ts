(()=>{
    //定义一个接口，用来约束将来某个类型中必须有length这个属性
    interface ILength{
        length:number
    }
    function getLength<T extends ILength>(x:T):number{
        return x.length
    }
    getLength('gf')
})()