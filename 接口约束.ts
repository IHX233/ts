(() => {
    interface IPerson {
    //id为只读的，定义后便不可修改
    readonly id:number,
    name:string,
    age:number,
    //sex为可有可无
    sex?:string
}
const person:IPerson = {
    id:1,
    name:'gf',
    age:18
}})()