//只记了部分需要注意的
//数组类型
//定义数组方法1：
let arr1 = [10, 20, 30];
//定义数组方法2:
let arr2 = [10, 20, 30];
//数组定义后，数组里的数据类型必须和定义数组时一致，而且每一项数据的类型都是一致的
//元组类型：在定义数组时，类型和数据个数就确定了
let arr3 = ['gf', 100, true];
//枚举类型：枚举中每个数据值都可以叫做元素，每个元素都有自己的编号，编号默认从零开始，依次增加1
var Name;
(function (Name) {
    Name[Name["g"] = 0] = "g";
    Name[Name["f"] = 1] = "f";
})(Name || (Name = {}));
let firstName = Name.g;
console.log(firstName); // 0
console.log(Name.g, Name.f); // 0 1
//any类型，当不确定变量为什么类型时可以使用any定义
let str = 100;
let arr = [100, 'gf', true];
//void类型，声明未定义的变量
//函数不返回值或反、返回undefined、null时
function showName() {
    console.log(1);
    //return undefined
    return null;
}
//定义一个void变量可以接收一个undefined的值，但意义不大
let vd = undefined;
//联合类型（Union Types），表示取值可以为多种类型中的一种
function getString(str) {
    return str.toString();
}
//类型断言：告诉编译器，确定某变量的类型
//断言格式：1、<类型>变量名 2、变量名 as 类型
function getStringLength(str) {
    if (str.length) { //如果不用断言会报错，因为不确定str是string还是number，number是没有length的
        return str.length;
    }
    return str.toString().length;
}
//类型推断：没有明确一个变量的类型时，会自动为其推断一个类型
let n = 100; //number类型
let a; //any类型
