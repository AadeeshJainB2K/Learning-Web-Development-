class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
class admin extends user {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    console.log("Now You Can Edit Data");
  }
}
let usr1 = new user("user1", "user1@mail.com");
let usr2 = new user("user2", "user2@mail.com");
let adm1 = new admin("adm1", "adm1@mail.com");
