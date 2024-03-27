class user {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  viewData() {
    console.log(`Username = ${this.username}
Email = ${this.email}`);
  }
}

let student = new user("AadeeshJain", "aadeeshjain15@gmail.com");
