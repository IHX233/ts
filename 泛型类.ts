(()=>{
    class GenericNumber<T>{
        defaultValue:T
        add:(x:T,y:T) => T
    }
    const g:GenericNumber<number> = new GenericNumber<number>()
    g.defaultValue = 100
    g.add = function(x,y){
        return x+y
    }
    console.log(g.add(100,200))
})()