//接口：是一种约束，一种能力
(()=>{
    //定义一个接口
    interface Person{
        firstName:string,
        lastName:string
    }
    function showFullName(person:Person){//传入函数的参数必须有firstName、lastName属性
        return person.firstName + person.lastName
    }
    const person = {
        firstName:'g',
        lastName:'f'
    }
    console.log(showFullName(person))
})()