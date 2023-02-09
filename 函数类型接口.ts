//为了使用接口表示函数类型，需要给接口定义一个调用签名
//它就像是一个只有参数列表和返回值类型的函数定义。参数列表的每个参数都需要名字和类型
(()=>{
    interface ISearch{
        (source:string,subString:string):boolean
    }
    const searchString:ISearch = function(source,subString){
        return source.search(subString) > -1
    }
    console.log(searchString('gf真帅','丑'))
})()