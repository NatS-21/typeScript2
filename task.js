class User {
    static count = 0
  
    constructor(name, login, password) {
      this._name = name
      this._login = login
      this._password = password
      User.count++
    }
  
    get name() {
      return this._name
    }
  
    set name(name) {
      this._name = name
    }
  
    get login() {
      return this._login
    }
  
    get password() {
      return this._password
    }
  
    set password(password) {
      this._password = password
    }
  
    showInfo() {
      console.log(`Name: ${this._name}, Login: ${this._login}`)
    }
  }
  
  class SuperUser extends User {
    static count = 0
  
    constructor(name, login, password, role) {
      super(name, login, password)
      this._role = role
      SuperUser.count++
    }
  
    get role() {
      return this._role
    }
  
    set role(role) {
      this._role = role
    }
  
    showInfo() {
      console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`)
    }
  }
  
  const user1 = new User("John", "johndoe", "password")
  console.log(User.count) // 1
  user1.showInfo() // Name: John, Login: johndoe
  
  const user2 = new User("Jane", "janedoe", "password")
  console.log(User.count) // 2
  user2.name = "Jane Smith"
  user2.password = "newpassword"
  user2.showInfo() // Name: Jane Smith, Login: janedoe
  
  const superUser1 = new SuperUser("Admin", "admin", "adminpassword", "superuser")
  console.log(User.count) // 3
  console.log(SuperUser.count) // 1
  superUser1.showInfo() // Name: Admin, Login: admin, Role: superuser
  superUser1.role = "admin"
  superUser1.showInfo() // Name: Admin, Login: admin, Role: admin
  