(() => {
    class GenericNumber {
    }
    const g = new GenericNumber();
    g.defaultValue = 100;
    g.add = function (x, y) {
        return x + y;
    };
    console.log(g.add(100, 200));
})();
