/**
 * User model
 */
 class User {
  constructor(data = {}) {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.region = null;
    this.email = null;
    this.password = null;
    this.username = null;
    this.token = null;
    this.status = null;
    this.age = null;

    Object.assign(this, data);
  }
}
export default User;
