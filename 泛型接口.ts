(()=>{
    interface IBaseCRUD<T>{
        data:Array<T>,
        add:(t:T) => T
    }
    class User{
        id?:number
        name:string
        age:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
    }
    class UserCRUD implements IBaseCRUD<User>{
        data:Array<User> = []
        add(user:User):User{
            this.data.push(user)
            return user
        }
    }
})()