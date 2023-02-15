(() => {
    function showMsg(str, ...args) {
        console.log(str);
        console.log(args);
    }
    showMsg('a', 'b', 'c', 'd');
})();
