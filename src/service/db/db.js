import Firebase from "../firebase";

class Db {
  constructor(){
    this.db = Firebase.database();
  }
}
export default Db;