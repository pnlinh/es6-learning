class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static register(username, email) {
        return new User(username, email);
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

const user = User.register('pnlinh', 'pnlinh1207@gmail.com');

console.log(user);
