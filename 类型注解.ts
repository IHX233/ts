//类型注解：是一种轻量级的为函数或者变量添加的约束
//ts文件中可直接书写js代码，ts文件中只写js代码时，html文件可直接引入，但是写了ts代码就需要编译后引入生成的js文件
//ts中使用let会转成var
(()=>{
    function sayhi(str:string){
        return '你好啊'+str
        console.log(1)
    }
    console.log(sayhi('gf'))
})()