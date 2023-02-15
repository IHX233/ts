(() => {
    function add(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else if (typeof a === "string" && typeof b === "string") {
            return a + b;
        }
    }
    console.log(add('g', 'f'));
    console.log(add(10, 8));
    //下面两种情况不行，会报错
    // console.log(add('g',8))
    // console.log(add(10,'f'))
})();
