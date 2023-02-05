//接口：是一种约束，一种能力
(() => {
    function showFullName(person) {
        return person.firstName + person.lastName;
    }
    const person = {
        firstName: 'g',
        lastName: 'f'
    };
    console.log(showFullName(person));
})();
