(() => {
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class UserCRUD {
        constructor() {
            this.data = [];
        }
        add(user) {
            this.data.push(user);
            return user;
        }
    }
})();
