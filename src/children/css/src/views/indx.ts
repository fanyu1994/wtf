
// 对象类型声明
let obj : {name: string, [proname: string]: any}
let objobj : {name: string,age?:number}
// 函数类型声明
let f : (a:number, b:string) => string;
// 数组类型声明
let a : [number][]
let aa: string[]
let aaaa :Array<number>

// 元组 固定长度的数组
let  tuple : [string, number,boolean]

// 枚举 enum
enum Gender {
    male,
    female
}

class Person {
    name: string = 'haha'
    age: number = 18
}

type myTYPE =  {
    name: string,
    age: number
}

interface myiNTEFACE {
    name: string,
    age:number,
    [p:string]:any
}

const objs: myiNTEFACE = {
    name:'xx',
    age:45,
    gene: true
}

const p = new Person()

console.log(p);

export default 1
