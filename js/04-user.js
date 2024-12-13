class User {
  #login;
  #email;
  constructor(obj) {
    this.#login = obj.login;
    this.#email = obj.email;
  }
  get login() {
    return this.#login;
  }
  get email() {
    return this.#email;
  }

  set login(value) {
    this.#login = value;
  }
  set email(value) {
    this.#email = value;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});
console.log(mango.login);
