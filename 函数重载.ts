(()=>{
    //需求：我们有一个add函数，可以接收两个字符串进行拼接，也可以接收两个数字相加
    function add(a:string,b:string):string
    function add(a:number,b:number):string
    function add(a:string | number,b:string | number):string | number{
        if(typeof a === "number" && typeof b === "number"){
            return a + b
        }else if(typeof a === "string" && typeof b === "string"){
            return a + b
        }
    }
    console.log(add('g','f'))
    console.log(add(10,8))
    //下面两种情况不行，会报错
    // console.log(add('g',8))
    // console.log(add(10,'f'))
})()